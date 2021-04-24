let readlineSync=require("readline-sync");
let alturaDeseada=readlineSync.questionFloat("Ingrese su altura:");
let alturaPermitida=1.30
if(alturaDeseada>=alturaPermitida){
    console.log("Puede ingresar al juego");
}else{
    console.log("No puede ingresar al juego.");
}