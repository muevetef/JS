const nombreProducto = "Monitor de 20 Pulgadas";
const precio = 200;
const disponible = true;

//Objeto como literal

const producto = {
  nombre: "Pantalla OLED",
  precio: 300,
  disponible: true,
}; //es de tipo Object

console.log(producto.nombre);
console.log(producto.precio);
console.log(producto.disponible);

producto.nombre = "Teclado inalámbrico";
console.log(producto.nombre);
//otra forma de acceder a las propiedades

console.log(producto["nombre"]);

//Añadir propiedades
producto.imagen = "image.jpg";
console.log(producto);

delete producto.nombre;
console.log(producto);

//Desestructuracion de objetos
