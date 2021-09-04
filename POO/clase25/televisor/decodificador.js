"use strict";
exports.__esModule = true;
var Decodificador = /** @class */ (function () {
    function Decodificador(volumen, canalInicial) {
        this.volumenActual = volumen;
        this.canalActual = canalInicial;
    }
    Decodificador.prototype.prenderApagar = function () {
        if (this.estaPrendido) {
            this.estaPrendido = false;
        }
        else {
            this.estaPrendido = true;
        }
    };
    Decodificador.prototype.bajarVolumen = function () {
        this.volumenActual = this.volumenActual - 1;
    };
    Decodificador.prototype.subirVolumen = function () {
        this.volumenActual = this.volumenActual + 1;
    };
    Decodificador.prototype.subirCanal = function () {
        this.canalActual = this.canalActual + 1;
    };
    Decodificador.prototype.bajarCanal = function () {
        this.canalActual = this.canalActual - 1;
    };
    Decodificador.prototype.getVolumenActual = function () {
        return this.volumenActual;
    };
    Decodificador.prototype.getCanalActual = function () {
        return this.canalActual;
    };
    return Decodificador;
}());
exports["default"] = Decodificador;
