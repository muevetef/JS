const num1 = 20;
const num2 = "20";
const num3 = 30;

console.log(num1 > num3);
console.log(num1 < num3);

console.log(num1 >= num3);
console.log(num1 <= num3);

//un = asigna, no compara!,
// siempre se evalua a verdadero
// console.log((num1 = num2));

console.log(num1 == num2);
console.log(num1 == num3);

//igualdad estricta
// (revisa el tipo de dato y el valor)
console.log(num1 === num2);
console.log(num1 === Number.parseInt(num2));

//Desigualdad
console.log(num1 != num2);
console.log(num1 != num3);
//Desigualdad estricta
console.log(num1 !== num2);

//Null y undefined

let numero;
console.log(numero);
console.log(typeof numero);

let numero2 = null;
console.log(numero2);
console.log(typeof numero2);

console.log(numero == numero2);
console.log(numero === numero2);

//https://es.javascript.info/comparison

//&& || !
let test = true && true;
test = false && true; //si el primero es falso el segundo no se evalua

test = true || true; //true
test = true || false; //true
test = false || true; //true
test = false || false; //false

test = !test; //invierte el valor
