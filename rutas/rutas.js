const express = require('express');
const controlador = require('../controller/controller')
const rutas = express.Router();

//indicacion de links

//tipo get
rutas.get('/',controlador.index);
rutas.get('/usuario',controlador.usuario);
rutas.get('/cliente',controlador.clientes);
rutas.get('/productos',controlador.productos);
rutas.get('/proveedores',controlador.proveedores);
rutas.get('/reportes',controlador.reportes);
rutas.get('/ventas',controlador.ventas);
rutas.get('/agregarusuario',controlador.insusu)
//tipo post
rutas.post('/login',controlador.login)

module.exports=rutas;