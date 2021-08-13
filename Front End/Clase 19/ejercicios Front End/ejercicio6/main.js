//Hacer una pagina que al presionar un botón cree un div 
//con posición, tamaño y color aleatorio.
let div = document.querySelector('.div-inicial');

let botonMover = document.querySelector('#btn-mover');
botonMover.addEventListener('click', repetirCadaSegundo);
let botonDetener = document.getElementById('btn-detener')
botonDetener.addEventListener('click',detener)

function mover(){

    let red = Math.floor(Math.random()*256);
    let green = Math.floor(Math.random()*256);
    let blue = Math.floor(Math.random()*256);

    let width = Math.floor(Math.random()*650);
    let height = Math.floor(Math.random()*650);
    
    let left = Math.floor(Math.random()*1100);
    let top = Math.floor(Math.random()*650);
    let radius = Math.floor(Math.random()*300);


    div.style.backgroundColor = `rgb(${red},${green},${blue})`;
    div.style.width = `${width}px`;
    div.style.height = `${height}px`;
    div.style.marginLeft = `${left}px`;
    div.style.marginTop = `${top}px`;
    div.style.borderRadius = `${radius}px`;
}

function repetirCadaSegundo() {
    identificadorIntervaloDeTiempo = setInterval(mover, 1000);
  }

  function detener(){
    clearTimeout(identificadorIntervaloDeTiempo)
  }
  