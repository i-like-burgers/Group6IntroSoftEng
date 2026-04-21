const request = require('supertest');

function loadAdminApiApp({ role = 'admin', prismaOverrides = {} } = {}) {
    jest.resetModules();

    const prismaMock = {
        user: {
            findMany: jest.fn(),
            count: jest.fn(),
            update: jest.fn()
        },
        product: {
            findMany: jest.fn(),
            update: jest.fn()
        },
        auditLog: {
            findMany: jest.fn(),
            create: jest.fn()
        },
        authToken: {
            findUnique: jest.fn(),
            deleteMany: jest.fn()
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
                id: 11,
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

describe('admin api routes', () => {
    afterEach(() => {
        jest.resetModules();
        jest.dontMock('../lib/prisma');
        jest.dontMock('../authenticate');
        jest.dontMock('../authorize');
        jest.dontMock('../services/audit');
        jest.dontMock('../buyer/product_handling');
    });

    test('GET /api/admin/audit-logs returns recent audit entries for admins', async () => {
        const logs = [
            {
                id: 1,
                username: 'admin-user',
                actionType: 'listing_approval',
                details: 'Approved Ryzen 9 9950X listing'
            }
        ];
        const { app, prismaMock } = loadAdminApiApp();
        prismaMock.auditLog.findMany.mockResolvedValue(logs);

        const response = await request(app).get('/api/admin/audit-logs');

        expect(response.status).toBe(200);
        expect(response.body).toEqual(logs);
    });

    test('POST /api/admin/ban-user/:id bans a user', async () => {
        const { app, prismaMock } = loadAdminApiApp();
        prismaMock.user.update.mockResolvedValue({
            id: 88,
            username: 'problem-buyer',
            blocked: false,
            banned: true
        });

        const response = await request(app).post('/api/admin/ban-user/88');

        expect(response.status).toBe(200);
        expect(response.body).toEqual({
            id: 88,
            username: 'problem-buyer',
            blocked: false,
            banned: true
        });
    });

    test('POST /api/admin/ban-user/:id rejects self-ban attempts', async () => {
        const { app, prismaMock } = loadAdminApiApp();

        const response = await request(app).post('/api/admin/ban-user/11');

        expect(response.status).toBe(403);
        expect(response.body).toEqual({
            error: 'Admins cannot ban their own account'
        });
        expect(prismaMock.user.update).not.toHaveBeenCalled();
    });

    test('POST /api/admin/block-user/:id rejects self-block attempts', async () => {
        const { app, prismaMock } = loadAdminApiApp();

        const response = await request(app).post('/api/admin/block-user/11');

        expect(response.status).toBe(403);
        expect(response.body).toEqual({
            error: 'Admins cannot block their own account'
        });
        expect(prismaMock.user.update).not.toHaveBeenCalled();
    });

    test('GET /api/admin/users returns paginated user data', async () => {
        const { app, prismaMock } = loadAdminApiApp();
        prismaMock.user.findMany.mockResolvedValue([
            {
                id: 17,
                username: 'ram-builder',
                email: 'ram-builder@ram.local',
                role: 'seller',
                approved: true,
                blocked: false,
                banned: false
            }
        ]);
        prismaMock.user.count.mockResolvedValue(1);

        const response = await request(app).get('/api/admin/users?search=ram&page=1');

        expect(response.status).toBe(200);
        expect(response.body.users).toHaveLength(1);
        expect(response.body.totalCount).toBe(1);
        expect(response.body.search).toBe('ram');
    });
});
