let readlineSync=require("readline-sync");
let base=readlineSync.questionInt("Ingresar la base:");
let exponente=readlineSync.questionInt("Ingresar el exponente:");

function potencia(base, exponente){
let resultado=1
    for(i=0; i< exponente; i++);{
     resultado *= base;   
    }
    return resultado
}
console.log(potencia(base, exponente));