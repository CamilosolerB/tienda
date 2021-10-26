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
module.exports=controller;