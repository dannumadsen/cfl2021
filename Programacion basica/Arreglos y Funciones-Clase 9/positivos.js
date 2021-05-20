let readlineSync=require("readline-sync");
let dimension=readlineSync.questionInt("Ingrese dimension:");

let arregloNum= new Array(dimension);

cargarArreglos(arregloNum, dimension);
mostrarArreglo(arregloNum, dimension);

positivos=devolverPositivo(arregloNum, dimension);
console.log("La cantidad de positivos son: "+ positivos);

negativos=devolverNegativos(arregloNum,dimension);
console.log("La cantidad de negativos son :"+negativos);

ceros=devolverCero(arregloNum,dimension);
console.log("La cantidad de ceros es: "+ceros);

function cargarArreglos(vector, dimension){
    for(i=0;i<dimension;i++){
        num=readlineSync.questionInt("Ingrese numero:");
        vector[i]=num;
    }

}
function mostrarArreglo(vector, dimension){
    for(i=0;i<dimension;i++){
        console.log("El arreglo en la posicion"+ i+ "es"+ vector[i]);
    }
}
function devolverPositivo(vector, dimension){
    positivos=0;
    for(i=0; i<dimension;i++){
        if(vector[i]>0){
            positivos++;
        }
    }return positivos;
}
function devolverNegativos(vector, dimension){
    negativos=0;
    for(i=0;i<dimension;i++){
        if(vector[i]<0){
            negativos++;
        }
    }return negativos;
}
function devolverCero(vector, dimension){
    ceros=0;
    for(i=0;i<dimension;i++){
        if(vector[i]==0){
            ceros++;
        }
    }return ceros;
}