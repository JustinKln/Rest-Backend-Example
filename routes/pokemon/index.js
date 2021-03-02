const express = require('express');
const router = express.Router();
const app = express();

router.get('/:pokeid', (req, res) => {
    var pokeid = req.params.pokeid;
    var poke = pokemon.findOne({'pokeid': pokeid});

    if (poke) {
        res.send(poke);
    } else {
        res.status(404).send(`Pokemon with Pokedex-ID ${pokeid} not found!`);
    }
});