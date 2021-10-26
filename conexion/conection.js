const mysql = require('mysql');

    const mysqlconexion = mysql.createConnection({
        host:'127.0.0.1',
        user:'root',
        password:'Camiloesbueno.',
        database:'tienda'
    });

    mysqlconexion.connect(function(err){
        if(err){
            console.log("Error :"+err)
            return;
        }
        else{
            console.log("Conexion exitosa")
        }
    })

    module.exports=mysqlconexion;