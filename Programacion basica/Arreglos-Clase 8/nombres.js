let readlineSync=require("readline-sync");

let dimensionArreglo=readlineSync.questionInt("Ingrese la dimension del arreglo:");

let nombrePersona= new Array(dimensionArreglo);

for (indice=0; indice<dimensionArreglo; indice++){
    nombre=readlineSync.question("Ingrese el nombre que quiere poner en el lugar"+ indice +":");
    nombrePersona[indice]=nombre;
}
for(indice=0; indice<dimensionArreglo; indice++){
    console.log("La persona que ingreso en la posicion", indice,"es", nombrePersona[indice]);
}