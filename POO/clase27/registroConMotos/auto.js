"use strict";
exports.__esModule = true;
var Automotor = /** @class */ (function () {
    function Automotor(patente, marca, modelo, año) {
        this.patente = patente;
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
        this.velocidadActual = 0;
    }
    Automotor.prototype.acelerar = function (velocidad) {
        this.velocidadActual = this.velocidadActual + velocidad;
    };
    Automotor.prototype.getVelocidadActual = function () {
        return this.velocidadActual;
    };
    Automotor.prototype.getMarca = function () {
        return this.marca;
    };
    Automotor.prototype.getModelo = function () {
        return this.modelo;
    };
    Automotor.prototype.getAño = function () {
        return this.año;
    };
    Automotor.prototype.getPatente = function () {
        return this.patente;
    };
    Automotor.prototype.setPatente = function (patente) {
        this.patente = patente;
    };
    return Automotor;
}());
exports["default"] = Automotor;
