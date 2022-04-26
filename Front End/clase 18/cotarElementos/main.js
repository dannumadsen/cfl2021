"use strict";
let contador = 0;
function clickear(){
    contador ++;
    console.log('hiciste '+ contador+ ' clicks');
    mostrarClicks();
}

function mostrarClicks(){
    let nodoCLick = document.getElementById('txtClick');
    nodoCLick.innerHTML = 'hiciste ' + contador + ' clicks';
}

