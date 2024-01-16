// 10- Escriu un programa que demani una frase i escrigui les vocals que apareixen
// const frase = "La radio de mi coche suena muy mal";
//Creamos una cadena para las vocales
const vocales = "aeiouAEIOU";
let frase = "";
// do {
//   frase = prompt("Escribe una frase: ");
//   for (let i = 0; i < frase.length; i++) {
//     for (let j = 0; j < vocales.length; j++) {
//       if (frase[i] === vocales[j]) {
//         document.write("Se ha encontrado una vocal: " + frase[i] + "<br>");
//       }
//     }
//   }
// } while (frase != null);
const expVocal = /[aeiouAEIOU]/;

frase = prompt("Escribe una frase: ");
for (let i = 0; i < frase.length; i++) {
  if (expVocal.test(frase[i])) {
    document.write("Se ha encontrado una vocal: " + frase[i] + "<br>");
  }
}
