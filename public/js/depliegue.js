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