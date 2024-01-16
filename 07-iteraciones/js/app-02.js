let num = prompt("Escribe un número: ");
while (num != 0) {
  num = prompt("Escribe un número: ");
}
alert("El número es 0");

//El código se ejecuta almenos una vez y luego se evalua la condición
do {
  num = prompt("Escribe un número: ");
} while (num != 0);
