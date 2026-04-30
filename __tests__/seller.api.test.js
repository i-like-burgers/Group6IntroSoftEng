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
        sellerWebhookSubscription: {
            findUnique: jest.fn(),
            create: jest.fn(),
            upsert: jest.fn()
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
});
