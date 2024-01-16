//Miniejemplo carrito
let total = 0;

function agregarItem(precio) {
  return (total += precio);
}

function calcularIVA(total) {
  return 1.21 * total;
}

total = agregarItem(200);
total = agregarItem(400);
total = agregarItem(300);
console.log(total);

const precioFinal = calcularIVA(total);
console.log(`El total es de ${precioFinal}`);

//Funcion recursiva
function sayHello(text) {
  console.log(text);
  sayHello(text);
}

sayHello("Hola");
