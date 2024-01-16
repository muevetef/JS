console.log("antes de llamar a la función");
//Ejecutamos la función
sumar();
console.log("Después de llamar a la función");
sumar();
sumar();
//Declaración de una función
function sumar() {
  console.log(2 + 3);
}

//Funciones como expresiones
const resta = function () {
  console.log("La resta es: " + (4 - 3));
};
resta();
console.log(resta);
//Hoisting

//Pasar parámetros
function saludo(nombre, apellido) {
  console.log("Bienvenido " + nombre + " " + apellido);
}

saludo("Luigi", "Serrano");

const saludo2 = function (nombre, apellido) {
  console.log("Bienvenido " + nombre + " " + apellido);
};
saludo2("Mario", "Bross");
