const express = require('express');
const controlador = require('../controller/controller')
const rutas = express.Router();

//indicacion del rest

//tipo get
rutas.get('/',controlador.index);
rutas.get('/usuario',controlador.usuario);
rutas.get('/cliente',controlador.clientes);
rutas.get('/productos',controlador.productos);
rutas.get('/proveedores',controlador.proveedores);
rutas.get('/reportes',controlador.reportes);
rutas.get('/ventas',controlador.ventas);
rutas.get('/agregarusuario',controlador.insusu);
rutas.get('/infousuario/:cedula',controlador.actusu);
rutas.get('/infocliente/:cedula',controlador.actclient);
rutas.get('/borrarusuario/:cedula',controlador.borrarusu);
rutas.get('/borrarcliente/:cedula',controlador.borrarcliente);
rutas.get('/cerrar',controlador.cerrar);
rutas.get('/agregarcliente',controlador.inscli);
//tipo post
rutas.post('/login',controlador.login)
rutas.post('/insertarusuario',controlador.insertarusu)
rutas.post('/actualizarusuario',controlador.actualizarusu);
rutas.post('/actucliente',controlador.actucliente);
rutas.post('/agregarcliente',controlador.insertarclie);

module.exports=rutas;