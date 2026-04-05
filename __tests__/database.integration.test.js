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
});
