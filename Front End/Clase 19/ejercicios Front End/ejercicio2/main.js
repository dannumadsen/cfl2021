//Genere una cadena con los números del 1 al 100 (usando ciclos), 
//y agreguelos mediante Javascript al cuerpo de la página al presionar un botón.
"use strict";

let btn = document.getElementById('button');
btn.addEventListener('click', GenerarCadena)


function GenerarCadena(){
    let contador;
    let div = document.getElementById('div');

    for(let indice = 0; indice<100; indice++){
        contador = (indice+1);
        let contadorPantalla = document.createElement('h4');
        let numeros = div.appendChild(contadorPantalla);
        numeros.innerHTML = contador;
        console.log(contador);
    }
} 