//filter
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const numPares = nums.filter(function (num) {
  return num % 2 === 0;
});
//version corta
const numPares2 = nums.filter((num) => num % 2 === 0);

//Lo mismo con foreach
const numPares3 = [];
nums.forEach((num) => {
  if (num % 2 === 0) {
    numPares3.push(num);
  }
});
console.log(numPares3);

const empresas = [
  { name: "Empresa Uno", category: "Finanzas", start: 1981, end: 2004 },
  { name: "Empresa Dos", category: "Minorista", start: 1992, end: 2008 },
  { name: "Empresa Tres", category: "Automoción", start: 1999, end: 2007 },
  { name: "Empresa Cuatro", category: "minorista", start: 1989, end: 2010 },
  { name: "Empresa Cinco", category: "Tecnología", start: 2009, end: 2014 },
  { name: "Empresa Seis", category: "Finanzas", start: 1987, end: 2010 },
  { name: "Empresa Siete", category: "Automoción", start: 1986, end: 1996 },
  { name: "Empresa Ocho", category: "Tecnología", start: 2011, end: 2016 },
  { name: "Empresa Nueve", category: "Minorista", start: 1981, end: 1989 },
];

//Obtener solo la empresas Minorista
const minoristas = empresas.filter(
  (empresa) => empresa.category === "Minorista"
);
console.log(minoristas);
//Obtener las empresas que empezaron en 1980 o después i cerraron en 2005 o ante
const empresas1 = empresas.filter(
  (empresa) => empresa.start >= 1980 && empresa.end <= 2005
);
console.log(empresas1);
//Obtener las empresas que tienen 10 años o más
const empresas2 = empresas.filter(
  (empresa) => empresa.end - empresa.start >= 10
);
console.log(empresas2);

//MAP, igual que forEach pero devuelve un array nuevo
//Crear un array de objetos con el nombre y los años de actividad

const empresasYearsOfActivity = empresas.map((empresa) => {
  return {
    name: empresa.name,
    years: empresa.end - empresa.start + " years",
  };
});
console.log(empresasYearsOfActivity);

//Encadenar métodos
const raizYdoble = nums.map((num) => Math.sqrt(num)).map((num) => num * 2);
console.log(raizYdoble);

//pares * 2
const paresDobles = nums.filter((num) => num % 2 === 0).map((num) => num * 2);
console.log(paresDobles);

const saludar = function (name) {
  return "Hola " + name;
};

const saludar2 = (name) => "Hola " + name;

//IIFE
(function (_texto) {
  const texto = _texto;
  console.log(texto);
})("Soy una IIFE");
