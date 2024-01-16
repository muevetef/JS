//Desestructuracion de objetos
const producto = {
  nombre: "Pantalla OLED",
  precio: 300,
  disponible: true,
};

// const nombre = producto.nombre;
// const precio = producto.precio;
// const disponible = producto.disponible;

const { nombre, precio, disponible } = producto;
console.log(nombre);
console.log(precio);
console.log(disponible);
