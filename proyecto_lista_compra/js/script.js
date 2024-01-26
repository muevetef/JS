//Traer las referncias de los elementos del DOM
const itemForm = document.getElementById("item-form");
const itemInput = document.getElementById("item-input");
const itemList = document.getElementById("item-list");
const clearBtn = document.getElementById("clear");
const itemFilter = document.getElementById("filter");
const formBtn = itemForm.querySelector(".btn");
let isEditMode = false;

/**
 * @description Obtiene datos del Storage i refresca la lista
 */
function displayItems() {
  const lista = getItemsFromStorage();
  lista.forEach((item) => {
    const li = createNewItem(item);
    itemList.appendChild(li);
  });
  checkUI();
}

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

  // Miramos si estamos en modo edicion
  if (isEditMode) {
    //Eliminar el elemento seleccionado
    const itemToEdit = document.querySelector(".edit-mode");

    removeItemToLocalStorage(itemToEdit.textContent);
    itemToEdit.remove();
    isEditMode = false;
  } else {
    if (checkIfItemExists(newItem)) {
      alert("El Item ya existe");
      itemInput.value = "";
      return;
    }
  }

  //Sinó, creamos el li y lo añadimos a la lista
  const li = createNewItem(newItem);
  itemList.appendChild(li);

  //Añadimos a localStorage
  addItemToLocalStorage(newItem);

  //Mirar si es el primero
  checkUI();
  //Limpiamos el campo
  itemInput.value = "";
}

/***** Funciones de creacion de elementos en la vista *****/
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
/**** Mirar si eliminar o editar ****/
function onclickItem(evt) {
  if (evt.target.parentElement.classList.contains("remove-item")) {
    removeItem(evt.target.parentElement.parentElement);
  } else {
    setItemToEdit(evt.target);
  }
}

/***** Modo edicion *******/
function setItemToEdit(item) {
  isEditMode = true;

  itemList
    .querySelectorAll("li")
    .forEach((item) => item.classList.remove("edit-mode"));

  item.classList.add("edit-mode");
  formBtn.innerHTML = '<i class="fa-solid fa-pen"></i> Actualizar Item';
  formBtn.style.backgroundColor = "#228b22";
  itemInput.value = item.textContent;
}
/***** Funciones de eliminar elementos ******/
function clearAll() {
  while (itemList.firstChild) {
    itemList.removeChild(itemList.firstChild);
  }
  //Limpiar lista de LocalStorage
  localStorage.removeItem("lista");
  checkUI();
}

function removeItem(item) {
  if (confirm("Quieres eliminar el Item?")) {
    item.remove();
    removeItemToLocalStorage(item.textContent);
    checkUI();
  }
}
/****** LocalStorage ********/
function addItemToLocalStorage(item) {
  //traer los datos del localdtage
  const itemsFromStorage = getItemsFromStorage();
  //añadir el elemento al array
  itemsFromStorage.push(item);
  //Pasarlo a texto y guardar
  localStorage.setItem("lista", JSON.stringify(itemsFromStorage));
}

function getItemsFromStorage() {
  let itemsFromStorage;
  if (localStorage.getItem("lista") === null) {
    itemsFromStorage = [];
  } else {
    itemsFromStorage = JSON.parse(localStorage.getItem("lista"));
  }

  return itemsFromStorage;
}

function removeItemToLocalStorage(item) {
  //traer los datos del localdtage
  let itemsFromStorage = getItemsFromStorage();
  //eliminar el elemento al array
  itemsFromStorage = itemsFromStorage.filter((i) => i !== item);
  //Pasarlo a texto y guardar
  localStorage.setItem("lista", JSON.stringify(itemsFromStorage));
}
/**
 * @description mira si el elemento existe en local
 */
function checkIfItemExists(item) {
  //Obtener los elementos guardados
  const items = getItemsFromStorage();
  //Mirar si existe
  return items.includes(item);
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

/****** function para mirar si hay elementos en la lista *****/
function checkUI() {
  const items = itemList.querySelectorAll("li");
  if (items.length === 0) {
    clearBtn.style.display = "none";
    itemFilter.style.display = "none";
  } else {
    clearBtn.style.display = "flex";
    itemFilter.style.display = "flex";
  }

  formBtn.innerHTML = '<i class="fa-solid fa-plus"></i> Añadir Item';
  formBtn.style.backgroundColor = "#333";

  isEditMode = false;
}
/*****  Event listeners  *****/
/**
 * Al generarse el evento submit, añadimos un item
 */

itemForm.addEventListener("submit", addItem);
clearBtn.addEventListener("click", clearAll);
itemList.addEventListener("click", onclickItem);
itemFilter.addEventListener("input", filterItems);
document.addEventListener("DOMContentLoaded", displayItems);

//TODO que en modo edicion no se pueda eliminar ningun Item
