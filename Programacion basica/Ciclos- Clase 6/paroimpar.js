let readlineSync=require("readline-sync");
let numero=readlineSync.questionInt("Ingrese numero:");
let contador;
while (numero%2==0){
    console.log("El numero es par.");
    numero=readlineSync.questionInt("Ingrese otro numero:");
}
if (numero%3==0){
    console.log("El numero es impar.");
}else if(numero==0){
    console.log("Ingrese un numero mayor a 0.");
}