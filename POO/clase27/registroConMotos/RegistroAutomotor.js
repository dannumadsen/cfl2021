"use strict";
exports.__esModule = true;
var Auto_1 = require("./Auto");
var FS = require("fs");
var RLS = require("readline-sync");
var Auto_2 = require("./Auto");
var RegistroAutomotor = /** @class */ (function () {
    function RegistroAutomotor() {
        this.automotor = [];
    }
    RegistroAutomotor.prototype.addAuto = function () {
        var patente = RLS.question('Ingrese la pantente: ');
        var marca = RLS.question('Ingrese la marca: ');
        var modelo = RLS.question('Ingrese la modelo: ');
        var año = RLS.questionInt('Ingrese el año: ');
        this.automotor.push(new Auto_1["default"](patente, marca, modelo, año));
    };
    RegistroAutomotor.prototype.findAuto = function (patente) {
        for (var i = 0; i < this.automotor.length; i++) {
            if (patente == this.automotor[i].getPatente()) {
                return i;
            }
        }
        return -1;
    };
    RegistroAutomotor.prototype.deleteAuto = function (patente) {
        var posicion = this.findAuto(patente);
        if (posicion != -1) {
            this.automotor.splice(posicion, 1);
        }
    };
    RegistroAutomotor.prototype.updateAuto = function (patenteVieja) {
        var patente = RLS.question('Ingrese la pantente nueva: ');
        var marca = RLS.question('Ingrese la marca nueva : ');
        var modelo = RLS.question('Ingrese la modelo nueva: ');
        var año = RLS.questionInt('Ingrese el año nueva: ');
        var posicion = this.findAuto(patenteVieja);
        if (posicion != -1) {
            this.automotor[posicion] = new Auto_2["default"](patente, marca, modelo, año);
        }
        else {
            console.log("el auto no existe");
        }
    };
    RegistroAutomotor.prototype.mostrarAutomotor = function () {
        console.log(this.automotor);
    };
    RegistroAutomotor.prototype.cargarAutomotor = function () {
        var _this = this;
        var automotor = (FS.readFileSync('automotor.txt', 'utf8')).split('\n');
        var propiedadesAuto = [];
        automotor.forEach(function (automotortring) {
            propiedadesAuto = automotortring.split(";");
            _this.automotor.push(new Auto_1["default"](propiedadesAuto[0], propiedadesAuto[1], propiedadesAuto[2], parseInt(propiedadesAuto[3])));
        });
    };
    return RegistroAutomotor;
}());
exports["default"] = RegistroAutomotor;
