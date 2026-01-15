const request = require('supertest');
const app = require('../app');

describe('E2E testing - api endpoints', () => {
    test('GET /health should return 200 OK', async () => {
        const res = await request(app).get('/health');
        expect(res.statusCode).toEqual(200);
        expect(res.body.status).toBe('OK');
    });

    test('GET /convert should return correct JSON format', async () => {
    const res = await request(app).get('/convert?from=EUR&to=USD&amount=100');
    expect(res.statusCode).toEqual(200);
    expect(res.body.result).toBeCloseTo(110, 2);
    });
});