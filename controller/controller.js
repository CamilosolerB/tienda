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

         else if(resbb!=0 && bcryptjs.compareSync(cla,password)){
            console.log(cla)
             console.log(resbb[0].password)
            req.session.login = true;
            if(req.session.login){
            res.render('menu',{datos:resbb})
            console.log(resbb)
            }
            
        }
        else{
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
                footer: '<a href="">Why do I have this issue?</a>'
              })
            console.log('contraseña incorrecta')
            res.redirect('/')
        }
    })
}
controller.usuario=(req,res,next)=>{
    if(req.session.login){
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
    else{
        res.redirect('/')
    }
    
}
controller.clientes=(req,res,next)=>{
    if(req.session.login){
    mysqlconexion.query('SELECT * FROM clientes',(err,result)=>{
        if(err){
            throw err
        }
        else{
            res.render('clientes',{datos:result})
        }
    })
    }
    else{
        res.redirect('/')
    }

}
controller.proveedores=(req,res,next)=>{
    if(req.session.login){
        mysqlconexion.query('SELECT * FROM clientes',(err,result)=>{
            if(err){
                throw err
            }
            else{
                res.render('proveedores',{datos:result})
            }
        })
    }
    else{
        res.redirect('/')
    }

    
}
controller.productos=(req,res,next)=>{
    if(req.session.login){
        mysqlconexion.query('SELECT * FROM clientes',(err,result)=>{
            if(err){
                throw err
            }
            else{
                res.render('productos',{datos:result})
            }
        })
    }
    else{
        res.redirect('/')
    }
}
controller.reportes=(req,res,next)=>{
    if(req.session.login){
        mysqlconexion.query('SELECT * FROM clientes',(err,result)=>{
            if(err){
                throw err
            }
            else{
                res.render('reportes',{datos:result})
            }
        })
    }
    else{
        res.redirect('/')
    }
    
}
controller.ventas=(req,res,next)=>{
    if(req.session.login){
        mysqlconexion.query('SELECT * FROM clientes',(err,result)=>{
            if(err){
                throw err
            }
            else{
                res.render('ventas',{datos:result})
            }
        })
    }
    else{
        res.redirect('/')
    }
    
}
controller.insusu=(req,res)=>{
    if(req.session.login){
        res.render('insusu')
    }
    else{
        res.redirect('/')
    }
    
}
controller.inscli=(req,res)=>{
    if(req.session.login){
        res.render('inscli')
    }
    else{
        res.redirect('/')
    }
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
    if(req.session.login){
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
    console.log("entrada al metodo")

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
            res.redirect('/')
        })
    }
module.exports=controller;