let readlineSync=require("readline-sync");
let dimension= readlineSync.questionInt("Ingrese cuantos espacios quiere:");
let num= new Array(dimension);
let resultado=0;
for(i=0; i<dimension; i++){
    num[i]=readlineSync.questionInt("Ingrese un numero:");
    resultado+=num;
}
console.log(num);