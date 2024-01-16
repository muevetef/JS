"use strict";
document.write("Hello desde js externo");

//Guardar el valor en una variable
const hola = "Hola que tal";
console.log(hola, "como va?");

//imprimir arrays
console.log([1, 2, 3, 4]);

//imprimir objetos
const usuario = { nombre: "Mortadelo", profesion: "Agente de la TIA" };
console.log(usuario);

// imprimir resultados como una tabla
console.table([1, 2, 3, 4]);

//errores
console.error("Esto es un error");
console.warn("Soy una alerta!");

//monitorear el tiempo de ejecución
console.time("c1");
console.error("Esto es un error");
console.warn("Soy una alerta!");
console.warn("Soy una alerta!");
console.timeEnd("c1");

//funciones ejemplo
function saludar() {
  console.log("ok");
}

saludar();

//Ejemplo un pco más útil
const nombre = prompt("Dime tu nombre");
const miDiv = document.querySelector(".saludo");
miDiv.innerHTML = `Hola ${nombre}, bienvenido`;
console.log(miDiv);
