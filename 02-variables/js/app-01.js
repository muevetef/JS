//Existen 3 formas de declarar variables ej ES6

//Variables con var
"use strict";
var producto = "Monitor de 23 pulgadas";

console.log(producto);

producto = "Teclado es USB ";

console.log(typeof producto);

//Tiene tipado dinamico
producto = 200;

console.log(typeof producto);

var disponible = true;
console.log(typeof disponible);

var suma = 34;
console.log(suma + 3 + "64"); //3764
console.log("64" + (suma + 3)); //64343
console.log(suma + "64" + 3);

// Inicializar varias variables seguidas...
var categoria = "Zapatos",
  marca = "nike",
  indice = 3;

//Reglas para nombrar variables

// var 31dias;
var dias31;

var _31dias;

//estilos para nombrar variables con más de una palabra
var nombreProducto = "Monitor 30 pulgadas"; //camelCase
var nombre_producto = "Monitor 30 pulgadas";
var NombreProducto = "Monitor 30 pulgadas";
var nombreproduto = "Monitor 30 pulgadas";
