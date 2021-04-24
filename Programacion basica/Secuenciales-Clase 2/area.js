let readlineSync = require('readline-Sync');
let base = readlineSync.questionInt("Ingrese base:");
let altura = readlineSync.questionInt("Ingrese altura:");
let area = (base*altura);
console.log (("El area es:"), area);