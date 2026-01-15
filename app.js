const express = require('express');
const { convertCurrency } = require('./conversion');
const app = express();

app.get('/', (req, res) => res.send('hello from leiloooo !'));
app.get('/health', (req, res) => res.status(200).json({ status: 'OK' }));

app.get('/convert', (req, res) => {
    const { from, to, amount } = req.query;
    const result = convertCurrency(parseFloat(amount), from, to);

    if (result === null) {
        return res.status(400).json({ error: 'paramètres invalides' });
    }

    res.json({ from, to, amount: parseFloat(amount), result });
});

if (require.main === module) {
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => console.log(`api sur le port ${PORT}`));
}

module.exports = app;