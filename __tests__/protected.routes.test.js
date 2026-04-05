const request = require('supertest');

function loadAppForRole(role) {
    jest.resetModules();

    jest.doMock('../authenticate', () => ({
        generateToken: jest.fn(() => 'test-token'),
        storeToken: jest.fn(),
        deleteToken: jest.fn(),
        authenticateToken: (req, res, next) => {
            if (!role) {
                return res.redirect('/login');
            }

            req.user = {
                id: 1,
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
                return res.redirect('/login');
            }

            if (!allowedRoles.includes(req.user.role)) {
                return res.redirect('/denied');
            }

            next();
        }
    }));

    return require('../index');
}

describe('protected routes', () => {
    afterEach(() => {
        jest.resetModules();
        jest.dontMock('../authenticate');
        jest.dontMock('../authorize');
    });

    test('unauthenticated GET /buyer/home redirects to /login', async () => {
        const app = loadAppForRole(null);
        const response = await request(app).get('/buyer/home');

        expect(response.status).toBe(302);
        expect(response.headers.location).toBe('/login');
    });

    test('authenticated buyer can access /buyer/home', async () => {
        const app = loadAppForRole('buyer');
        const response = await request(app).get('/buyer/home');

        expect(response.status).toBe(200);
        expect(response.text).toContain('Buyer Home');
    });

    test('authenticated seller is redirected away from /buyer/home', async () => {
        const app = loadAppForRole('seller');
        const response = await request(app).get('/buyer/home');

        expect(response.status).toBe(302);
        expect(response.headers.location).toBe('/denied');
    });

    test('authenticated admin can access /admin/audit', async () => {
        const app = loadAppForRole('admin');
        const response = await request(app).get('/admin/audit');

        expect(response.status).toBe(200);
        expect(response.text).toContain('AUDIT LOG');
    });
});
