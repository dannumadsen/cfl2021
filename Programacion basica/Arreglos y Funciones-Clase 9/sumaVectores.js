let readlineSync=require("readline-sync");

let v1= new Array(6);
let v2= new Array(6);
let vSuma= new Array(6);

for(i=0;i<6; i++){
    num1=readlineSync.questionInt("Ingrese numero de la posicion "+ i+ "del vector v1:");
    num2=readlineSync.questionInt("Ingrese numero de la posicion "+i+ "del vector v2:");
    v1[i]=num1;
    v2[i]=num2;
}
for(i=0;i<6; i++){
    vSuma[i]=v1[i]+v2[i];
    console.log("La suma de los dos vectores en la posicion"+ i+ "es:"+vSuma[i]);
}