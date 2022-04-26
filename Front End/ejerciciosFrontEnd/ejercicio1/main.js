// Muestre un mensaje de alerta al presionar un botón si el valor 
// introducido en un campo de texto es negativo y en otro campo de texto positivo. 
// ¿Cómo cambiaría si la condición fuera que alguno de los dos fuera positivo?
"use strict";

function cargarNumeros(){
    let primerNumero = document.getElementById('numero1').value;
    let segundoNumero = document.getElementById('numero2').value;
    console.log(primerNumero, segundoNumero)
    
    if ((primerNumero<0 && segundoNumero>0) || (primerNumero>0 && segundoNumero<0)){
        alert('Mensaje de alerta');
    } else{
        console.log('los numeros no cumplieron la condicion')
    }
 
}


