const request = require('supertest');
const app = require('../index');

describe('public routes', () => {
    test('GET / returns the landing page', async () => {
        const response = await request(app).get('/');

        expect(response.status).toBe(200);
        expect(response.text).toContain('<!DOCTYPE html>');
    });

    test('GET /login returns the login page', async () => {
        const response = await request(app).get('/login');

        expect(response.status).toBe(200);
        expect(response.text).toContain('<!DOCTYPE html>');
    });

    test('GET /register returns the registration page', async () => {
        const response = await request(app).get('/register');

        expect(response.status).toBe(200);
        expect(response.text).toContain('<!DOCTYPE html>');
    });

    test('GET /denied returns 403', async () => {
        const response = await request(app).get('/denied');

        expect(response.status).toBe(403);
        expect(response.text).toContain('Access denied');
    });
});
