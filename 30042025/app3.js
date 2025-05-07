//importar express
const express=require('express');

//Generar instancia
const app=express();

//Definición de puerto
const port = 2004;

app.get('/',(req,res)=>{
    res.send('Hola mundo desde el puerto 2004');
})

app.listen(port);