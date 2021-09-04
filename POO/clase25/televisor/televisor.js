"use strict";
exports.__esModule = true;
var Decodificador_1 = require("./Decodificador");
var Televisor = /** @class */ (function () {
    function Televisor(decodificador) {
        this.decodificador = decodificador;
    }
    Televisor.prototype.prenderApagar = function () {
        if (this.estaPrendido) {
            this.estaPrendido = false;
        }
        else {
            this.estaPrendido = true;
        }
    };
    Televisor.prototype.bajarVolumen = function () {
        this.decodificador.bajarVolumen();
    };
    Televisor.prototype.subirVolumen = function () {
        this.decodificador.subirVolumen();
    };
    Televisor.prototype.subirCanal = function () {
        this.decodificador.subirCanal();
    };
    Televisor.prototype.bajarCanal = function () {
        this.decodificador.bajarCanal();
    };
    Televisor.prototype.getVolumenActual = function () {
        return this.decodificador.getVolumenActual();
    };
    Televisor.prototype.getCanalActual = function () {
        return this.decodificador.getCanalActual();
    };
    return Televisor;
}());
var decodificador1 = new Decodificador_1["default"](10, 30);
var televisor = new Televisor(decodificador1);
console.log('El televisor se encuentra en el canal ' + televisor.getCanalActual());
televisor.bajarVolumen();
console.log('El Televisor se encuentra en el volumen ' + televisor.getVolumenActual());
