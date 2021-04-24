let readlineSync=require("readline-sync");

let nota
let promedio
let contador=1
let suma=0//Usamos la variable suma como acumulador de las notas y se inicia en 0//

while(contador<=10){
    nota=readlineSync.question("Ingrese nota:");
    suma=suma+nota;//En cada iteracion se suma la nota ingresada por el usuario en la variable//
    contador=contador+1;
}
promedio=suma/10;
console.log("El promedio de las 10 notas es:", promedio);