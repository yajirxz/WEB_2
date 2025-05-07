//importar express
const express = require('express');
const rutas = require('./routes/index.js');


//intanciar express
const app = express();

//configuracion del server de uso de rutas
app.use("/",rutas);

//Puerto
const port = 3000;

app.listen(port, () => {
    console.log(`https://localhost:${port}`);
});


