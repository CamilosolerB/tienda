const mysqlconexion = require('../conexion/conection')
const bcryptjs = require('bcryptjs')
const controller={};
const Swal = require('sweetalert2')
//creacion de los metodos
controller.index=(req,res,next)=>{
    res.render('index')
}
controller.login=async(req,res,next)=>{

    function mensage(){

        
        Swal.fire(
            'Usuario incorrecto',
            'Usuario o contraseña no encontrado',
            'error'
          )
    }
    const usu = req.body.usuario;
    const cla = req.body.clave;
    mysqlconexion.query('SELECT * FROM usuarios WHERE usuario=?',[usu],async(err,resbb)=>{

        let password = resbb[0].password;
        console.log(cla)
        console.log(password)

        if(err){
            next(new Error(err))
        }

         else if(resbb!=0 && bcryptjs.compare(cla,password)){
            console.log(cla)
             console.log(resbb[0].password)
            req.session.login = true;
            if(req.session.login){
            res.render('menu',{datos:resbb})
            console.log(resbb)
            }
            
        }
        else{
            mensage();
            res.redirect('/')
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
    controller.actualizarusu=async(req,res)=>{
        const ced = req.body.doc;
        const ema = req.body.correo;
        const user = req.body.nombre;
        const pass = req.body.clave;
        const usu = req.body.usuario;
        const password = await bcryptjs.hash(pass,8);
        mysqlconexion.query('UPDATE usuarios SET email_usuario="'+ema+'" , nombre_usuario="'+user+'", password="'+password+'", usuario="'+usu+'" WHERE cedula_usuarios="'+ced+'"',async(err)=>{
            if(err){
                throw err
            }
            else{
                console.log("Datos actualizados")
                res.redirect('/usuario')
            }
        })
    }

    controller.borrarusu=(req,res)=>{
        const id = req.params.cedula;
        mysqlconexion.query('DELETE FROM usuarios WHERE cedula_usuarios=?',[id],(err)=>{

                console.log("eliminado");
                res.redirect('/usuario')
        })
    }
    controller.cerrar=(req,res,next)=>{
        req.session.destroy(()=>{
            res.redirect('/logueo')
        })
    }
module.exports=controller;