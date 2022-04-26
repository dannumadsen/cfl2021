"use strict";

let btn = document.getElementById('button');

function showDiv() { 
    let div = document.getElementById('div-elemento');
    div.classList.toggle('div-estilo');
} 



for(let i = 0; i < btn.clientHeight; i++){
    btn.addEventListener("click", showDiv);
    let sibling = this.nextElementSibling;
    sibling.classList.toggle('div-estilo')
}