let readlineSync=require("readline-sync");

let dimension=readlineSync.questionInt("Ingrese la cantidad de alumnos: ");
let alumnos=new Array(dimension);
let notas=new Array(dimension);

cargarAlumno(alumnos, dimension);
cargarNota(notas, alumnos, dimension);
mostrarNotas(notas, alumnos, dimension);

function cargarAlumno(alumnos, dimension) {
    for (i=0;i<dimension;i++){
        nombreAlumno=readlineSync.question("Ingrese el nombre del alumno en posicion:", i);
        alumnos[i]=nombreAlumno;
    }
}
function cargarNota(notas, alumnos, dimension) {
    for(i=0;i<dimension;i++){
        nota1=readlineSync.questionInt("Ingrese la nota 1 para el alumno",alumnos[i]);
        nota2=readlineSync.questionInt("Ingrese la nota 2 para el alumno",alumnos[i]);
        nota3=readlineSync.questionInt("Ingrese la nota 3 para el alumno",alumnos[i]);
        notas[i]=(nota1+nota2+nota3)/3;
    }
    
}
function mostrarNotas(notas, alumnos, dimension) {
    for(i=0;i<dimension;i++){
        console.log("el promedio de ",alumnos[i], "es:", notas[i]);
    }
    
}