const express = require('express');
const res = require('express/lib/response');
const router = express.Router();
//path sirve para redireccionar
const path = require('path');

//definicion de rutas y manejadores
router.get("/",(res,res=>{
    res.sendFile(path.join(__dirname+"./index.html"));
}));

module.exports=router;