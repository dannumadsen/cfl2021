let readlineSync = require('readline-sync');
let sueldoActual = readlineSync.questionFloat("Ingrese el salario actual del Empleado: ");
let nuevoSueldo;
if ( 0 < sueldoActual && sueldoActual <= 15000 ) {
    nuevoSueldo = sueldoActual*1.2;
    console.log("Ud. tiene un aumento de 20%");
} else if ( 15001 < sueldoActual && sueldoActual <= 20000 ) {
        nuevoSueldo = sueldoActual*1.1;
        console.log("Ud. tiene un aumento de 10%");
} else if ( 20001 < sueldoActual && sueldoActual <= 25000 ) {
        nuevoSueldo = sueldoActual * 1.05;
        console.log("Ud. tiene un aumento de 5%");
} else {
        nuevoSueldo = sueldoActual;
        console.log("Ud. no tiene aumento");
}
