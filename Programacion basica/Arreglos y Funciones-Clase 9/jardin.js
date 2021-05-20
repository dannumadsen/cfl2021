let readlineSync=require("readline-sync");
let azul=40;
let verde=35;
let amarillo=30;
let alumnos=readlineSync.questionInt("Ingrese la cantidad de alumnos:");

asignarAlumnos(azul, verde, amarillo, alumnos);

function asignarAlumnos(azul, verde, amarillo, alumnos) {
    if(alumnos<=amarillo){
        console.log("Ingresan en la sala amarilla.");
    }else if(alumnos<=verde){
            console.log("Ingresan en la sala verde.");
    }else if(alumnos<=azul){
            console.log("Ingresan en la sala azul.");
    }else{
        console.log("No hay cupo para la cantidad de alumnos.");
    }
    
}