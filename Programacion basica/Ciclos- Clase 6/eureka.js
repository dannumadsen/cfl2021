let readlineSync=require("readline-sync");
let claveUsuario=readlineSync.question("Ingrese la clave:");
let clave="eureka";
let intentos=1
while((claveUsuario!=clave) && (intentos<3)){
    intentos++;
    claveUsuario=readlineSync.question("Ingrese clave nuevamente:");
}if(claveUsuario==clave){
    console.log("Clave correcta.");
}else{
    console.log("Ha agotado los intentos.");
}
    