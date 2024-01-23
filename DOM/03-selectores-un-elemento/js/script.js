//Selectores multiples
const lista = document.getElementsByClassName("item");
console.log(lista[0].innerText);
//HTMLcollection no tengo foreach
const listArray = Array.from(lista);
console.dir(listArray);

const lista2 = document.getElementsByTagName("li");
console.log(lista2);

//Query selector
const list3 = document.querySelectorAll(".item");
for (const entry of list3.entries()) {
  console.log(entry);
}

for (const entry of list3.values()) {
  console.log(entry);
}
for (const entry of list3.keys()) {
  console.log(entry);
}

list3.forEach((item, index) => {
  item.style.color = "red";
  if (index === 0) {
    item.remove();
  }
});
