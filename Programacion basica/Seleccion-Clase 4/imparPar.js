let readlineSync=require("readline-sync");
let numero=readlineSync.questionInt("Ingrese numero:");
if (numero==0){
    console.log("El numero ingresado no es par ni impar.");
}else if(numero%2 == 0){
    console.log ("El numero es par.");
}else if(numero%2 != 0){
    console.log ("El numero es impar.");
}