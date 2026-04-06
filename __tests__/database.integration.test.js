const bcrypt = require('bcrypt');
const request = require('supertest');
const app = require('../index');
const prisma = require('../lib/prisma');

describe('database integration', () => {
    let createdUserId;
    let uniqueSuffix;

    beforeEach(() => {
        uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 100000)}`;
    });

    afterEach(async () => {
        if (createdUserId) {
            await prisma.authToken.deleteMany({
                where: { userId: createdUserId }
            });
            await prisma.user.deleteMany({
                where: { id: createdUserId }
            });
            createdUserId = null;
        }
    });

    afterAll(async () => {
        await prisma.$disconnect();
    });

    test('GET /test returns users from the real database', async () => {
        const username = `integration-buyer-${uniqueSuffix}`;
        const email = `integration-buyer-${uniqueSuffix}@ram.local`;

        const createdUser = await prisma.user.create({
            data: {
                username,
                email,
                password: 'integration-test-password',
                role: 'buyer',
                approved: true,
                blocked: false,
                banned: false
            }
        });

        createdUserId = createdUser.id;

        const response = await request(app).get('/test');

        expect(response.status).toBe(200);
        expect(Array.isArray(response.body)).toBe(true);
        expect(response.body).toEqual(
            expect.arrayContaining([
                expect.objectContaining({
                    id: createdUser.id,
                    username,
                    email,
                    role: 'buyer'
                })
            ])
        );
    });

    test('POST /api/login authenticates a real database user and stores a token', async () => {
        const username = `integration-hardware-buyer-${uniqueSuffix}`;
        const email = `integration-hardware-buyer-${uniqueSuffix}@ram.local`;
        const plainPassword = 'gpu-test-password';
        const hashedPassword = await bcrypt.hash(plainPassword, 10);

        const createdUser = await prisma.user.create({
            data: {
                username,
                email,
                password: hashedPassword,
                role: 'buyer',
                approved: true,
                blocked: false,
                banned: false
            }
        });

        createdUserId = createdUser.id;

        const response = await request(app)
            .post('/api/login')
            .send({
                username,
                password: plainPassword
            });

        expect(response.status).toBe(200);
        expect(response.body.user).toEqual({
            id: createdUser.id,
            username,
            role: 'buyer'
        });
        expect(typeof response.body.token).toBe('string');
        expect(response.body.token.length).toBeGreaterThan(0);

        const storedToken = await prisma.authToken.findUnique({
            where: { token: response.body.token }
        });

        expect(storedToken).toEqual(
            expect.objectContaining({
                userId: createdUser.id,
                token: response.body.token
            })
        );
    });

    test('POST /api/login rejects an invalid password for a real database user', async () => {
        const username = `integration-cpu-buyer-${uniqueSuffix}`;
        const email = `integration-cpu-buyer-${uniqueSuffix}@ram.local`;
        const hashedPassword = await bcrypt.hash('correct-password', 10);

        const createdUser = await prisma.user.create({
            data: {
                username,
                email,
                password: hashedPassword,
                role: 'buyer',
                approved: true,
                blocked: false,
                banned: false
            }
        });

        createdUserId = createdUser.id;

        const response = await request(app)
            .post('/api/login')
            .send({
                username,
                password: 'wrong-password'
            });

        expect(response.status).toBe(401);
        expect(response.body).toEqual({
            error: 'Username or password incorrect'
        });

        const storedTokens = await prisma.authToken.findMany({
            where: { userId: createdUser.id }
        });

        expect(storedTokens).toHaveLength(0);
    });

    test('POST /api/register creates a new user in the real database', async () => {
        const username = `integration-register-${uniqueSuffix}`;
        const email = `integration-register-${uniqueSuffix}@ram.local`;

        const response = await request(app)
            .post('/api/register')
            .send({
                username,
                email,
                password: 'register-password',
                role: 'buyer'
            });

        expect(response.status).toBe(200);
        expect(response.body.username).toBe(username);
        expect(response.body.email).toBe(email);
        expect(response.body.role).toBe('buyer');
        expect(response.body.approved).toBe(false);

        const createdUser = await prisma.user.findUnique({
            where: { username }
        });

        expect(createdUser).toEqual(
            expect.objectContaining({
                username,
                email,
                role: 'buyer',
                approved: false,
                blocked: false,
                banned: false
            })
        );

        createdUserId = createdUser.id;
        expect(createdUser.password).not.toBe('register-password');
    });
});
