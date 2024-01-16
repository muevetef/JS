//los strings representa una cadena de carácteres
//exiten 3 formas de crearlos
//Como primitivas
const producto = "Monitor de 23 pulgadas"; //Usaremos esta forma
console.log(typeof producto);
const producto2 = String("Monitor de 23 pulgadas");
console.log(typeof producto2);

//Crear un objeto String
const producto3 = new String("Monitor de 23 pulgadas");
console.log(typeof producto3);
console.log(producto3 instanceof Number);

let producto4 = "Monitor de '23' pulgadas";
producto4 = 'Monitor de "23" pulgadas';
producto4 = 'Monitor \n d\te 23"';
console.log(producto4);

//Metodos para strings
console.log(producto4.length);

const hola = "hola caracola, que ase!";
console.log(hola.length);
console.log(hola[hola.length - 1]);
console.log(hola.indexOf("hola"));
console.log(hola.indexOf("haces"));
console.log(hola.includes("Hola"));
console.log(hola.charAt(3));
console.log(hola.charCodeAt(3));
