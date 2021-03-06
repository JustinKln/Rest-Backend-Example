const express = require('express');
const pokemonRoute = require('./routes/pokemon')

const port = '3000';
const app = express();

app.use(express.json());
app.use('/pokemon', pokemonRoute);

app.listen(port, () => {
    console.log(`Node listening on port ${port}`);
});