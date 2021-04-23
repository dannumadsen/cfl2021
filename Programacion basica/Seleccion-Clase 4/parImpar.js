let readlineSync=require("readline-sync");
let numero=readlineSync.questionInt("Ingrese el primer numero:");

if (numero==0){
    console.log("No es impar ni par.");
}else
    if(numero%2==0);{
        console.log("El numero es par.");
    }else{
        console.log("El numero es impar."); 
    }