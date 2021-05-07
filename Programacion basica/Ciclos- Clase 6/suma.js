let readlineSync=require("readline-sync");
let numeroUno=readlineSync.questionInt("Ingrese un numero:");
let numeroDos=readlineSync.questionInt("Ingrese otro numero:");
let contador;
let suma=0;

for(contador=numeroUno;contador>=numeroDos;contador++){
    suma+=contador;
}
console.log("La suma entre los los numeros que estan los numeros ingresados son:",suma);