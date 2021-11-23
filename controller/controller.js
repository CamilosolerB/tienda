const mysqlconexion = require('../conexion/conection')
const bcryptjs = require('bcryptjs')
const controller={};
const Swal = require('sweetalert2')
const csv = require('csv-parser')
const fs = require('fs');
const multer = require('multer')
const result = [];

//creacion de los metodos

//Pagina principal del proyecto
controller.index=(req,res,next)=>{
    res.render('index')
}

//consulta del login y validacion de encriptado del bcrypjs
controller.login=async(req,res,next)=>{

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
            console.log('contraseña incorrecta')
            res.redirect('/')
        }
    })
}

//consulta de los usuarios
controller.usuario=(req,res)=>{
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
//Consulta de los clientes
controller.clientes=(req,res)=>{
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
//consulta de los proveedores
controller.proveedores=(req,res,next)=>{
    if(req.session.login){
        mysqlconexion.query('SELECT * FROM proveedores',(err,result)=>{
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
//consulta de los productos
controller.productos=(req,res,next)=>{
    if(req.session.login){
        mysqlconexion.query('SELECT * FROM productos',(err,result)=>{
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
//consulta de los reportes
controller.reportes=(req,res,next)=>{
    if(req.session.login){
        mysqlconexion.query('SELECT * FROM detalle_venta',(err,result)=>{
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
//consulta de los clientes
controller.ventas=(req,res,next)=>{
    if(req.session.login){
        mysqlconexion.query('SELECT * FROM ventas',(err,result)=>{
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


//vista para las insersiones
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
controller.inspro=(req,res)=>{
    if(req.session.login){
        res.render('inspro')
    }
    else{
        res.redirect('/')
    }
}

//post para las insersiones
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
controller.insertarclie=async(req,res)=>{
    const ced = req.body.cedula;
    const cor = req.body.direct;
    const nam = req.body.email;
    const cla = req.body.nombre;
    const usu = req.body.telefono;

    mysqlconexion.query('Insert into clientes set ?',{cedula_clientes:ced,direccion_cliente:cor,email_cliente:nam,nombre_cliente:cla,telefono_cliente:usu},(err)=>{
        if(err){
            throw err
        }
        else{
            res.redirect('/cliente')
        }
    })
}

controller.insertarpro=async(req,res)=>{
    const ced = req.body.nit;
    const cor = req.body.ciudad;
    const nam = req.body.direccion;
    const cla = req.body.nombre;
    const usu = req.body.telefono;

    mysqlconexion.query('Insert into proveedores set ?',{nitproveedor:ced,ciudad_proveedor:cor,direccion_proveedor:nam,nombre_proveedor:cla,telefono_proveedor:usu},(err)=>{
        if(err){
            throw err
        }
        else{
            res.redirect('/proveedores')
        }
    })
}

controller.insproduct=async(req,res,next)=>{
    upload.single('myFile')
    const file = req.body.csv;
    console.log(file)
    fs.createReadStream()
    .pipe(csv({}))
    .on('data', (data) => result.push(data))
    .on('end', () =>{
        console.log("resultado 1 "+result[0])
        console.log("resultado 2 "+result[1])
    })
    res.redirect('/productos')
}
//vistas para actualizacion de datos
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
controller.actclient=async(req,res,next)=>{
    if(req.session.login){
        const ced = req.params.cedula;
        console.log(ced)
        mysqlconexion.query('SELECT * FROM clientes WHERE cedula_clientes="'+ced+'"',async(err,result)=>{
            console.log(result)
            if(err){
                next(new Error(err))
            }
            else{
                res.render('actcli',{datos:result})
            }
        })
    }
    console.log("entrada al metodo")

}

controller.actprovee=async(req,res,next)=>{
    if(req.session.login){
        const ced = req.params.nit;
        console.log(ced)
        mysqlconexion.query('SELECT * FROM proveedores WHERE nitproveedor="'+ced+'"',async(err,result)=>{
            console.log(result)
            if(err){
                next(new Error(err))
            }
            else{
                res.render('actpro',{datos:result})
            }
        })
    }
    console.log("entrada al metodo")

}
//Actualizacion de las tablas
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
    
    controller.actucliente=(req,res)=>{
        const ced = req.body.cedula;
        const cor = req.body.direct;
        const nam = req.body.email;
        const cla = req.body.nombre;
        const usu = req.body.telefono;
        mysqlconexion.query('UPDATE clientes SET ? WHERE cedula_clientes ="'+ced+'"',{direccion_cliente:cor,email_cliente:nam,nombre_cliente:cla,telefono_cliente:usu},(err)=>{
            if(err){
                throw err
            }
            else{
                res.redirect('cliente')
            }
        })
    }
    controller.actuproveedor=(req,res)=>{
        const ced = req.body.nit;
        const cor = req.body.ciudad;
        const nam = req.body.direccion;
        const cla = req.body.nombre;
        const usu = req.body.telefono;
        mysqlconexion.query('UPDATE proveedores SET ? WHERE nitproveedor ="'+ced+'"',{ciudad_proveedor:cor,direccion_proveedor:nam,nombre_proveedor:cla,telefono_proveedor:usu},(err)=>{
            if(err){
                throw err
            }
            else{
                res.redirect('/proveedores')
            }
        })
    }
//Borrado de las tablas//
    controller.borrarusu=(req,res)=>{
        const id = req.params.cedula;
        mysqlconexion.query('DELETE FROM usuarios WHERE cedula_usuarios=?',[id],(err)=>{

                console.log("eliminado");
                res.redirect('/usuario')
        })
    }

    controller.borrarcliente=(req,res)=>{
        const ced = req.params.cedula;
        mysqlconexion.query('DELETE FROM clientes WHERE cedula_clientes=?',[ced],(err)=>{
            res.redirect('/cliente')
        })
    }
    controller.borrarprov=(req,res)=>{
        const ced = req.params.nit;
        mysqlconexion.query('DELETE FROM proveedores WHERE nitproveedor=?',[ced],(err)=>{
            res.redirect('/proveedores')
        })
    }
//cierre en las sesiones
    controller.cerrar=(req,res,next)=>{
        req.session.destroy(()=>{
            res.redirect('/')
        })
    }
module.exports=controller;