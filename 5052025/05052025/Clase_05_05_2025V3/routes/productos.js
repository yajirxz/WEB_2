const express = require('express');
const router = express.Router();

// Obtener todos los productos
router.get('/', (req, res) => {
    res.send('Lista de productos');
});

// Obtener un producto específico
router.get('/:id', (req, res) => {
    res.send(`Detalles del producto ${req.params.id}`);
});

// Crear un nuevo producto
router.post('/', (req, res) => {
    res.send('Producto creado');
});

// Actualizar un producto
router.put('/:id', (req, res) => {
    res.send(`Producto ${req.params.id} actualizado`);
});

// Eliminar un producto
router.delete('/:id', (req, res) => {
    res.send(`Producto ${req.params.id} eliminado`);
});

module.exports = router;