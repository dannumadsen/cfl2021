let readlineSync=require("readline-sync");
let dimension=readlineSync.questionInt("Ingrese la dimension de los arreglos:");
let arregloUno= new Array(dimension);
let arregloDos= new Array(dimension);
let productoEscalar= new Array(dimension);

cargarArreglo(arregloUno,arregloDos, dimension);
sumaEscalar=productoEscalar1(arregloUno,arregloDos, productoEscalar, dimension);
console.log(sumaEscalar);

function cargarArreglo(arregloUno,arregloDos,dimension){
    for(i=0;i<dimension;i++){
    num1=readlineSync.questionInt("Ingrese el numero de la posicion: "+i+"del primer arreglo");
    num2=readlineSync.questionInt("Ingrese el numero de la posicion: "+i+"del segundo arreglo");
    arregloUno[i]=num1;
    arregloDos[i]=num2;
    }
}
function productoEscalar1(arregloUno,arregloDos,productoEscalar, dimension) {
    suma=0;
    for(i=0;i<dimension; i++){
        productoEscalar[i]=arregloUno[i]*arregloDos[i];
        suma+=productoEscalar[i];
    }return suma;
}