//Cree una página que tenga un text box, un label y un botón. Al hacer clic en el botón se deberá ejecutar 
//una función javascript que, tomando lo ingresado en el text box, 
//invierta las letras y lo imprima en la consola.
//Ejemplo:
//Text box: Hola Mundo!
//console.log: !odnuM aloH

let btn = document.getElementById('button');
btn.addEventListener("click", invertirTexto);




function invertirTexto (){
    let nodoInput = document.getElementById('texto');
    let textoUsuario = nodoInput.value;
    let textoInvertido = textoUsuario.split('').reverse().join('');
    let nodoSalida = document.getElementById('txtInvertido');
     
    nodoSalida.innerHTML = `Texto invertido: ${textoInvertido}`;

}