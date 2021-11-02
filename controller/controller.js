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
controller.insertarusu=async(req,res)=>{
    const ced = req.body.doc;
    const cor = req.body.correo;
    const nam = req.body.nombre;
    const cla = req.body.clave;
    const usu = req.body.usuario;
    const clave = await bcryptjs.hash(cla,8);

    mysqlconexion.query('Insert into usuarios set?',{cedula_usuarios:ced,email_usuario:cor,nombre_usuario:nam,password:clave,usuario:usu},(err)=>{
        if(err){
            throw err
        }
        else{
            res.redirect('/usuario')
        }
    })
}
controller.actusu=async(req,res,next)=>{
    console.log("entrada al metodo")
    const ced = req.params.cedula;
    console.log(ced)
    mysqlconexion.query('SELECT * FROM usuarios WHERE cedula_usuarios="'+ced+'"',async(err,result)=>{
        console.log(result)
        if(err){
            next(new Error(err))
        }
        else{
            res.render('actusu',{datos:result})
            console.log(result)
        }
    })
}
module.exports=controller;