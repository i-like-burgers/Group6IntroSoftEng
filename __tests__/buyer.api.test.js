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
});
