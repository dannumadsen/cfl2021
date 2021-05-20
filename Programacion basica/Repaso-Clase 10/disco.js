let readlineSync=require("readline-sync");
let capacidad=270;
let personas=new Array(capacidad);

llenarBolice(personas,capacidad);
let cantidadMenores=menores(personas,capacidad);
console.log("La cantidad maxima que entra en el boliche son 270.")
console.log("La cantidad de menores de 21 que ingresaron son:"+cantidadMenores);

function llenarBolice(personas,capacidad) {
    for(i=0;i<capacidad;i++){
        personas[i]=aleatorio(18,40);
    }
}
function aleatorio(min, max) {
    return Math.floor(Math.random()*(max-min+1))+min;
}
function menores(personas, capacidad) {
    suma=0;
    for(i=0;i<capacidad;i++){
        if(personas[i]<=21){
            suma++;
        }
    }return suma;   
}