let readlineSync = require("readline-Sync");
let numeroUno = readlineSync.questionInt("Ingrese primer numero:");
let numeroDos = readlineSync.questionInt("Ingrese segundo numero:");
let resultado = numeroUno + numeroDos;
console.log (resultado);