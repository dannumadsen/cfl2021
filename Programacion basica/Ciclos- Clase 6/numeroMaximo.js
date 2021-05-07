let readlineSync=require("readline-sync");
let numeros=readlineSync.questionInt("Ingrese un numero:");
let mayor=numeros//se guarda como variable de almacenamiento el numero que ingresamos en "mayor"

while(valor==0){
    if(valor>mayor){//cambiar el signo para buscar el menor
        mayor=valor;
    }
    valor=readlineSync.questionInt("ingrese otro valor:");
}
console.log("el numero mayor es:", mayor);