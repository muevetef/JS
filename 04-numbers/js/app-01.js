const num1 = 20; //number
const num2 = "20"; //texto

const num3 = 33.3;
const num4 = 0.456; //0.456
const num5 = -4;

const numero = new Number(34);

//operadores Aritméticos
let resultado;

resultado = num1 + num3;
resultado = num1 - num3;
resultado = num1 * num3;
resultado = num1 / num3;

//modulo
resultado = num1 % num3; //residuo de la división

//Objeto Math
resultado = Math.PI;
resultado = Math.round(2.5);
resultado = Math.ceil(2.2); //3
resultado = Math.floor(2.8); //2

resultado = Math.sqrt(144);
resultado = Math.abs(-300);

resultado = Math.pow(2, 64);
resultado = Math.min(5, 3, 5, 6, 7, 5, 3, 22);
resultado = Math.max(5, 3, 5, 6, 7, 5, 3, 22);

resultado = Math.random();
//Generar un numero aleatorio dentro de un rango
resultado = Math.floor(Math.random() * 10) + 1;

//Precedéncia de operadores igual que en el cole
resultado = 20 + 30 * 6;
resultado = (20 + 30) * 6;

//decuento del 20% en un carrito de la compra
resultado = (20 + 34 + 56 + 76 + 8) * 0.2;

//Incremento y decremento
let puntos = 5;
let resInc;
// puntos = puntos + 1;
resInc = puntos++;
console.log("resInc: " + resInc, "puntos: " + puntos);
puntos--;
resInc = ++puntos;
console.log("resInc: " + resInc, "puntos: " + puntos);
--puntos;

// puntos = puntos + 3;
puntos += 3;
puntos -= 3;
puntos *= 3;
puntos /= 3;

console.log(puntos);

let hola = "Hola ";
hola += "Que tal"; //El operados += està sobecargado para strings
console.log(hola);

//Funciones para convertir a números

const n1 = "20f";
const n2 = "20.3€";
const n3 = "Uno";
const n4 = 20;

console.log(typeof +n1);
console.log(Number.parseInt(n1));
console.log(Number.parseFloat(n2));
console.log(Number.parseFloat(n3));
//revisar si es entero
console.log(Number.isInteger(n2));
console.log(Number.isInteger(n4));

//revisar si es un numero con NaN not a number
console.log(Number.isNaN(Number.parseFloat(n1)));
