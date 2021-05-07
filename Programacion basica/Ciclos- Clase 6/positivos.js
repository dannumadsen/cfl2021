let readlineSync=require("readline-sync");
let total=0
let positivos=0
let porcentaje=0
let numero=readlineSync.questionInt("Ingrese un numero:");
while(numero!=0){
    if(numero>0){
        positivos++
    }
    total++
    let numero=readlineSync.questionInt("Ingrese otro numero:");
}
if(total>0){
    porcentaje=positivos*100/total;
    console.log(positivos, "son positivos.", porcentaje, "% del total");
}
