const express = require('express');
const router = express.Router();
const db = require('../config/db');

// Mostrar lista
router.get('/', (req, res) => {
    db.query('SELECT * FROM users', (err, results) => {
        if (err) return res.send('Error al obtener usuarios');
        res.render('index', { users: results });
    });
});

// Agregar
router.post('/add', (req, res) => {
    const { nombre, email } = req.body;
    db.query('INSERT INTO users (nombre, email) VALUES (?, ?)', [nombre, email], (err) => {
        if (err) return res.send('Error al insertar');
        res.redirect('/');
    });
});

// Editar
router.get('/edit/:id', (req, res) => {
    db.query('SELECT * FROM users WHERE id = ?', [req.params.id], (err, results) => {
        if (err) return res.send('Error al cargar usuario');
        res.render('edit', { user: results[0] });
    });
});

// Actualizar
router.post('/update/:id', (req, res) => {
    const { nombre, email } = req.body;
    db.query('UPDATE users SET nombre = ?, email = ? WHERE id = ?', [nombre, email, req.params.id], (err) => {
        if (err) return res.send('Error al actualizar');
        res.redirect('/');
    });
});

// Eliminar
router.get('/delete/:id', (req, res) => {
    db.query('DELETE FROM users WHERE id = ?', [req.params.id], (err) => {
        if (err) return res.send('Error al eliminar');
        res.redirect('/');
    });
});

module.exports = router;
