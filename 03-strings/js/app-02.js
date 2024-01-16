//Concatenar strings
const producto = "Monitor 20 pulgadas";
const precio = "180 €";

let oferta = producto.concat(" En descuento");
oferta = producto.concat(precio);

//usando el operador +
oferta = producto + ", tiene un precio" + " de: " + precio;
//Interpolación de variables con backtics
oferta = `El producto ${producto},
          tiene un precio de ${precio}.
          La suma de 1 + 2 es = ${1 + 2}`;
console.log(oferta);
