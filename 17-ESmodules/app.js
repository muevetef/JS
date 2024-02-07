import Person from "./modules/Person.mjs";
import { capitalizeWords, textMoney } from "./modules/utils.js";

const alumno = new Person("Amaya", 23);
alumno.greet();
alumno.mostrarTextoPrivado();

console.log(capitalizeWords("usando modulos de javascript"));
console.log(textMoney(800));
