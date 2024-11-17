
const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

const peliculasPath = path.join(__dirname, '../data/peliculas.json');

router.get('/', (req, res) => {
    const peliculas = JSON.parse(fs.readFileSync(peliculasPath));
    res.render('listado', { peliculas });
});

module.exports = router;
