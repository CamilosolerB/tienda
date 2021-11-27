const express = require('express');
const csvtojson = require('csvtojson')
const csvfilepath = "uploads/texto.csv"
const mysqlconexion = require('../conexion/conection')
const controlador = require('../controller/controller')
const fs = require('fs');
const multer = require('multer')
const mimeTypes =require('mime-types')
const csv = require('csv-parser')
const result = []
const storage = multer.diskStorage({
    destination: 'uploads/',
    filename: function(req,file,cb){
        cb(null, "texto.csv")
    }
})

const upload = multer({storage})
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
rutas.post('/filtro/:cedula',controlador.filtro)
//REST productos
rutas.get('/productos',controlador.productos);
rutas.post('/agregarproducto',upload.single('csv'), function (req,res){

    csvtojson()
    .fromFile(csvfilepath)
    .then((json)=>{
        console.log(json)
    })
    //fs.writeFileSync("salida.json", JSON.stringify(json), 'utf-8',
    //function(err){res.send(err)}
    //)
    res.redirect('/productos')
})
rutas.post('/creaproducto',controlador.insertarprod);
//REST ventas
rutas.get('/ventas',controlador.ventas);
//REST de reportes
rutas.get('/reportes',controlador.reportes);


module.exports=rutas;