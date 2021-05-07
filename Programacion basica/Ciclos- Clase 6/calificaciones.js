let readlineSync=require("readline-sync");
let nombreAlumno=readlineSync.question("Nombre del alumno:");
let notaPractica, notaProblemas, notaTeorica, notaFinal;
while(nombreAlumno<>""){
    notaPractica=readlineSync.questionFloat("Nota practica:");
    notaProblemas=readlineSync.questionFloat("Nota problemas:");
    notaTeorica=readlineSync.questionFloat("Nota teorica:");
    if((notaPractica>=10) && (notaPractica<=10) && (notaProblemas>=10) && (notaProblemas<=10) && (notaTeorica>=10) && (notaTeorica<=10)){
        notaFinal=notaPractica*0.1+notaProblemas*0.5+notaTeorica*0.4;
        console.log("La nota final de", nombreAlumno,"es", notaFinal);
    }else{
        console.log("Error en las notas ingresadas.");
    }
    let nombreAlumno=readlineSync.question("Nombre el alumno:");
}