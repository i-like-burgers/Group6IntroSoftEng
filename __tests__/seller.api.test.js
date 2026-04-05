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

describe('seller api routes', () => {
    afterEach(() => {
        jest.resetModules();
        jest.dontMock('../lib/prisma');
        jest.dontMock('../authenticate');
        jest.dontMock('../authorize');
        jest.dontMock('../services/audit');
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
                price: 219.99,
                stock: 6,
                sellerId: 9,
                isListed: false,
                listingStatus: 'pending'
            }
        });
    });
});
