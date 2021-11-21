const express = require('express');
const controlador = require('../controller/controller')
const rutas = express.Router();

//indicacion del rest

//REST de interacciones
rutas.get('/',controlador.index);
rutas.get('/cerrar',controlador.cerrar);
rutas.post('/login',controlador.login)
//REST usuarios
rutas.get('/usuario',controlador.usuario);
rutas.get('/agregarusuario',controlador.insusu);
rutas.get('/infousuario/:cedula',controlador.actusu);
rutas.get('/borrarusuario/:cedula',controlador.borrarusu);
rutas.post('/insertarusuario',controlador.insertarusu)
rutas.post('/actualizarusuario',controlador.actualizarusu);
//REST clientes
rutas.get('/cliente',controlador.clientes);
rutas.get('/infocliente/:cedula',controlador.actclient);
rutas.get('/borrarcliente/:cedula',controlador.borrarcliente);
rutas.get('/agregarcliente',controlador.inscli);
rutas.post('/actucliente',controlador.actucliente);
rutas.post('/agregarcliente',controlador.insertarclie);
//REST proveedores
rutas.get('/proveedores',controlador.proveedores);
rutas.get('/borrarproveedor/:nit',controlador.borrarprov);
rutas.get('/infoproveedor/:nit',controlador.actprovee);
rutas.get('/agregarproveedor',controlador.inspro);
rutas.post('/agregarprov',controlador.insertarpro);
rutas.post('/actualizarpro',controlador.actuproveedor);
//REST productos
rutas.get('/productos',controlador.productos);
//REST ventas
rutas.get('/ventas',controlador.ventas);
//REST de reportes
rutas.get('/reportes',controlador.reportes);


module.exports=rutas;