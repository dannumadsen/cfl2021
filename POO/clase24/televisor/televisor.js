var Televisor = /** @class */ (function () {
    function Televisor(encendido, volumen, canal) {
        this.estaPrendido = encendido;
        this.volumenActual = volumen;
        this.canal = canal;
    }
    Televisor.prototype.prenderApagar = function () {
        if (this.estaPrendido)
            this.estaPrendido = false;
        else
            this.estaPrendido = true;
    };
    Televisor.prototype.bajarVolumen = function () { };
    Televisor.prototype.subirVolumen = function () { };
    Televisor.prototype.subirCanal = function () { };
    Televisor.prototype.bajarCanal = function () { };
    return Televisor;
}());
