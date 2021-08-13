//Cree una pagina con un input, un checkbox y un boton.
//Al presionar el boton, si el checkbox está seleccionado 
//debe aparecer un saludo en un h1 y sino en un h2.

"use strict";

let btnVerificar = document.querySelector('#btn-verificar');
btnVerificar.addEventListener('click', verify);

let check = document.querySelectorAll('#chk');
let div = document.getElementById('div');
let saludoH1 = document.createElement('h1');
let saludoH2 = document.createElement('h2');

function verify(){
    if (check == true){
        div.appendChild(saludoH1);
        saludoH1.innerHTML = 'Hola en H1!'
    } else{
        div.appendChild(saludoH2);
        saludoH2.innerHTML = 'Hola en H2'
    }
}