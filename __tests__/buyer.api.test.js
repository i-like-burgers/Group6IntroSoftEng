const request = require('supertest');

function loadBuyerApiApp({ role = 'buyer', prismaOverrides = {} } = {}) {
    jest.resetModules();

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
            findFirst: jest.fn()
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
    jest.doMock('../buyer/product_handling', () => ({
        addCompareItem: jest.fn(),
        getCompareItems: jest.fn().mockResolvedValue([]),
        removeCompareItem: jest.fn()
    }));

    return {
        app: require('../index'),
        prismaMock
    };
}

describe('buyer api routes', () => {
    afterEach(() => {
        jest.resetModules();
        jest.dontMock('../lib/prisma');
        jest.dontMock('../authenticate');
        jest.dontMock('../authorize');
        jest.dontMock('../services/audit');
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

    test('POST /api/buyer/cart/:id/remove removes an existing cart item', async () => {
        const { app, prismaMock } = loadBuyerApiApp();
        prismaMock.cartItem.deleteMany.mockResolvedValue({ count: 1 });

        const response = await request(app).post('/api/buyer/cart/501/remove');

        expect(response.status).toBe(200);
        expect(response.body).toEqual({ success: true });
        expect(prismaMock.cartItem.deleteMany).toHaveBeenCalled();
    });
});
