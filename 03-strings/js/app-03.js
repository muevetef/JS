//Otros métodos de Strings
const producto = "        Monitor de 20 pulgadas             ";

//Eliminar espacios
// const productoFiltrado = producto.trimStart();
// const productoFiltrado = producto.trimEnd();
const productoFiltrado = producto.trimStart().trimEnd().toUpperCase();
// const productoFiltrado = producto.trim();

console.log(producto, producto.length);
console.log(productoFiltrado, productoFiltrado.length);
console.log(productoFiltrado.toLowerCase());

//replace
console.log(productoFiltrado.replace("20", "40"));
console.log(productoFiltrado.replace("PULGADAS", '"'));

//Slice, extrae una parte de la cadena
console.log(productoFiltrado.slice(0, 10));
console.log(productoFiltrado.slice(8));
console.log(productoFiltrado.slice(2, 10));

//metodo similiar
console.log(productoFiltrado.substring(0, 10));
console.log(productoFiltrado.substring(10, 2));

//Ejemplo: mostrar la primera letra del nombre en Mayúsculas
const nombre = "mortadelo";
console.log(nombre.slice(0, 1).toLocaleUpperCase());
console.log(nombre.charAt(0).toLocaleUpperCase());

//Mostrar el nombre entero empezando con Mayúscula
const nombreUperCase = nombre.charAt(0).toUpperCase() + nombre.slice(1);
console.log(nombreUperCase);

//repeat
console.log(nombre.repeat(3));

//split
const actividad = "Estamos aprendiendo jasvascipt";
console.log(actividad.split(" "));
const cosas = "leer, caminar, programar, correr, trabajar, comer";
console.log(cosas.split(", ")); //devuelve un Array

//pasar a texto
const cantidad = 200.44;
console.log(cantidad.toString());

// https://www.w3schools.com/js/js_string_methods.asp
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
// https://es.javascript.info/string
