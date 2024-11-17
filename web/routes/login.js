const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

const usuariosPath = path.join(__dirname, '../data/usuarios.json');

router.get('/', (req, res) => {
    res.render('login', { error: null });
});

router.post('/', (req, res) => {
    const { username, password } = req.body;
    const usuarios = JSON.parse(fs.readFileSync(usuariosPath));

    const usuario = usuarios.find(u => u.username === username && u.password === password);

    if (usuario) {
        req.session.usuario = usuario;
        res.redirect('/listado'); 
    } else {
        res.render('login', { error: 'Usuario o contraseña incorrectos' });
    }
});

module.exports = router;
