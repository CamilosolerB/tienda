$(document).ready(function(){
    $('#producto1').change(function() {
        
        var get = document.getElementById('producto1').value;
        var nom = document.getElementById('nombre1')
        var val = document.getElementById('valor1');
        $.ajax({

            type:"GET",
            url: "/productosven/"+get,
            contentType: "application/json",
            success: function (cedula){
                console.log(cedula)
                console.log(cedula[0].nombre_producto)
                nom.innerHTML= cedula[0].nombre_producto;
                val.innerHTML= cedula[0].precio_venta;
            },
            timeout: 1000
            })
    })
    $('#producto2').change(function() {
        
        var get = document.getElementById('producto2').value;
        var nom = document.getElementById('nombre2')
        var val = document.getElementById('valor2');
        $.ajax({

            type:"GET",
            url: "/productosven/"+get,
            contentType: "application/json",
            success: function (cedula){
                console.log(cedula)
                console.log(cedula[0].nombre_producto)
                nom.innerHTML= cedula[0].nombre_producto;
                val.innerHTML= cedula[0].precio_venta;
            },
            timeout: 1000
            })
    })
    $('#producto3').change(function() {
        
        var get = document.getElementById('producto3').value;
        var nom = document.getElementById('nombre3')
        var val = document.getElementById('valor3');
        $.ajax({

            type:"GET",
            url: "/productosven/"+get,
            contentType: "application/json",
            success: function (cedula){
                console.log(cedula)
                console.log(cedula[0].nombre_producto)
                nom.innerHTML= cedula[0].nombre_producto;
                val.innerHTML= cedula[0].precio_venta;
            },
            timeout: 1000
            })
    })
});