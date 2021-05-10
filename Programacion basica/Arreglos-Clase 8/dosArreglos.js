let readlineSync=require("readline-sync");

let arregloNombres= new Array(2);
let arregloNumeros= new Array(3);


for(indice=0; indice<2; indice++){
    nombre=readlineSync.question("Ingrese el nombre de la posicion", indice);
    arregloNombres[indice]=nombre;
}
for(indice=0; indice<3; indice++){
    numero=readlineSync.questionInt("Ingrese el numero de la posicion:", indice);
    arregloNumeros[indice]=numero;
}
for(indice=0; indice<2; indice++){
    console.log("El nombre de la posicion", indice,"es", arregloNombres[indice]);
}
for(indice=0; indice<2; indice++){
    console.log("El numero en el posicion", indice, "es", arregloNumeros[indice]);
}