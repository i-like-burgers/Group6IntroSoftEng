const request = require('supertest');

function loadSellerApiApp({ role = 'seller', prismaOverrides = {} } = {}) {
    jest.resetModules();

    const prismaMock = {
        user: {
            findMany: jest.fn()
        },
        product: {
            findMany: jest.fn(),
            create: jest.fn()
        },
        orderItem: {
            findMany: jest.fn(),
            count: jest.fn(),
            aggregate: jest.fn()
        },
        sellerWallet: {
            upsert: jest.fn(),
            update: jest.fn()
        },
        sellerBankAccount: {
            findUnique: jest.fn(),
            upsert: jest.fn()
        },
        sellerPayout: {
            findMany: jest.fn(),
            create: jest.fn(),
            aggregate: jest.fn()
        },
        returnRequest: {
            findMany: jest.fn(),
            findFirst: jest.fn(),
            update: jest.fn()
        },
        authToken: {
            findUnique: jest.fn(),
            deleteMany: jest.fn()
        },
        auditLog: {
            create: jest.fn()
        },
        sellerWebhookSubscription: {
            findUnique: jest.fn(),
            create: jest.fn(),
            upsert: jest.fn()
        },
        ...prismaOverrides
    };
    prismaMock.$transaction = prismaMock.$transaction || jest.fn(async (handler) => handler(prismaMock));
    prismaMock.orderItem.aggregate.mockResolvedValue({
        _sum: {
            lineTotal: null,
            quantity: null
        },
        _count: {
            _all: 0
        }
    });
    prismaMock.sellerPayout.aggregate.mockResolvedValue({
        _sum: {
            amount: null
        }
    });
    prismaMock.returnRequest.findMany.mockResolvedValue([]);

    jest.doMock('../lib/prisma', () => prismaMock);
    jest.doMock('../authenticate', () => ({
        generateToken: jest.fn(() => 'test-token'),
        storeToken: jest.fn(),
        deleteToken: jest.fn(),
        authenticateToken: (req, res, next) => {
            if (!role) {
                return res.status(401).json({ error: 'Authentication is required' });
            }

            req.user = {
                id: 9,
                username: `${role}-user`,
                role
            };
            req.token = 'test-token';
            next();
        }
    }));
    jest.doMock('../authorize', () => ({
        requireRole: (...allowedRoles) => (req, res, next) => {
            if (!req.user) {
                return res.status(401).json({ error: 'Authentication is required' });
            }

            if (!allowedRoles.includes(req.user.role)) {
                return res.status(403).json({ error: 'Access denied' });
            }

            next();
        }
    }));
    jest.doMock('../services/audit', () => ({
        logAuditAction: jest.fn().mockResolvedValue(undefined)
    }));
    const webhookHandlers = {
        getSellerWebhookConfig: jest.fn(),
        upsertSellerWebhookConfig: jest.fn(),
        deliverSellerOrderPlacedWebhooks: jest.fn()
    };
    jest.doMock('../services/seller-webhooks', () => webhookHandlers);
    jest.doMock('../buyer/product_handling', () => ({
        addCompareItem: jest.fn(),
        getCompareItems: jest.fn().mockResolvedValue([]),
        removeCompareItem: jest.fn()
    }));

    return {
        app: require('../index'),
        prismaMock,
        webhookHandlers
    };
}

describe('seller api routes', () => {
    afterEach(() => {
        jest.resetModules();
        jest.dontMock('../lib/prisma');
        jest.dontMock('../authenticate');
        jest.dontMock('../authorize');
        jest.dontMock('../services/audit');
        jest.dontMock('../services/seller-webhooks');
        jest.dontMock('../buyer/product_handling');
    });

    test('GET /api/seller/products returns products for authenticated sellers', async () => {
        const sampleProducts = [
            { id: 201, name: 'Samsung 990 Pro 2TB', sellerId: 9, stock: 3 }
        ];
        const { app, prismaMock } = loadSellerApiApp();
        prismaMock.product.findMany.mockResolvedValue(sampleProducts);

        const response = await request(app).get('/api/seller/products');

        expect(response.status).toBe(200);
        expect(response.body).toEqual(sampleProducts);
        expect(prismaMock.product.findMany).toHaveBeenCalled();
    });

    test('GET /api/seller/products rejects non-seller users', async () => {
        const { app } = loadSellerApiApp({ role: 'buyer' });

        const response = await request(app).get('/api/seller/products');

        expect(response.status).toBe(403);
        expect(response.body).toEqual({ error: 'Access denied' });
    });

    test('GET /api/seller/sales returns sales and summary for authenticated sellers', async () => {
        const sampleSales = [
            {
                id: 301,
                productId: 201,
                sellerId: 9,
                productName: 'Samsung 990 Pro 2TB',
                unitPrice: 179.99,
                quantity: 2,
                lineTotal: 359.98,
                orderId: 88,
                order: {
                    id: 88,
                    status: 'placed',
                    paymentMethod: 'demo_card',
                    createdAt: '2026-04-30T12:00:00.000Z'
                }
            }
        ];
        const { app, prismaMock } = loadSellerApiApp();
        prismaMock.orderItem.findMany
            .mockResolvedValueOnce(sampleSales)
            .mockResolvedValueOnce([{ orderId: 88 }]);
        prismaMock.orderItem.count.mockResolvedValue(1);
        prismaMock.orderItem.aggregate.mockResolvedValue({
            _sum: {
                lineTotal: 359.98,
                quantity: 2
            },
            _count: {
                _all: 1
            }
        });

        const response = await request(app).get('/api/seller/sales?page=1');

        expect(response.status).toBe(200);
        expect(response.body).toEqual({
            sales: sampleSales,
            summary: {
                grossSales: 359.98,
                unitsSold: 2,
                orderItemCount: 1,
                orderCount: 1
            },
            page: 1,
            pageSize: 10,
            totalCount: 1,
            totalPages: 1,
            hasPreviousPage: false,
            hasNextPage: false
        });
        expect(prismaMock.orderItem.findMany).toHaveBeenNthCalledWith(1, {
            where: {
                sellerId: 9
            },
            include: {
                order: {
                    select: {
                        id: true,
                        status: true,
                        paymentMethod: true,
                        createdAt: true
                    }
                }
            },
            orderBy: {
                order: {
                    createdAt: 'desc'
                }
            },
            skip: 0,
            take: 10
        });
        expect(prismaMock.orderItem.aggregate).toHaveBeenCalledWith({
            where: {
                sellerId: 9
            },
            _sum: {
                lineTotal: true,
                quantity: true
            },
            _count: {
                _all: true
            }
        });
    });

    test('GET /api/seller/sales rejects non-seller users', async () => {
        const { app } = loadSellerApiApp({ role: 'buyer' });

        const response = await request(app).get('/api/seller/sales');

        expect(response.status).toBe(403);
        expect(response.body).toEqual({ error: 'Access denied' });
    });

    test('GET /api/seller/returns returns return requests for seller order items', async () => {
        const returnRequests = [
            {
                id: 44,
                status: 'submitted',
                reason: 'damaged',
                orderItem: {
                    productName: 'Samsung 990 Pro 2TB',
                    sellerId: 9,
                    order: {
                        id: 88
                    }
                },
                buyer: {
                    username: 'buyer-user'
                }
            }
        ];
        const { app, prismaMock } = loadSellerApiApp();
        prismaMock.returnRequest.findMany.mockResolvedValue(returnRequests);

        const response = await request(app).get('/api/seller/returns');

        expect(response.status).toBe(200);
        expect(response.body).toEqual(returnRequests);
        expect(prismaMock.returnRequest.findMany).toHaveBeenCalledWith(expect.objectContaining({
            where: {
                orderItem: {
                    sellerId: 9
                }
            }
        }));
    });

    test('POST /api/seller/returns/:id/status updates a seller return request', async () => {
        const { app, prismaMock } = loadSellerApiApp();
        prismaMock.returnRequest.findFirst.mockResolvedValue({
            id: 44,
            status: 'submitted',
            orderItem: {
                productName: 'Samsung 990 Pro 2TB',
                sellerId: 9
            }
        });
        prismaMock.returnRequest.update.mockResolvedValue({
            id: 44,
            status: 'approved',
            orderItem: {
                productName: 'Samsung 990 Pro 2TB',
                sellerId: 9
            }
        });
        prismaMock.sellerWallet.upsert.mockResolvedValue({
            sellerId: 9,
            balance: 0,
            totalEarned: 0
        });

        const response = await request(app)
            .post('/api/seller/returns/44/status')
            .send({ status: 'approved' });

        expect(response.status).toBe(200);
        expect(response.body.status).toBe('approved');
        expect(prismaMock.returnRequest.update).toHaveBeenCalledWith(expect.objectContaining({
            where: {
                id: 44
            },
            data: {
                status: 'approved'
            }
        }));
        expect(prismaMock.sellerWallet.upsert).toHaveBeenCalled();
    });

    test('POST /api/seller/products validates required fields', async () => {
        const { app } = loadSellerApiApp();

        const response = await request(app)
            .post('/api/seller/products')
            .send({ name: '', price: 'abc', stock: -1 });

        expect(response.status).toBe(400);
        expect(response.body).toEqual({
            error: 'Name, price, and stock are required'
        });
    });

    test('POST /api/seller/products creates a pending listing', async () => {
        const { app, prismaMock } = loadSellerApiApp();
        prismaMock.product.create.mockResolvedValue({
            id: 202,
            name: 'ASUS TUF B650-Plus WiFi',
            description: 'AM5 ATX motherboard',
            imageUrl: '/images/product-placeholder.png',
            price: 219.99,
            stock: 6,
            sellerId: 9,
            isListed: false,
            listingStatus: 'pending'
        });

        const response = await request(app)
            .post('/api/seller/products')
            .send({
                name: 'ASUS TUF B650-Plus WiFi',
                description: 'AM5 ATX motherboard',
                price: 219.99,
                stock: 6
            });

        expect(response.status).toBe(201);
        expect(response.body).toEqual({
            id: 202,
            name: 'ASUS TUF B650-Plus WiFi',
            description: 'AM5 ATX motherboard',
            imageUrl: '/images/product-placeholder.png',
            price: 219.99,
            stock: 6,
            sellerId: 9,
            isListed: false,
            listingStatus: 'pending'
        });
        expect(prismaMock.product.create).toHaveBeenCalledWith({
            data: {
                name: 'ASUS TUF B650-Plus WiFi',
                description: 'AM5 ATX motherboard',
                imageUrl: '/images/product-placeholder.png',
                price: 219.99,
                stock: 6,
                sellerId: 9,
                isListed: false,
                listingStatus: 'pending'
            }
        });
    });

    test('POST /api/seller/products rejects unsupported product image data', async () => {
        const { app } = loadSellerApiApp();

        const response = await request(app)
            .post('/api/seller/products')
            .send({
                name: 'ASUS TUF B650-Plus WiFi',
                description: 'AM5 ATX motherboard',
                imageDataUrl: 'data:text/plain;base64,SGVsbG8=',
                price: 219.99,
                stock: 6
            });

        expect(response.status).toBe(400);
        expect(response.body).toEqual({
            error: 'Product image must be a JPEG or PNG file'
        });
    });

    test('GET /api/seller/webhook returns the current seller webhook configuration', async () => {
        const { app, webhookHandlers } = loadSellerApiApp();
        webhookHandlers.getSellerWebhookConfig.mockResolvedValue({
            sellerId: 9,
            endpointUrl: 'https://warehouse.example.test/order-hook',
            signingSecret: 'secret-123',
            isActive: true
        });

        const response = await request(app).get('/api/seller/webhook');

        expect(response.status).toBe(200);
        expect(response.body).toEqual({
            sellerId: 9,
            endpointUrl: 'https://warehouse.example.test/order-hook',
            signingSecret: 'secret-123',
            isActive: true
        });
    });

    test('PUT /api/seller/webhook validates active webhook configuration', async () => {
        const { app } = loadSellerApiApp();

        const response = await request(app)
            .put('/api/seller/webhook')
            .send({
                endpointUrl: '',
                isActive: true
            });

        expect(response.status).toBe(400);
        expect(response.body).toEqual({
            error: 'An active webhook must include an endpoint URL'
        });
    });

    test('PUT /api/seller/webhook saves seller webhook configuration', async () => {
        const { app, webhookHandlers } = loadSellerApiApp();
        webhookHandlers.upsertSellerWebhookConfig.mockResolvedValue({
            sellerId: 9,
            endpointUrl: 'https://warehouse.example.test/order-hook',
            signingSecret: 'secret-456',
            isActive: true
        });

        const response = await request(app)
            .put('/api/seller/webhook')
            .send({
                endpointUrl: 'https://warehouse.example.test/order-hook',
                isActive: true,
                regenerateSecret: true
            });

        expect(response.status).toBe(200);
        expect(response.body).toEqual({
            sellerId: 9,
            endpointUrl: 'https://warehouse.example.test/order-hook',
            signingSecret: 'secret-456',
            isActive: true
        });
        expect(webhookHandlers.upsertSellerWebhookConfig).toHaveBeenCalledWith({
            sellerId: 9,
            endpointUrl: 'https://warehouse.example.test/order-hook',
            isActive: true,
            regenerateSecret: true
        });
    });

    test('GET /api/seller/wallet returns wallet, bank, and recent payouts', async () => {
        const { app, prismaMock } = loadSellerApiApp();
        prismaMock.orderItem.aggregate.mockResolvedValue({
            _sum: {
                lineTotal: 200
            }
        });
        prismaMock.sellerPayout.aggregate.mockResolvedValue({
            _sum: {
                amount: 74.5
            }
        });
        prismaMock.returnRequest.findMany.mockResolvedValue([
            {
                orderItem: {
                    lineTotal: 25
                }
            }
        ]);
        prismaMock.sellerWallet.upsert.mockResolvedValue({
            sellerId: 9,
            balance: 100.5,
            totalEarned: 175
        });
        prismaMock.sellerBankAccount.findUnique.mockResolvedValue({
            sellerId: 9,
            accountHolder: 'Seller User',
            bankName: 'Demo National Bank',
            routingLast4: '1100',
            accountLast4: '6789'
        });
        prismaMock.sellerPayout.findMany.mockResolvedValue([
            {
                id: 1,
                sellerId: 9,
                amount: 50,
                status: 'paid'
            }
        ]);

        const response = await request(app).get('/api/seller/wallet');

        expect(response.status).toBe(200);
        expect(response.body.wallet).toEqual({
            sellerId: 9,
            balance: 100.5,
            totalEarned: 175
        });
        expect(response.body.bankAccount.accountLast4).toBe('6789');
        expect(response.body.payouts).toHaveLength(1);
        expect(prismaMock.sellerWallet.upsert).toHaveBeenCalledWith({
            where: {
                sellerId: 9
            },
            create: {
                sellerId: 9,
                balance: 100.5,
                totalEarned: 175
            },
            update: {
                balance: 100.5,
                totalEarned: 175
            }
        });
    });

    test('PUT /api/seller/wallet/bank-account saves mock bank details as last-four values', async () => {
        const { app, prismaMock } = loadSellerApiApp();
        prismaMock.sellerBankAccount.upsert.mockResolvedValue({
            sellerId: 9,
            accountHolder: 'Seller User',
            bankName: 'Demo National Bank',
            routingLast4: '1100',
            accountLast4: '6789'
        });

        const response = await request(app)
            .put('/api/seller/wallet/bank-account')
            .send({
                accountHolder: 'Seller User',
                bankName: 'Demo National Bank',
                routingNumber: '021000021100',
                accountNumber: '123456789'
            });

        expect(response.status).toBe(200);
        expect(response.body).toEqual({
            sellerId: 9,
            accountHolder: 'Seller User',
            bankName: 'Demo National Bank',
            routingLast4: '1100',
            accountLast4: '6789'
        });
        expect(prismaMock.sellerBankAccount.upsert).toHaveBeenCalledWith({
            where: {
                sellerId: 9
            },
            create: {
                sellerId: 9,
                accountHolder: 'Seller User',
                bankName: 'Demo National Bank',
                routingLast4: '1100',
                accountLast4: '6789'
            },
            update: {
                accountHolder: 'Seller User',
                bankName: 'Demo National Bank',
                routingLast4: '1100',
                accountLast4: '6789'
            }
        });
    });

    test('POST /api/seller/wallet/payouts requires saved mock bank details', async () => {
        const { app, prismaMock } = loadSellerApiApp();
        prismaMock.sellerBankAccount.findUnique.mockResolvedValue(null);

        const response = await request(app)
            .post('/api/seller/wallet/payouts')
            .send({ amount: 25 });

        expect(response.status).toBe(400);
        expect(response.body).toEqual({
            error: 'Save mock bank details before requesting a payout'
        });
    });

    test('POST /api/seller/wallet/payouts withdraws from wallet balance', async () => {
        const { app, prismaMock } = loadSellerApiApp();
        prismaMock.sellerBankAccount.findUnique.mockResolvedValue({
            sellerId: 9,
            bankName: 'Demo National Bank',
            accountLast4: '6789'
        });
        prismaMock.orderItem.aggregate.mockResolvedValue({
            _sum: {
                lineTotal: 200
            }
        });
        prismaMock.sellerPayout.aggregate.mockResolvedValue({
            _sum: {
                amount: 74.5
            }
        });
        prismaMock.sellerWallet.upsert.mockResolvedValue({
            sellerId: 9,
            balance: 125.5,
            totalEarned: 200
        });
        prismaMock.sellerWallet.update.mockResolvedValue({
            sellerId: 9,
            balance: 75.5,
            totalEarned: 200
        });
        prismaMock.sellerPayout.create.mockResolvedValue({
            id: 5,
            sellerId: 9,
            amount: 50,
            status: 'paid',
            note: 'April withdrawal'
        });

        const response = await request(app)
            .post('/api/seller/wallet/payouts')
            .send({
                amount: 50,
                note: 'April withdrawal'
            });

        expect(response.status).toBe(201);
        expect(response.body.wallet.balance).toBe(75.5);
        expect(response.body.payout.amount).toBe(50);
        expect(prismaMock.sellerWallet.update).toHaveBeenCalledWith({
            where: {
                sellerId: 9
            },
            data: {
                balance: {
                    decrement: 50
                }
            }
        });
    });
});
