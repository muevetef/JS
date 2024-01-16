//Bucle for
//- contador con valor inicial
//- condición que depende del contador
//- cambiar el contador

// const pass = "1234";
// let respuesta = "";
// while (respuesta !== pass) {
//   respuesta = prompt("Escribe el password!");
// }
// alert("Ya estàs dentro!!!");

var i = 0;
while (i < 10) {
  console.log("La i vale: " + i);
  i++;
}
console.log("La i vale: " + i);

const texto = "En la granja de pepito... ia ia oh!";
let numVocales = 0;
const vocales = "aeiouAEIOU";
// const vocales = ["a", "e", "i", "o", "u"];
for (let i = 0; i < texto.length; i++) {
  for (let j = 0; j < vocales.length; j++) {
    if (texto[i] === vocales[j]) {
      numVocales++;
      console.log(texto[i]);
    }
  }
}
console.log("Hay " + numVocales);

const letras = ["h", "o", "l", "a"];
console.log(letras[2]);

let palabra = "";
for (let i = 0; i < letras.length; i++) {
  palabra += letras[i];
}
console.log(palabra);
console.log(letras.toString().split(","));
