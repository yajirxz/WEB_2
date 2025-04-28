// importar el modulo de http que viene por defecto en node
const serverCreadoHTTP = require('http');

//definimos el puerto en el que va a tener salida nuestro servidor
const puertoSalida = 2004;

//creamos el servidor con el metodo createServer
const servidorCreado = serverCreadoHTTP.createServer((req, res)=>{
    //definimos el encabezado de la respuesta
    //el primer parametro es el codigo de estado, el segundo es un objeto con los encabezados
    res.writeHead(200, {'Content-Type': 'text/plain'});
    //escribimos la respuesta
    res.end('Hola Mundo desde Node.js con el modulo http');
});

servidorCreado.listen(puertoSalida,()=>{
    console.log(`Servidor escuchando desde: http:/127.0.0.1: ${puertoSalida}`);
});

//tarea: codigo con captura de que esta funcionando el servidor