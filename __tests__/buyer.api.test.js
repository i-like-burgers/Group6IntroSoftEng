const request = require('supertest');

function loadBuyerApiApp({ role = 'buyer', prismaOverrides = {} } = {}) {
    jest.resetModules();

    const compareHandlers = {
        addCompareItem: jest.fn(),
        getCompareItems: jest.fn().mockResolvedValue([]),
        randomAccess: jest.fn(),
        removeCompareItem: jest.fn()
    };

    const prismaMock = {
        user: {
            findMany: jest.fn()
        },
        product: {
            findMany: jest.fn(),
            findFirst: jest.fn(),
            findUnique: jest.fn()
        },
        cartItem: {
            findMany: jest.fn(),
            findUnique: jest.fn(),
            upsert: jest.fn(),
            deleteMany: jest.fn()
        },
        order: {
            count: jest.fn(),
            findFirst: jest.fn(),
            findMany: jest.fn()
        },
        compare: {
            findUnique: jest.fn()
        },
        authToken: {
            findUnique: jest.fn(),
            deleteMany: jest.fn()
        },
        auditLog: {
            create: jest.fn()
        },
        sellerWebhookSubscription: {
            findMany: jest.fn()
        },
        ...prismaOverrides
    };

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
                id: 7,
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
        deliverSellerOrderPlacedWebhooks: jest.fn().mockResolvedValue(undefined)
    };
    jest.doMock('../services/seller-webhooks', () => webhookHandlers);
    jest.doMock('../buyer/product_handling', () => compareHandlers);

    return {
        app: require('../index'),
        prismaMock,
        compareHandlers,
        webhookHandlers
    };
}

describe('buyer api routes', () => {
    afterEach(() => {
        jest.resetModules();
        jest.dontMock('../lib/prisma');
        jest.dontMock('../authenticate');
        jest.dontMock('../authorize');
        jest.dontMock('../services/audit');
        jest.dontMock('../services/seller-webhooks');
        jest.dontMock('../buyer/product_handling');
    });

    test('GET /api/buyer/products returns listed products for buyers', async () => {
        const sampleProducts = [
            {
                id: 101,
                name: 'RTX 4070 Super',
                price: 599.99,
                stock: 8,
                seller: { username: 'gpu-seller' }
            }
        ];
        const { app, prismaMock } = loadBuyerApiApp();
        prismaMock.product.findMany.mockResolvedValue(sampleProducts);

        const response = await request(app).get('/api/buyer/products');

        expect(response.status).toBe(200);
        expect(response.body).toEqual(sampleProducts);
        expect(prismaMock.product.findMany).toHaveBeenCalled();
    });

    test('GET /api/buyer/products applies product search while preserving visibility filters', async () => {
        const { app, prismaMock } = loadBuyerApiApp();
        prismaMock.product.findMany.mockResolvedValue([]);

        const response = await request(app).get('/api/buyer/products?search=keyboard');

        expect(response.status).toBe(200);
        expect(prismaMock.product.findMany).toHaveBeenCalledWith(expect.objectContaining({
            where: {
                isListed: true,
                listingStatus: 'approved',
                seller: {
                    banned: false
                },
                OR: [
                    {
                        name: {
                            contains: 'keyboard'
                        }
                    },
                    {
                        description: {
                            contains: 'keyboard'
                        }
                    }
                ]
            }
        }));
    });

    test('GET /api/buyer/products/:id returns a specific listed product', async () => {
        const product = {
            id: 102,
            name: 'GeForce RTX 4090',
            description: '24GB graphics card',
            price: 1599.99,
            stock: 2,
            seller: { username: 'flagship-gpu-store' }
        };
        const { app, prismaMock } = loadBuyerApiApp();
        prismaMock.product.findFirst.mockResolvedValue(product);

        const response = await request(app).get('/api/buyer/products/102');

        expect(response.status).toBe(200);
        expect(response.body).toEqual(product);
        expect(prismaMock.product.findFirst).toHaveBeenCalled();
    });

    test('GET /api/buyer/random_access returns one random visible product', async () => {
        const product = {
            id: 103,
            name: 'Random GPU',
            price: 299.99,
            stock: 4,
            seller: { username: 'seller-user' }
        };
        const { app, compareHandlers } = loadBuyerApiApp();
        compareHandlers.randomAccess.mockResolvedValue(product);

        const response = await request(app).get('/api/buyer/random_access');

        expect(response.status).toBe(200);
        expect(response.body).toEqual(product);
        expect(compareHandlers.randomAccess).toHaveBeenCalledTimes(1);
    });

    test('GET /api/buyer/random_access returns 404 when no products are visible', async () => {
        const { app, compareHandlers } = loadBuyerApiApp();
        compareHandlers.randomAccess.mockResolvedValue(null);

        const response = await request(app).get('/api/buyer/random_access');

        expect(response.status).toBe(404);
        expect(response.body).toEqual({ error: 'No products available' });
    });

    test('GET /api/buyer/products rejects unauthenticated requests', async () => {
        const { app } = loadBuyerApiApp({ role: null });

        const response = await request(app).get('/api/buyer/products');

        expect(response.status).toBe(401);
        expect(response.body).toEqual({ error: 'Authentication is required' });
    });

    test('GET /api/buyer/products rejects non-buyer users', async () => {
        const { app } = loadBuyerApiApp({ role: 'seller' });

        const response = await request(app).get('/api/buyer/products');

        expect(response.status).toBe(403);
        expect(response.body).toEqual({ error: 'Access denied' });
    });

    test('POST /api/buyer/cart validates product and quantity', async () => {
        const { app } = loadBuyerApiApp();

        const response = await request(app)
            .post('/api/buyer/cart')
            .send({ productId: 'abc', quantity: 0 });

        expect(response.status).toBe(400);
        expect(response.body).toEqual({
            error: 'A valid product and quantity are required'
        });
    });

    test('GET /api/buyer/cart returns cart totals for the current buyer', async () => {
        const { app, prismaMock } = loadBuyerApiApp();
        prismaMock.cartItem.findMany.mockResolvedValue([
            {
                id: 601,
                quantity: 1,
                product: {
                    id: 55,
                    name: 'Corsair RM850x',
                    price: 149.99,
                    seller: { username: 'psu-hub' }
                }
            },
            {
                id: 602,
                quantity: 2,
                product: {
                    id: 56,
                    name: 'Noctua NH-D15',
                    price: 109.99,
                    seller: { username: 'cooling-lab' }
                }
            }
        ]);

        const response = await request(app).get('/api/buyer/cart');

        expect(response.status).toBe(200);
        expect(response.body.items).toHaveLength(2);
        expect(response.body.subtotal).toBe(369.97);
        expect(response.body.tax).toBe(25.9);
        expect(response.body.total).toBe(395.87);
    });

    test('GET /api/buyer/orders/:id returns an order for the current buyer', async () => {
        const { app, prismaMock } = loadBuyerApiApp();
        prismaMock.order.findFirst.mockResolvedValue({
            id: 701,
            buyerId: 7,
            status: 'placed',
            paymentMethod: 'demo_card',
            items: [
                {
                    id: 1,
                    productName: 'WD Black SN850X 2TB',
                    quantity: 1
                }
            ]
        });

        const response = await request(app).get('/api/buyer/orders/701');

        expect(response.status).toBe(200);
        expect(response.body).toEqual({
            id: 701,
            buyerId: 7,
            status: 'placed',
            paymentMethod: 'demo_card',
            items: [
                {
                    id: 1,
                    productName: 'WD Black SN850X 2TB',
                    quantity: 1
                }
            ]
        });
    });

    test('GET /api/buyer/orders returns paginated order history for the current buyer', async () => {
        const orders = [
            {
                id: 702,
                buyerId: 7,
                total: 129.99,
                createdAt: '2026-04-30T12:00:00.000Z',
                items: []
            }
        ];
        const { app, prismaMock } = loadBuyerApiApp();
        prismaMock.order.findMany.mockResolvedValue(orders);
        prismaMock.order.count.mockResolvedValue(12);

        const response = await request(app).get('/api/buyer/orders?page=2');

        expect(response.status).toBe(200);
        expect(response.body).toEqual({
            orders,
            page: 2,
            pageSize: 10,
            totalCount: 12,
            totalPages: 2,
            hasPreviousPage: true,
            hasNextPage: false
        });
        expect(prismaMock.order.findMany).toHaveBeenCalledWith({
            where: {
                buyerId: 7
            },
            include: {
                items: true
            },
            orderBy: {
                createdAt: 'desc'
            },
            skip: 10,
            take: 10
        });
        expect(prismaMock.order.count).toHaveBeenCalledWith({
            where: {
                buyerId: 7
            }
        });
    });

    test('GET /api/buyer/orders/:id returns 404 for another buyer order', async () => {
        const { app, prismaMock } = loadBuyerApiApp();
        prismaMock.order.findFirst.mockResolvedValue(null);

        const response = await request(app).get('/api/buyer/orders/999');

        expect(response.status).toBe(404);
        expect(response.body).toEqual({ error: 'Order not found' });
        expect(prismaMock.order.findFirst).toHaveBeenCalledWith(expect.objectContaining({
            where: {
                id: 999,
                buyerId: 7
            }
        }));
    });

    test('GET /api/buyer/compare returns the comparison list for the current buyer', async () => {
        const { app, compareHandlers } = loadBuyerApiApp();
        compareHandlers.getCompareItems.mockResolvedValue([
            {
                id: 801,
                name: 'MSI GeForce RTX 4080 Super',
                price: 999.99
            }
        ]);

        const response = await request(app).get('/api/buyer/compare');

        expect(response.status).toBe(200);
        expect(response.body).toEqual({
            items: [
                {
                    id: 801,
                    name: 'MSI GeForce RTX 4080 Super',
                    price: 999.99
                }
            ]
        });
        expect(compareHandlers.getCompareItems).toHaveBeenCalledWith(7);
    });

    test('POST /api/buyer/cart adds an available product to cart', async () => {
        const { app, prismaMock } = loadBuyerApiApp();
        prismaMock.product.findUnique.mockResolvedValue({
            id: 42,
            name: 'Ryzen 7 7800X3D',
            stock: 5,
            isListed: true,
            listingStatus: 'approved'
        });
        prismaMock.cartItem.findUnique.mockResolvedValue(null);
        prismaMock.cartItem.upsert.mockResolvedValue({
            id: 501,
            buyerId: 7,
            productId: 42,
            quantity: 2
        });

        const response = await request(app)
            .post('/api/buyer/cart')
            .send({ productId: 42, quantity: 2 });

        expect(response.status).toBe(201);
        expect(response.body).toEqual({
            id: 501,
            buyerId: 7,
            productId: 42,
            quantity: 2
        });
        expect(prismaMock.cartItem.upsert).toHaveBeenCalled();
    });

    test('POST /api/buyer/compare validates the product id', async () => {
        const { app } = loadBuyerApiApp();

        const response = await request(app)
            .post('/api/buyer/compare')
            .send({ productId: 'abc' });

        expect(response.status).toBe(400);
        expect(response.body).toEqual({
            error: 'A valid product is required'
        });
    });

    test('POST /api/buyer/compare adds an available product to the comparison list', async () => {
        const { app, prismaMock, compareHandlers } = loadBuyerApiApp();
        prismaMock.product.findFirst.mockResolvedValue({
            id: 88,
            name: 'Samsung 990 Pro 2TB',
            isListed: true,
            seller: {
                banned: false
            }
        });
        prismaMock.compare.findUnique.mockResolvedValue(null);
        compareHandlers.addCompareItem.mockResolvedValue({
            buyerID: 7,
            productID: 88
        });

        const response = await request(app)
            .post('/api/buyer/compare')
            .send({ productId: 88 });

        expect(response.status).toBe(201);
        expect(response.body).toEqual({
            buyerID: 7,
            productID: 88
        });
        expect(compareHandlers.addCompareItem).toHaveBeenCalledWith({
            buyerID: 7,
            productID: 88
        });
    });

    test('POST /api/buyer/cart/:id/remove removes an existing cart item', async () => {
        const { app, prismaMock } = loadBuyerApiApp();
        prismaMock.cartItem.deleteMany.mockResolvedValue({ count: 1 });

        const response = await request(app).post('/api/buyer/cart/501/remove');

        expect(response.status).toBe(200);
        expect(response.body).toEqual({ success: true });
        expect(prismaMock.cartItem.deleteMany).toHaveBeenCalled();
    });

    test('POST /api/buyer/compare/:id/remove removes an existing comparison item', async () => {
        const { app, compareHandlers } = loadBuyerApiApp();
        compareHandlers.removeCompareItem.mockResolvedValue({ count: 1 });

        const response = await request(app).post('/api/buyer/compare/88/remove');

        expect(response.status).toBe(200);
        expect(response.body).toEqual({ success: true });
        expect(compareHandlers.removeCompareItem).toHaveBeenCalledWith({
            buyerID: 7,
            productID: 88
        });
    });

    test('POST /api/buyer/checkout requires a complete shipping address', async () => {
        const { app } = loadBuyerApiApp({
            prismaOverrides: {
                $transaction: jest.fn()
            }
        });

        const response = await request(app)
            .post('/api/buyer/checkout')
            .send({
                paymentMethod: 'demo_card',
                shippingAddress: {
                    name: 'Ada Lovelace'
                }
            });

        expect(response.status).toBe(400);
        expect(response.body).toEqual({
            error: 'A complete shipping address is required'
        });
    });

    test('POST /api/buyer/checkout creates an order with shipping data and triggers seller webhooks', async () => {
        const txMock = {
            cartItem: {
                findMany: jest.fn().mockResolvedValue([
                    {
                        id: 1,
                        quantity: 2,
                        productId: 42,
                        product: {
                            id: 42,
                            name: 'Warehouse Keyboard',
                            price: 99.5,
                            stock: 10,
                            isListed: true,
                            listingStatus: 'approved',
                            sellerId: 9,
                            seller: {
                                id: 9,
                                username: 'seller-user',
                                banned: false
                            }
                        }
                    }
                ])
            },
            order: {
                create: jest.fn().mockImplementation(async ({ data }) => ({
                    id: 901,
                    buyerId: 7,
                    paymentMethod: data.paymentMethod,
                    shipToName: data.shipToName,
                    shipToLine1: data.shipToLine1,
                    shipToLine2: data.shipToLine2,
                    shipToCity: data.shipToCity,
                    shipToState: data.shipToState,
                    shipToPostalCode: data.shipToPostalCode,
                    shipToCountry: data.shipToCountry,
                    subtotal: data.subtotal,
                    taxRate: data.taxRate,
                    taxAmount: data.taxAmount,
                    total: data.total,
                    createdAt: '2026-04-28T00:00:00.000Z',
                    items: [
                        {
                            sellerId: 9,
                            productName: 'Warehouse Keyboard',
                            quantity: 2
                        }
                    ]
                }))
            },
            product: {
                updateMany: jest.fn().mockResolvedValue({ count: 1 })
            },
            cartItemDeleteMany: jest.fn(),
            auditLog: {
                create: jest.fn()
            }
        };
        txMock.cartItem.deleteMany = jest.fn().mockResolvedValue({ count: 1 });

        const { app, prismaMock, webhookHandlers } = loadBuyerApiApp({
            prismaOverrides: {
                $transaction: jest.fn(async (handler) => handler(txMock))
            }
        });

        const response = await request(app)
            .post('/api/buyer/checkout')
            .send({
                paymentMethod: 'demo_card',
                shippingAddress: {
                    name: 'Ada Lovelace',
                    line1: '123 Main St',
                    line2: 'Apt 4B',
                    city: 'Bismarck',
                    state: 'ND',
                    postalCode: '58501',
                    country: 'CA'
                }
            });

        expect(response.status).toBe(201);
        expect(response.body.order.shipToName).toBe('Ada Lovelace');
        expect(txMock.order.create).toHaveBeenCalledWith(expect.objectContaining({
            data: expect.objectContaining({
                shipToName: 'Ada Lovelace',
                shipToLine1: '123 Main St',
                shipToLine2: 'Apt 4B',
                shipToCity: 'Bismarck',
                shipToState: 'ND',
                shipToPostalCode: '58501',
                shipToCountry: 'US'
            })
        }));
        expect(webhookHandlers.deliverSellerOrderPlacedWebhooks).toHaveBeenCalledWith(
            expect.objectContaining({
                id: 901,
                shipToName: 'Ada Lovelace'
            })
        );
        expect(prismaMock.$transaction).toHaveBeenCalled();
    });
});
