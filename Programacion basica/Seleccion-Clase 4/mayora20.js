let readlineSync=require("readline-sync");
let numDeseado=readlineSync.questionInt("Escriba el numero que desee verificar si es mayor o menor a 20");
if (numDeseado>=20){
    console.log("El numero ingresado es mayor a 20");
}else{
    console.log("El numero ingresado es menor a 20");
}