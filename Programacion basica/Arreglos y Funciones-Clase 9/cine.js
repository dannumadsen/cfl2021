let readlineSync=require("readline-sync");
let dimension=readlineSync.questionInt("Ingrese la cantidad de butacas:");
let butacas= new Array(dimension);

cargarButacas(butacas, dimension);
let libres1=butacasLibres(butacas, dimension);
console.log("Las butacas libres son: ",libres1);

function cargarButacas(butacas,dimension) {
    for(i=0;i<dimension;i++){
        butaca=readlineSync.question("Ingrese si esta ocupado o descocupado.Los valores puede ser true o false:");
        butacas[i]=butaca;
    }
}
function butacasLibres(butacas, dimension) {
    libres=0;
    for(i=0;i<dimension;i++){
        if(butacas[i]=='false'){
            libres++;
        }
    }return libres;
}