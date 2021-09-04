"use strict";
exports.__esModule = true;
var Telefono = /** @class */ (function () {
    function Telefono() {
    }
    Telefono.prototype.mandarMensaje = function () {
        console.log('Este metodo es para mandar mensajes');
    };
    ;
    Telefono.prototype.hacerLlamada = function () {
        console.log('Este metodo es para llamar');
    };
    Telefono.prototype.prenderApagar = function () {
        if (this.estaprendido = false) {
            this.estaprendido = true;
        }
        else {
            this.estaprendido = false;
        }
    };
    return Telefono;
}());
exports["default"] = Telefono;
