let readlineSync=require("readline-sync");
let numeroUno=readlineSync.questionInt("Ingrese primer numero:");
let numeroDos=readlineSync.questionInt("Ingrese segundo numero:");
let numeroTres=readlineSync.questionInt("Ingrese tercer numero:");

if(numeroUno>numeroDos && numeroUno>numeroTres){
    console.log (numeroUno, "es mayor.");
}else if(numeroDos>numeroUno && numeroDos>numeroTres){
        console.log (numeroDos, "es mayor.");
}else if(numeroTres>numeroUno && numeroTres>numeroDos){
        console.log(numeroTres, "es mayor.");
}