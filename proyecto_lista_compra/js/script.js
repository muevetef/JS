//Traer las referncias de los elementos del DOM
const itemForm = document.getElementById("item-form");
const itemInput = document.getElementById("item-input");
const itemList = document.getElementById("item-list");
const clearBtn = document.getElementById("clear");
const itemFilter = document.getElementById("filter");

/**
 *
 * @param {SubmitEvent} evt
 */
function addItem(evt) {
  evt.preventDefault();

  //Validar que el input no esté vacio
  const newItem = itemInput.value.trim();
  //Si el campo está vacio avisamos y salimos de la funcion
  if (newItem === "") {
    alert("Por favor añado un texto");
    return;
  }

  //Sinó, creamos el li y lo añadimos a la lista
  const li = createNewItem(newItem);
  itemList.appendChild(li);
  //Limpiamos el campo
  itemInput.value = "";
}

/***** Funciones de creacion de elementos *****/
function createNewItem(textItem) {
  const li = document.createElement("li");
  const text = document.createTextNode(textItem);
  li.appendChild(text);

  const button = createButton("remove-item btn-link text-red");
  li.appendChild(button);
  return li;
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

/***** Funciones de eliminar elementos ******/
function clearAll() {
  while (itemList.firstChild) {
    itemList.removeChild(itemList.firstChild);
  }
}

function removeItem(evt) {
  if (evt.target.parentElement.classList.contains("remove-item")) {
    evt.target.parentElement.parentElement.remove();
  }
}
/*******funcion de filtro *****/
function filterItems(evt) {
  // const items = itemList.children;
  const items = itemList.querySelectorAll("li");
  //const text = itemFilter.value;
  const text = evt.target.value.toLowerCase();

  items.forEach((item) => {
    const itemText = item.innerText.toLocaleLowerCase();
    if (itemText.indexOf(text) != -1) {
      item.style.display = "flex";
    } else {
      item.style.display = "none";
    }
  });
}
/*****  Event listeners  *****/
/**
 * Al generarse el evento submit, añadimos un item
 */
itemForm.addEventListener("submit", addItem);
clearBtn.addEventListener("click", clearAll);
itemList.addEventListener("click", removeItem);
itemFilter.addEventListener("input", filterItems);
