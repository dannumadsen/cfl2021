let readlineSync=require("readline-sync");
let cantidadDados=readlineSync.questionInt("ingrese cantidad de dados:");
let probabilidad= 6 ** +cantidadDados;//** es igual a la potencia
console.log("La poibiliad de sacar todos 6 es de: 1/",probabilidad);