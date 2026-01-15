const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => res.send('hello from leiloooo !'));
app.get('/health', (req, res) => res.status(200).send('oki'));
app.get('/api/data', (req, res) => res.json({ status: 'succès', data: 42 }));

if (require.main === module) {
    app.listen(PORT, () => console.log(`app sur le port ${PORT}`));
}
module.exports = app;