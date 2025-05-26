const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');

const app = express();

//manejo de peticiones por medio de url usando post y por mediio de url
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

//iniciar el servidor
const port = 3305;
app.listen(port, () => {
    console.log(`http://127.0.0.1:${port}`);
});

//listar usuarios
app.get('/', (req, res) => {
    //consulta a la base de datos
    const consulta = 'SELECT * FROM users';
    //error y resultado
    db.query(consulta, (err, result) => {
        if (err) {
            console.log('No se encontro el usuario', err);
            res.send("Comunicate con el soporte");
        } else {
            res.render('index', {users: results});
        }
    });
});

//agregar usuario
app.post('/add', (req, res) => {
    const {name, email} = req.body;
    const insertarRegistroUsuario = 'INSERT INTO users (name, email) VALUES (?, ?)';
    db.query(insertarRegistroUsuario, [name, email], (err) => {
        if (err) {
            console.error('No se encontro el usuario', err);
            res.send("Comunicate con el soporte");
        } else {
            res.redirect('/');
        }
    });
});

//editar usuario
app.get('/edit/:id', (req, res) => {
    const {id} = req.params;
    const editarUsuario = 'SELECT * FROM users WHERE id = ?';
    db.query(editarUsuario, [id], (err, result) => {
        if (err) {
            console.error('No se encontro el usuario', err);
        } else {
            res.render('edit', {user: results[0]});
        }
    });

});

//Actualizar un usuario
app.post('/update/:id', (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;
  const consulta = 'UPDATE usuarios SET name = ?, email = ? WHERE id = ?';
  db.query(consulta, [name, email, id], (err, results) => {
    if (err) {
      console.error('Error al actualizar el usuario:', err);
      res.send('No se pudo actualizar el usuario');
      return;
    }else{
      res.redirect('/');
    }
  });
});

//Eliminar un usuario
app.get('/delete/:id', (req, res) => {
  const { id } = req.params;
  const consulta = 'DELETE FROM usuarios WHERE id = ?';
  db.query(consulta, [id], (err, results) => {
    if (err) {
      console.error('Error al eliminar el usuario:', err);
      res.send('No se pudo eliminar el usuario');
      return;
    }else{
      res.redirect('/');
    }
  });
});


