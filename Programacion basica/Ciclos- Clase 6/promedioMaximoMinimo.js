let readlineSync=require("readline-sync");
let min, max, contador, promedio, suma;
let numero=readlineSync.questionFloat("Ingrese un numero:");
let contador=0;//Al principio la cuenta de numeros ingresados es cero y la suma tambien
let suma=0;
let promedio=0;

let min=numero;//inicializo el minimo y el maximo en el primer valor que ingresa
let max=numero;

while(numero!=0){
    if (numero<min){//verifico si el numero es minimo
        min=numero;
    }else if(numero>max){//verifico si el numero es maximo
            max=numero;
    }
suma+=numero;//acumulo el numero ingresado en suma y aumento en uno el contador
contador++;
let numero=readlineSync.questionFloat("Ingrese otro numero:");
}
if (contador>0){//se verficia que al menos se haya ingresado un numero para evitar la division por 0
    promedio=suma/contador;
    console.log("El minimo es:", min);
    console.log("El maximo es:", max);
    console.log("El promedio es:", promedio);
}else{
    console.log("No ingreso ningun numero.");
}
