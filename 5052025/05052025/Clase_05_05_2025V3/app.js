const express = require('express');
const path = require('path');
const app = express();

// Importar las rutas
const indexRouter = require('./routes/index');
const usuariosRouter = require('./routes/usuarios');
const productosRouter = require('./routes/productos');

// Configurar el puerto
const port = 5056;

// Middleware para parsear JSON
app.use(express.json());

// Usar las rutas
app.use('/', indexRouter);
app.use('/usuarios', usuariosRouter);
app.use('/productos', productosRouter);

// Servir archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});