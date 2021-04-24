let readlineSync = require('readline-sync');
 let monto = readlineSync.questionFloat("Ingresar monto: ");
 let montoConDescuento;
 let descuento;
 let cantidad = readlineSync.questionFloat("Ingresar cantidad: ");
 let precioTotal = monto * cantidad;
 let mes = readlineSync.question("Ingresar mes: ");
 if (mes == "Octubre") {
    descuento = (precioTotal*15)/100
    montoConDescuento = precioTotal - descuento;
    console.log("Por comprar en el mes de Octubre Ud tiene un 15% de descuento");
    console.log("El monto a pagar es: " + montoConDescuento);
} else {
    console.log("Ud. no tiene descuento, el monto a pagar es: " + precioTotal);
    }
   