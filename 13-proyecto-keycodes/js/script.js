/**
 * @param {KeyboardEvent} e
 */
function getKeyCodeBackticks(e) {
  const insertDiv = document.querySelector("#insert");

  insertDiv.innerHTML = `<div class="key">
                            ${e.key === " " ? "Espacio" : e.key}
                            <small>e.key</small>
                        </div>
                        <div class="key">
                            ${e.keyCode} 
                            <small>e.keyCode</small>
                        </div>
                        <div class="key">
                            ${e.code} 
                            <small>e.code</small>
                        </div>`;
}

function getKeyCodeCreateNodes(e) {
  const insertDiv = document.querySelector("#insert");
  insertDiv.innerHTML = "";

  const keyCodes = {
    "e.key": e.key === " " ? "Espacio" : e.key,
    "e.keyCode": e.keyCode,
    "e.code": e.code,
  };

  for (let key in keyCodes) {
    const div = document.createElement("div");
    div.classList.add("key");
    const small = document.createElement("small");

    const keyText = document.createTextNode(key);
    const valueText = document.createTextNode(keyCodes[key]);

    small.appendChild(keyText);
    div.appendChild(valueText);
    div.appendChild(small);

    insertDiv.appendChild(div);
  }
}
window.addEventListener("keydown", getKeyCodeCreateNodes);
