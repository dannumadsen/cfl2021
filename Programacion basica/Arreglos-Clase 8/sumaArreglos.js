let readlineSync=require("readline-sync");

let suma=0;

let dimension=readlineSync.question("Ingrese la dimension:");
let numArreglo= new Array(dimension);

for(i=0;i<dimension;i++){
    num=readlineSync.questionInt("Ingrese numero en la posicion"+ i);
    numArreglo[i]=num;
    suma+=numArreglo[i];//se suma el valor
}
console.log("La suma total es:"+suma);