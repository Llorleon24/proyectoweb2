
const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

const peliculasPath = path.join(__dirname, '../data/peliculas.json');

router.get('/:id', (req, res) => {
    const peliculas = JSON.parse(fs.readFileSync(peliculasPath));
    const pelicula = peliculas.find(p => p.id === parseInt(req.params.id));

    if (pelicula) {
        res.render('detalle', { pelicula });
    } else {
        res.status(404).send('Película no encontrada');
    }
});

module.exports = router;
