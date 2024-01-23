const personas = [
  {
    id: 1,
    nombre: "Alice",
    edad: 28,
    direccion: {
      ciudad: "Nueva York",
      pais: "Estados Unidos",
    },
    hobbies: ["lectura", "pintura"],
  },
  {
    id: 2,
    nombre: "Bob",
    edad: 35,
    direccion: {
      ciudad: "Londres",
      pais: "Reino Unido",
    },
    hobbies: ["correr", "cocinar"],
  },
  {
    id: 3,
    nombre: "Charlie",
    edad: 22,
    direccion: {
      ciudad: "París",
      pais: "Francia",
    },
    hobbies: ["jardinería", "fotografía"],
  },
  {
    id: 4,
    nombre: "David",
    edad: 32,
    direccion: {
      ciudad: "Tokio",
      pais: "Japón",
    },
    hobbies: ["viajar", "programar"],
  },

  {
    id: 5,
    nombre: "Eve",
    edad: 29,
    direccion: {
      ciudad: "Sídney",
      pais: "Australia",
    },
    hobbies: ["ciclismo", "tocar música"],
  },
];
// Ejercicio 1: Usa forEach para imprimir en la consola el nombre y la ciudad de cada persona
const miDiv = document.getElementById("personas");

let textPersonas = "";
personas.forEach((persona) => {
  textPersonas += `<p>${persona.nombre} vive en ${persona.direccion.ciudad}</p>`;
});
miDiv.innerHTML = textPersonas;
console.log(textPersonas);
// Resultado esperado: Alice (Nueva York), Bob (Londres), Charlie(París), David (Tokio), Eve (Sídney)
// Ejercicio 2: Crea un nuevo array con objetos que contengan el nombre,la edad y la ciudad de cada persona
const newPersonas = personas.map((persona) => {
  const {
    nombre,
    edad,
    direccion: { ciudad },
  } = persona;
  return {
    nombre,
    edad,
    ciudad,
  };
});
console.log(newPersonas);
// Resultado esperado: [{ nombre: 'Alice', edad: 28, ciudad: 'NuevaYork' }, ...]
// Ejercicio 3: Filtra las personas que tienen hobbies que incluyen'lectura'
const readingHobbyPersonas = personas.filter((persona) => {
  return persona.hobbies.includes("lectura");
});
console.log(readingHobbyPersonas);
// Resultado esperado: [{ nombre: 'Alice', ... }]
// Ejercicio 4: Calcula la suma de las edades de todas las personasusando reduce
// Resultado esperado: 146
// Ejercicio 5: Comprueba si al menos una persona es menor de 21 añosusando some
// Resultado esperado: true/false
// Ejercicio 6: Encuentra la persona con la edad exacta de 29 añosusando find
// Resultado esperado: { nombre: 'Eve', ... }
// Ejercicio 7: Ordena las personas por edad de forma descendente usando sort
// Resultado esperado: [{ nombre: 'Bob', edad: 35, ... }, ...]
