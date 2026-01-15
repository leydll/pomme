const { convertCurrency } = require('../conversion');

describe('Unit Testing - Currency Logic', () => {
    test('should convert 100 EUR to 110 USD', () => {
    const result = convertCurrency(100, 'EUR', 'USD');
    // toBeCloseTo = très proche de 110
    expect(result).toBeCloseTo(110, 2); 
});

    test('should return null for unknown currency', () => {
        const result = convertCurrency(100, 'EUR', 'GBP');
        expect(result).toBeNull();
    });
});