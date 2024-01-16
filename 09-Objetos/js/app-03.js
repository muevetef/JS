//Los objetos pueden contener qualquier cosa
const producto = {
  nombre: "Pantalla OLED",
  precio: 300,
  disponible: true,
  info: {
    peso: "2kg",
    medidas: "1m",
  },
};

console.log(producto.info.medidas);

const {
  nombre,
  info: { peso, medidas },
} = producto;
console.log(nombre);
console.log(peso);

const producto2 = { imagen: "algo.jpg", ...producto }; //spread operator
producto2.nombre = "Silla gamer super-pro";
console.log(producto2);
console.log(producto);
