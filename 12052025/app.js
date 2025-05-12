const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');

const app = express();

//manejo de peticiones por medio de url usando post REQ y RES
app.use(bodyParser.urlencoded({ extended: false }));

//configuracion de plantillas
app.set('view engine', 'ejs');

//conexion a la base de datos
const db = mysql.createConnection({
    host: 'localhost',//server
    user: 'root',//usuario
    password: '12345',//contraseña
    database: 'node_crud',//nombre de la base de datos
    port: 3306//puerto
});

//validacion de conexion a la base de datos
db.connect((err) => {
    if (err) {
        console.log('Error al conectar a la base de datos', err);
    } else {
        console.log('Conectado a la base de datos');
    }
});
