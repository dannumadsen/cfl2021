let readlineSync=require("readline-sync");
let dimension=readlineSync.questionInt("Ingrese la cantidad de chicos:");
let jugadores= new Array(dimension);

cargarEdades(jugadores,dimension);
mostrarArreglo(jugadores,dimension);
let promedioEdades=promedio(jugadores, dimension);
console.log(promedioEdades);

function cargarEdades(jugadores, dimension) {
    for(i=0;i<dimension;i++){
        jugadores[i]=aleatorio(3,7);//llamo a la funcion aleatorio para cargar edades de 3 a 7 años
    }
}
function aleatorio(min, max) {
    return Math.floor(Math.random()*(max-min+1))+min;
}
function mostrarArreglo(jugadores, dimension) {
    for(i=0;i<dimension;i++){
        console.log("La edad del alumno en la posicion",i,"es",jugadores[i], ".");

    }
}
function promedio(jugadores, dimension) {
    suma=0;
    for(i=0;i<dimension;i++){
        suma+=jugadores[i];//se va sumando la edad de los jugadores
    }
    return suma/dimension;
}