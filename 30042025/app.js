//importar express
const express=require('express');

//Generar instancia
const app=express();

//Definición de puerto
const port = 2001;

app.get('/',(req,res)=>{
    res.send('Hola mundo desde el puerto 2001');
})

app.listen(port);