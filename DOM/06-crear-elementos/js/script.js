// Rapida y no demasiado limpia
function createListItem(textItem) {
  const li = document.createElement("li");
  li.innerHTML = `${textItem}
          <button class="remove-item btn-link text-red">
            <i class="fa-solid fa-xmark"></i>
          </button>`;
  document.querySelector("#item-list").appendChild(li);
}

// createListItem("Patatas");
//Limpia y mejor rendimiento
function createNewItem(textItem) {
  const li = document.createElement("li");
  const text = document.createTextNode(textItem);
  li.appendChild(text);

  const button = createButton("remove-item btn-link text-red");
  li.appendChild(button);
  return li;
  //document.querySelector("#item-list").appendChild(li);
}

function createButton(clases) {
  const button = document.createElement("button");
  button.className = clases;

  const icon = createIcon("fa-solid fa-xmark");
  button.appendChild(icon);
  return button;
}

function createIcon(clases) {
  const icon = document.createElement("i");
  icon.className = clases;
  return icon;
}

console.time("a");
createListItem("patatas");
console.timeEnd("a");
console.time("b");
createNewItem("patatas");
console.timeEnd("b");
// document.querySelector("#clear").addEventListener("click", () => {
//   const ul = document.querySelector("#item-list");
//   const textItem = document.querySelector("#item-input").value;
//   ul.appendChild(createNewItem(textItem));
// });

// insertAdjacentElement
function insertAdjacentElement() {
  const filter = document.querySelector(".filter");
  const h1 = document.createElement("h1");
  h1.textContent = "insertAdjacentElement";

  filter.insertAdjacentElement("beforebegin", h1);
}
//insertAdacentText

//insertAdjacentHTML

//insertBefore
function insertBeforeItem() {
  const ul = document.querySelector("ul");

  const li = createNewItem("Before");
  const tercerItem = document.querySelector("li:nth-child(3)");

  ul.insertBefore(li, tercerItem);
}

//Crear un funcion custom insertAfterItem()
/**@argument existentEl*/
function insertAfter(newEl, existentEl) {
  existentEl.parentElement.insertBefore(newEl, existentEl.nextSibling);
}

//reemplazar elementos
function replaceFirstItem() {
  const firstItem = document.querySelector("li:first-child");
  const li = createNewItem("Papel de water");

  firstItem.replaceWith(li);
}

//Replace child
function replaceChildHeading() {
  const header = document.querySelector("header");
  const h1 = document.querySelector("header h1");

  const h2 = document.createElement("h2");
  h2.id = "app-title";
  h2.textContent = "Lista de la compra";

  header.replaceChild(h2, h1);
}

//Eliminar
function removeClearButton() {
  const clearBtn = document.querySelector("#clear");
  clearBtn.remove();
}

function removeFirstChild() {
  const ul = document.querySelector("ul");
  const li = document.querySelector("li:first-child");

  ul.removeChild(li);
}

function removeChild(itemNum) {
  // const ul = document.querySelector("ul");
  // // const li = document.querySelector(`li:nth-child(${itemNum})`);
  // const li = document.querySelectorAll("li")[itemNum - 1];
  // ul.removeChild(li);

  //otra forma
  const li = document.querySelectorAll("li");
  li[itemNum - 1].remove();
}

//Dos formas de eliminar todos los items
function removeAll1() {
  const ul = document.querySelector("ul");
  ul.textContent = "";
}

function removeAll2() {
  const list = document.querySelectorAll("li");
  list.forEach((li) => li.remove());
}

function removeAll3() {
  const list = document.querySelector("ul");
  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }
}
