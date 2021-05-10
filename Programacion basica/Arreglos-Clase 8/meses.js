let readlineSync=require("readline-sync");

let arregloMes=new Array(12);

arregloMes[0]="Enero";
arregloMes[1]="Febrero";
arregloMes[2]="Marzo";
arregloMes[3]="Abril";
arregloMes[4]="Mayo";
arregloMes[5]="Junio";
arregloMes[6]="Julio";
arregloMes[7]="Agosto";
arregloMes[8]="Septiembre";
arregloMes[9]="Octubre";
arregloMes[10]="Noviembre";
arregloMes[11]="Diciembre";

let nmoMes=readlineSync.questionInt("Indique el numero del mes:");

let indice=nmoMes-1; //Se resta un numero al indice porque empieza a contar en 0

console.log("El mes que eligio es:", arregloMes[indice])//Se llama a la variable con el arreglo y a la variable que descuenta 1
