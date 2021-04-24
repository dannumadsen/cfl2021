let readlineSync = require("readline-sync");
let vuelta1 = readlineSync.questionInt("Ingrese tiempo de la primer vuelta:");
let vuelta2 = readlineSync.questionInt("Ingrese tiempo de la segunda vuelta:");
let vuelta3 = readlineSync.questionInt("Ingrese tiempo de la tercer vuelta:");
let vuelta4 = readlineSync.questionInt("Ingrese tiempo de la cuarta vuelta:");
let promedioDeVuelta = ((vuelta1+vuelta2+vuelta3+vuelta4)/4);
console.log ("El promedio de vuelta es:", promedioDeVuelta);