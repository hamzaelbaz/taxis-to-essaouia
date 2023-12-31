const express = require('express');
const fetch = require('node-fetch');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('./public'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.post('/form', async (req, res) => {
    const { name, start, destinations, numbers, emails } = req.body;
    console.log(name, start, destinations, numbers, emails);

    try {
        const response = await fetch('/.netlify/functions/sendEmail', {
            method: 'POST',
            body: JSON.stringify({ name, start, destinations, numbers, emails }),
            headers: { 'Content-Type': 'application/json' },
        });

        const result = await response.json();
        res.status(response.status).json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(port, () => {
    console.log(`Server is starting on ${port}`);
});