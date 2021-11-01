const mysqlconexion = require('../conexion/conection')
const bcryptjs = require('bcryptjs')
const controller={};
//creacion de los metodos
controller.index=(req,res,next)=>{
    res.render('index')
}
controller.login=async(req,res,next)=>{
    console.log("llego")
    const usu = req.body.usuario;
    console.log(usu)
    const cla = req.body.clave;
    mysqlconexion.query('SELECT * FROM usuarios WHERE usuario=? AND password=1234',[usu,cla],async(err,resbb)=>{
        if(err){
            next(new Error(err))
        }
        else{
            res.render('menu',{datos:resbb})
            console.log(resbb)
        }
    })
}
controller.usuario=(req,res,next)=>{
    mysqlconexion.query("select * from usuarios",(err,result)=>{
        if(err){
            throw err
        }
        else{
            res.render('usuarios',{datos:result})
            console.log(result)
        }
    })
}
controller.clientes=(req,res,next)=>{
    res.render('clientes')
}
controller.proveedores=(req,res,next)=>{
    res.render('proveedores')
}
controller.productos=(req,res,next)=>{
    res.render('productos')
}
controller.reportes=(req,res,next)=>{
    res.render('reportes')
}
controller.ventas=(req,res,next)=>{
    res.render('ventas');
}
controller.insusu=(req,res)=>{
    res.render('insusu')
}
module.exports=controller;