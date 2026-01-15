const RATES = {
    'EUR_USD': 1.1,
    'USD_EUR': 0.91
};

function convertCurrency(amount, from, to) {
    if (isNaN(amount) || amount < 0) return null;
    if (from === to) return amount;
    
    const key = `${from}_${to}`;
    const rate = RATES[key];
    
    if (!rate) return null;

    const result = amount * rate;
    return Math.round(result * 100) / 100; 
}
module.exports = { convertCurrency };