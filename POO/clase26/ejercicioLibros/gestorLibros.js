"use strict";
exports.__esModule = true;
var RLS = require("readline-sync");
var FS = require("fs");
var Libro_1 = require("./Libro");
var GestorLibro = /** @class */ (function () {
    function GestorLibro() {
        this.libros = [];
    }
    GestorLibro.prototype.addLibro = function () {
        var titulo = RLS.question('Ingrese el titulo: ');
        var editorial = RLS.question('Ingrese la editorial: ');
        var anioEdicion = RLS.question('Ingrese el año: ');
        var genero = RLS.question('Ingrese el genero: ');
        var idioma = RLS.question('Ingrese el idioma: ');
        var autor = RLS.question('Ingrese el autor: ');
        var precio = RLS.questionInt('Ingrese el precio: ');
        this.libros.push(new Libro_1["default"](titulo, editorial, anioEdicion, genero, idioma, autor, precio));
    };
    GestorLibro.prototype.findLibro = function (titulo) {
        for (var i = 0; i < this.libros.length; i++) {
            if (titulo == this.libros[i].getTitulo()) {
                return i;
            }
        }
        return -1;
    };
    GestorLibro.prototype.deleteLibro = function (titulo) {
        var posicion = this.findLibro(titulo);
        if (posicion != -1) {
            this.libros.splice(posicion, 1);
        }
    };
    GestorLibro.prototype.updateLibro = function (libroViejo) {
        var titulo = RLS.question('Ingrese el titulo: ');
        var editorial = RLS.question('Ingrese la editorial: ');
        var anioEdicion = RLS.question('Ingrese el año: ');
        var genero = RLS.question('Ingrese el genero: ');
        var idioma = RLS.question('Ingrese el idioma: ');
        var autor = RLS.question('Ingrese el autor: ');
        var precio = RLS.questionInt('Ingrese el precio: ');
        var posicion = this.findLibro(libroViejo);
        if (posicion != -1) {
            this.libros[posicion] = new Libro_1["default"](titulo, editorial, anioEdicion, genero, idioma, autor, precio);
        }
        else {
            console.log("el libro no existe");
        }
    };
    GestorLibro.prototype.mostrarLibros = function () {
        console.log(this.libros);
    };
    GestorLibro.prototype.cargarLibros = function () {
        var _this = this;
        var libros = (FS.readFileSync('libro.txt', 'utf8')).split('\n');
        var propiedadesLibro = [];
        libros.forEach(function (libroString) {
            propiedadesLibro = libroString.split(";");
            _this.libros.push(new Libro_1["default"](propiedadesLibro[0], propiedadesLibro[1], propiedadesLibro[2], propiedadesLibro[3], propiedadesLibro[4], propiedadesLibro[5], parseInt(propiedadesLibro[6])));
        });
    };
    return GestorLibro;
}());
exports["default"] = GestorLibro;
