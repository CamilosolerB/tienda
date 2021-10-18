const conexion = require('../conexion/conection')
const cnn = conexion();
const bcryptjs = require('bcryptjs')
const controller={};
//creacion de los metodos
controller.index=(req,res,next)=>{
    res.render('index')
}
controller.login=(req,res,next)=>{
    const usu = req.body.usuario;
    const cla = req.body.clave;
    cnn.query('SELECT * FROM usuarios WHERE usario=? AND password=?',[usu,cla],(err,resbb)=>{
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