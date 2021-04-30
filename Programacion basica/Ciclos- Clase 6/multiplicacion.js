let readlineSync=require("readline-sync");
let numeroTabla=readlineSync.questionInt("Ingrese tabla:");
let limiteTabla=readlineSync.questionInt("Hasta que numero desea?:");
let contador;
let resultado;
for(contador=1, contador>=limiteTabla, contador++){
    resultado=numeroTabla*contador;
    console.log(numeroTabla,"x", contador,"=", resultado);
}