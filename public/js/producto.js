$(document).ready(function(){
    $('#producto1').change(function() {
        
        var get = document.getElementById('producto1').value;
        var nom = document.getElementById('nombre1')
        var val = document.getElementById('valor1');
        var iva = document.getElementById('iva1');
        $.ajax({

            type:"GET",
            url: "/productosven/"+get,
            contentType: "application/json",
            success: function (cedula){
                console.log(cedula)
                console.log(cedula[0].nombre_producto)
                nom.innerHTML= cedula[0].nombre_producto;
                val.innerHTML= cedula[0].precio_venta;
                iva.innerHTML= cedula[0].ivacompra;
            },
            timeout: 1000
            })
            var get1 = document.getElementById('valor1').innerHTML;
            var get2 = document.getElementById('valor2').innerHTML;
            var get3 = document.getElementById('valor3').innerHTML;
            valorventas(get1,get2,get3);
            ivas();
    })
    $('#producto2').change(function() {
        var get = document.getElementById('producto2').value;
        var nom = document.getElementById('nombre2')
        var val = document.getElementById('valor2');
        var iva = document.getElementById('iva2');
        $.ajax({

            type:"GET",
            url: "/productosven/"+get,
            contentType: "application/json",
            success: function (cedula){
                console.log(cedula)
                console.log(cedula[0].nombre_producto)
                nom.innerHTML= cedula[0].nombre_producto;
                val.innerHTML= cedula[0].precio_venta;
                iva.innerHTML= cedula[0].ivacompra;
            },
            timeout: 1000
            })
            var get1 = document.getElementById('valor1').innerHTML;
            var get2 = document.getElementById('valor2').innerHTML;
            var get3 = document.getElementById('valor3').innerHTML;
        valorventas(get1,get2,get3);
        ivas();
    })
    $('#producto3').change(function() {
        var get = document.getElementById('producto3').value;
        var nom = document.getElementById('nombre3')
        var val = document.getElementById('valor3');
        var iva = document.getElementById('iva3');
        $.ajax({

            type:"GET",
            url: "/productosven/"+get,
            contentType: "application/json",
            success: function (cedula){
                console.log(cedula)
                console.log(cedula[0].nombre_producto)
                nom.innerHTML= cedula[0].nombre_producto;
                val.innerHTML= cedula[0].precio_venta;
                iva.innerHTML= cedula[0].ivacompra;
            },
            timeout: 1000
            })
            var get1 = document.getElementById('valor1').innerHTML;
            var get2 = document.getElementById('valor2').innerHTML;
            var get3 = document.getElementById('valor3').innerHTML;
            valorventas(get1,get2,get3);
            ivas();
    })
    function valorventas(v1,v2,v3){
        v1 = parseInt(v1);
        v2 = parseInt(v2);
        v3 = parseInt(v3);
        let resul=v1+v2+v3;
        document.getElementById("tventa").value = resul;
    }
    //comenta
    $("#cantidad1").change(function() {
        var get1 = parseInt(document.getElementById('valor1').innerHTML)
        var get2 = document.getElementById('valor2').innerHTML;
        var get3 = document.getElementById('valor3').innerHTML;
        var can1 = parseInt(document.getElementById('cantidad1').value);
        var get = document.getElementById('valor1');

            var res = get1*can1;
            get.innerHTML = String(res);
        valorventas(res,get2,get3);
        ivas();
    })
    $("#cantidad2").change(function() {
        var get2 = document.getElementById('valor1').innerHTML;
        var get3 = document.getElementById('valor3').innerHTML;
        var get1 = document.getElementById('valor2').innerHTML;
        
        var can1 = document.getElementById('cantidad2').value;
        var get = document.getElementById('valor2');

            var res = get1*can1;
            get.innerHTML = res;
            valorventas(get2,res,get3);
            ivas();
    })
    $("#cantidad3").change(function() {
        var get2 = document.getElementById('valor2').innerHTML;
        var get3 = document.getElementById('valor1').innerHTML;
        var get1 = document.getElementById('valor3').innerHTML;
        var can1 = document.getElementById('cantidad3').value;
        var get = document.getElementById('valor3');
            var res = get1*can1;
            get.innerHTML = res;
        valorventas(get3,get2,res);
        ivas();
    })
    function ivas(){
        var iva1= parseInt(document.getElementById("iva1").innerHTML);
        var iva2= parseInt(document.getElementById("iva2").innerHTML);
        var iva3= parseInt(document.getElementById("iva3").innerHTML);
        var resul= (iva1+iva2+iva3)/3;
        document.getElementById("iva").value = resul;
    }

});