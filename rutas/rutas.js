const express = require('express');
const controlador = require('../controller/controller')
const rutas = express.Router();

//indicacion de links

//tipo get
rutas.get('/',controlador.index);

//tipo post
rutas.post('/login',controlador.login)

module.exports=rutas;