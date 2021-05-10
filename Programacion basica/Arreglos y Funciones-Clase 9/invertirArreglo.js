let readlineSync=require("readline-sync");
let dimension=readlineSync.questionInt("Ingrese la dimension:");
let numArreglo=new Array(dimension);

for(i=0;i<dimension;i++){
    num=readlineSync.questionInt("Ingrese un numero en la posicion: "+i);
    numArreglo[i]=num;
}
for(i=dimension-1;i>=0;i--){
    console.log(numArreglo[i]);
}