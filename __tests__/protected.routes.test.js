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
        expect(response.text).toContain('Buyer Frontend Preview');
    });

    test('authenticated seller is redirected away from /buyer/home', async () => {
        const app = loadAppForRole('seller');
        const response = await request(app).get('/buyer/home');

        expect(response.status).toBe(302);
        expect(response.headers.location).toBe('/denied');
    });

    test('authenticated admin can access /admin', async () => {
        const app = loadAppForRole('admin');
        const response = await request(app).get('/admin');

        expect(response.status).toBe(200);
        expect(response.text).toContain('Admin Workspace');
    });

    test('authenticated super-admin can access /admin', async () => {
        const app = loadAppForRole('super-admin');
        const response = await request(app).get('/admin');

        expect(response.status).toBe(200);
        expect(response.text).toContain('Admin Workspace');
    });

    test('authenticated admin can access /admin/sub', async () => {
        const app = loadAppForRole('admin');
        const response = await request(app).get('/admin/sub');

        expect(response.status).toBe(200);
        expect(response.text).toContain('Admin Workspace');
    });

    test('authenticated admin can access /admin/audit', async () => {
        const app = loadAppForRole('admin');
        const response = await request(app).get('/admin/audit');

        expect(response.status).toBe(200);
        expect(response.text).toContain('Admin Workspace');
    });

    test('authenticated admin can access /admin/classic', async () => {
        const app = loadAppForRole('admin');
        const response = await request(app).get('/admin/classic');

        expect(response.status).toBe(200);
        expect(response.text).toContain('ADMINISTRATION HOME');
    });

    test('authenticated seller can access /seller/home', async () => {
        const app = loadAppForRole('seller');
        const response = await request(app).get('/seller/home');

        expect(response.status).toBe(200);
        expect(response.text).toContain('Seller Frontend Preview');
    });

    test('authenticated seller can access /seller/inventory', async () => {
        const app = loadAppForRole('seller');
        const response = await request(app).get('/seller/inventory');

        expect(response.status).toBe(200);
        expect(response.text).toContain('Seller Frontend Preview');
    });

    test('authenticated seller can access /seller/classic/home', async () => {
        const app = loadAppForRole('seller');
        const response = await request(app).get('/seller/classic/home');

        expect(response.status).toBe(200);
        expect(response.text).toContain('Seller Home Page');
    });

    test('authenticated buyer can access /buyer/classic/home', async () => {
        const app = loadAppForRole('buyer');
        const response = await request(app).get('/buyer/classic/home');

        expect(response.status).toBe(200);
        expect(response.text).toContain('Buyer Home');
    });

    test('authenticated buyer can access /buyer/cart', async () => {
        const app = loadAppForRole('buyer');
        const response = await request(app).get('/buyer/cart');

        expect(response.status).toBe(200);
        expect(response.text).toContain('Buyer Frontend Preview');
    });

    test('authenticated buyer can access /buyer/checkout', async () => {
        const app = loadAppForRole('buyer');
        const response = await request(app).get('/buyer/checkout');

        expect(response.status).toBe(200);
        expect(response.text).toContain('Buyer Frontend Preview');
    });

    test('authenticated buyer can access /buyer/products/42', async () => {
        const app = loadAppForRole('buyer');
        const response = await request(app).get('/buyer/products/42');

        expect(response.status).toBe(200);
        expect(response.text).toContain('Buyer Frontend Preview');
    });

    test('authenticated buyer can access /buyer/orders/42/confirmation', async () => {
        const app = loadAppForRole('buyer');
        const response = await request(app).get('/buyer/orders/42/confirmation');

        expect(response.status).toBe(200);
        expect(response.text).toContain('Buyer Frontend Preview');
    });
});
