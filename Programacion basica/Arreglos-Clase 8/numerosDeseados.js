let readlineSync=require("readline-sync");
let nmoDeseado= new Array(5);

for(i=0;i<5;i++){
    num=readlineSync.questionInt("ingresar un numero de la posicion"+ i +":");
    nmoDeseado[i]=num;
}
for(i=0;i<5;i++){
    console.log("El numero en la posicion"+ i+ "es", nmoDeseado[i]);
}