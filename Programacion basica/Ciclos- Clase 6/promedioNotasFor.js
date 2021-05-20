let readlineSync=require("readline-sync");
let nota, suma, promedio, contador
suma=0

for (contador=1;contador<11;contador++){ //El contador va desde 1 inclusive hasta 10 inclusive//
    nota=readlineSync.questionFloat("Ingrese la nota", contador +":");
    suma+=nota;
}
promedio=suma/10
console.log("El promedio es:", promedio);