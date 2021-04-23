let readlineSync=require("readline-sync");
let usuarioCorrecto="Juan";
let claveCorrecta="claveJuan";
let usuario=readlineSync.question("Ingrese usuario:");
let clave=readlineSync.question("Ingrese su clave:");

if (usuario==usuarioCorrecto && clave==claveCorrecta){
    console.log("Usuario y clave correctas!");
}else{
    console.log("Usuario y clave incorrectas!");
}