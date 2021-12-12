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
    })
    function valorventas(event){
        var get1 = document.getElementById('valor1').innerHTML;
        var get2 = document.getElementById('valor2').innerHTML;
        var get3 = document.getElementById('valor3').innerHTML;
        v1 = parseInt(get1);
        v2 = parseInt(get2);
        v3 = parseInt(get3);
        let resul=v1+v2+v3;
        document.getElementById("tventa").value = resul;
        totival();
    }
    //comenta
    $("#cantidad1").change(function() {
        var get1 = parseInt(document.getElementById('valor1').innerHTML)
        var can1 = parseInt(document.getElementById('cantidad1').value);
        var get = document.getElementById('valor1');

            var res = get1*can1;
            get.innerHTML = String(res);

    })
    $("#cantidad2").change(function() {
        var get2 = document.getElementById('valor1').innerHTML;
        var get3 = document.getElementById('valor3').innerHTML;
        var get1 = document.getElementById('valor2').innerHTML;
        
        var can1 = document.getElementById('cantidad2').value;
        var get = document.getElementById('valor2');

            var res = get1*can1;
            get.innerHTML = res;
    })
    $("#cantidad3").change(function() {
        var get1 = document.getElementById('valor3').innerHTML;
        var can1 = document.getElementById('cantidad3').value;
        var get = document.getElementById('valor3');
            var res = get1*can1;
            get.innerHTML = res;
    })
    function ivas(event){
        var iva1= parseInt(document.getElementById("iva1").innerHTML);
        var iva2= parseInt(document.getElementById("iva2").innerHTML);
        var iva3= parseInt(document.getElementById("iva3").innerHTML);
        var resul= (iva1+iva2+iva3)/3;
        document.getElementById("iva").value = resul;
        totival();
    }

    function totival(){
        var tventa = parseInt(document.getElementById("tventa").value);
        var iva = parseInt(document.getElementById("iva").value)/100;
        var response = (tventa*iva)+tventa;
        document.getElementById("ivato").value = response;
    }

    $("#subircompra").click(function (){
        let cedula = document.getElementById("cedula").value;
        let indi = document.getElementById("indicativo").value;
        let pro1 = document.getElementById("producto1").value;
        let pro2 = document.getElementById("producto2").value;
        let pro3 = document.getElementById("producto3").value;
        let nom1 = document.getElementById("nombre1").innerHTML;
        let nom2 = document.getElementById("nombre2").innerHTML;
        let nom3 = document.getElementById("nombre3").innerHTML;
        let can1 = document.getElementById("cantidad1").value;
        let can2 = document.getElementById("cantidad2").value;
        let can3 = document.getElementById("cantidad3").value;
        let iva1 = document.getElementById("iva1").innerHTML;
        let iva2 = document.getElementById("iva2").innerHTML;
        let iva3 = document.getElementById("iva3").innerHTML;
        let valor1 = document.getElementById("valor1").innerHTML;
        let valor2 = document.getElementById("valor2").innerHTML;
        let valor3 = document.getElementById("valor3").innerHTML;
        let tventa = document.getElementById("tventa").value;
        let ivat = document.getElementById("iva").value;
        let ivato = document.getElementById("ivato").value;

        $.ajax({
            type: "POST",
            url: "/insertarventa/"+indi,
            data:{
                cc:cedula,p1:pro1,p2:pro2,p3:pro3,n1:nom1,n2:nom2,n3:nom3,
                ca1:can1,ca2:can2,ca3:can3,iv1:iva1,iv2:iva2,iv3:iva3,
                v1:valor1,v2:valor2,v3:valor3,tve:tventa,iva:ivat,tol:ivato
            },
            success: function (){
                alert("Venta realizada con exito")
                //a
            },
            error: function(){
                const Toast = Swal.mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                      toast.addEventListener('mouseenter', Swal.stopTimer)
                      toast.addEventListener('mouseleave', Swal.resumeTimer)
                    }
                  })
                  
                  Toast.fire({
                    icon: 'error',
                    title: 'Ocurrio un error',
                    text: 'Revise que el codigo este bien escrito'
                  })
            },
            timeout:10000
        })
    });
    
    var totivalvar = document.getElementById("iva");

    totivalvar.onfocus = ivas;

    var valventa = document.getElementById("tventa");

    valventa.onfocus = valorventas;
});