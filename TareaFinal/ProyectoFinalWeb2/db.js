const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '12345',
    database: 'node_crud',
    port: 3306
});

db.connect((err) => {
    if (err) {
        console.error('Error de conexión a la base de datos', err);
    } else {
        console.log('Conectado a la base de datos');
    }
});

module.exports = db;
