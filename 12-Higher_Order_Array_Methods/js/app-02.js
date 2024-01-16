//Reduce
const numbers = [1, 2, 3, 4, -5, -6, 7, -8, 9, 10];

const sumatorio = () => {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
};

sumatorio();

const suma = numbers.reduce((acumulador, valor) => {
  return acumulador + valor;
}, 0);

const cart = [
  { id: 1, name: "producto 1", price: 200 },
  { id: 2, name: "producto 2", price: 300 },
  { id: 3, name: "producto 3", price: 240 },
];

let total = 0;
for (let i = 0; i < cart.length; i++) {
  total += cart[i].price;
}

cart.forEach((item) => (total += item.price));

total = cart.reduce((acc, product) => {
  return acc + product.price;
}, 0);

//Some y every
const arr1 = [1, 2, 3, 4, 8];
const arr2 = [1, 2, 3, 4, 5];

const test1 = arr1.some((item) => {
  return item > 5;
});
const test2 = arr2.some((item) => {
  return item > 5;
});
console.log(test1); //true
console.log(test2); //false

//every si se cumple para todos

//flat
const arr3 = [
  [1, 2, 3, 4, 5],
  [44, 33, 4],
  [6, 7, 8, 9, 0],
];

const sumTotal = arr3.flat().reduce((acc, curr) => acc + curr);
console.log(sumTotal);
//flatMap
// sumTotal.flatMap();

const p = cart.find((item) => item.name === "producto 1");

//sort
//Ordenar el array de mayor precio a menor precio
const masCaroPrimero = cart.toSorted((a, b) => b.price - a.price);
