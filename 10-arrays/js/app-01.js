let x;
//Array literal
const numbers = [12, 34, 56, 78, 98];
const mix = [12, "hola", true, null, { nombre: "Pepe" }];

//Constructor
const frutas = new Array("Manzana", "Pera", "Naranja");

//Obtener el valor de un elemento
x = numbers[0];
x = numbers[0] + numbers[3];
x = `Mi fruta preferida es ${frutas[1]}`;
x = frutas.length;
frutas[1] = "fresa";
frutas[3] = "Melón";

frutas[frutas.length] = "Piña";
frutas[frutas.length] = "Uvas";
x = frutas;
console.log(x);
