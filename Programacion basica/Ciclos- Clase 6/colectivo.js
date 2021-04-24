let readlineSync=require("readline-sync");
let llegadaColectivo
console.log ("Esperando el colectivo.")
llegadaColectivo=readlineSync.question("Llego el colectivo?(Y/N)");

while(llegadaColectivo=="N"){
    console.log("Todavia no viene el colectivo");
    llegadaColectivo=readlineSync.question("Llego el colectivo?(Y/N)");
}
console.log("Llego el colectivo!");