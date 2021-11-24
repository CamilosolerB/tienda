function insertar(){
    let botones = document.getElementById('link')
    let consu = document.getElementById('cons')
    let grid = document.getElementById('grid')
    grid.style.display = 'none'
    consu.style.display = 'none'
    botones.style.display = 'none';
    consu.style.transition = 'all 2s';
    botones.style.transition = 'all 2 s'
}
function consultar(){
    let botones = document.getElementById('link')
    let consu = document.getElementById('cons')
    let grid = document.getElementById('grid')
    grid.style.display = 'none' 
    consu.style.display = 'none';
    botones.style.display = 'none';
    botones.style.transition = 'all 2 s'
    consu.style.transition = 'all 2s';
}

$(document).ready(function() {
    $('#tablausu').DataTable();
} );

const modal = document.querySelector(".usuario");
const clien = document.querySelector(".cliente");
const vent = document.querySelector(".ventas");

//funciones

function abrirmodalusu(){
    modal.classList.add("revelar")
}
function cerrarmodalusu(){
    modal.classList.remove("revelar")
}
function abrircliente(){
    clien.classList.add("revelar")
}
function cerrarcliente(){
    clien.classList.remove("revelar")
}
function abrirventas(){
    vent.classList.add("revelar")
}
function cerrarventas(){
    vent.classList.remove("revelar")
}