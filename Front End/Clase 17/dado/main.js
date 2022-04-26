// Declaro variables
let cantidad = 1000;
let tiros = new Array (cantidad);
let i = 0;


// Funciones
//Devuelve un numero random 
function tirarDados(min, max) {
    return Math.floor(Math.random() * (max - min) + 1 );
    }

//un bucle que va a hacer que repita 1000 veces
function tirarMilVeces(arreglo, cantidad){
    
    for(i = 0; i<cantidad; i++){
        arreglo[i] = tirarDados(1,7);
        console.log(arreglo[i]);
    }
    return arreglo[i];
}

//Contar cuatros.
function contarCuatros(arreglo, cantidad){
    let contador = 0;
    for(i = 0; i < cantidad; i++){
        if (arreglo[i]==4){
            contador++;
        }  
    }
    return contador;
}

//Funcion para pasar el resultado de contar cuatros al DOM o al HTML? como se diria?
function mostrar(){
    let nodoParrafo = document.getElementById('contador');
    nodoParrafo.innerHTML = 'El numero cuatro salio: ' + contarCuatros(tiros, cantidad);
}
