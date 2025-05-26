const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');


const app = express();
const port = 3005;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));
app.set('view engine', 'ejs');

// Rutas
app.use('/', userRoutes);

// Servidor
app.listen(port, () => {
    console.log(`Servidor iniciado: http://127.0.0.1:${port}`);
});





