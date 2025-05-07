const express = require('express');
const router = express.Router();

// Obtener todos los usuarios
router.get('/', (req, res) => {
    res.send('Lista de usuarios');
});

// Obtener un usuario específico
router.get('/:id', (req, res) => {
    res.send(`Detalles del usuario ${req.params.id}`);
});

// Crear un nuevo usuario
router.post('/', (req, res) => {
    res.send('Usuario creado');
});

// Actualizar un usuario
router.put('/:id', (req, res) => {
    res.send(`Usuario ${req.params.id} actualizado`);
});

// Eliminar un usuario
router.delete('/:id', (req, res) => {
    res.send(`Usuario ${req.params.id} eliminado`);
});

module.exports = router;