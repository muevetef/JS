//Variable global
const nombre = "Pepe Luís";

function showText(nombre = "XXXX") {
  //Variables locales
  const text = "Hello from Javascript function!! Soy " + nombre;
  console.log(text);
}

showText();
// console.log(text);
console.log(nombre);

//retorno
function doble(num) {
  if (num < 0) {
    return 0;
  }
  return num * 2;
}

const doblado = doble(3);
console.log(doblado);
