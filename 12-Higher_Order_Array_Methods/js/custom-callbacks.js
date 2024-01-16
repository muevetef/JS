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

empresas.miForEach = function (callback) {
  for (let i = 0; i < this.length; i++) {
    const elemento = this[i];
    callback(elemento);
  }
};

empresas.miForEach(function (empresa) {
  //empresa.tel = 11111111;
});

//Custom Filter
empresas.miFilter = function (callback) {
  const array = [];
  for (let i = 0; i < this.length; i++) {
    const elemento = this[i];
    if (callback(elemento)) {
      array.push(elemento);
    }
  }
  return array;
};

const empresasFinanzas = empresas.miFilter(function (empresa) {
  return empresa.category === "Finanzas";
});

//Custom Map
empresas.miMap = function (callback) {
  const array = [];
  for (let i = 0; i < this.length; i++) {
    const elemento = this[i];
    array.push(callback(elemento));
  }
  return array;
};

const telfEmpresas = empresas.miMap(function (empresa) {
  return {
    nombre: empresa.name,
    categoria: empresa.category,
    telf: Math.floor(Math.random() * 10),
  };
});

console.log(empresas);
console.log(telfEmpresas);
console.log(empresasFinanzas);
