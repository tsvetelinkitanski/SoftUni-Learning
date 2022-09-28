function addItem() {
  let selectElement = document.getElementById("menu");
  let itemText = document.getElementById("newItemText").value;
  let itemValue = document.getElementById("newItemValue").value;

  let newOptionEl = document.createElement("option");

  if (itemText !== "" && itemValue !== "") {
    newOptionEl.textContent = itemText;
    newOptionEl.textContent += itemValue;
    selectElement.appendChild(newOptionEl);
  }

  document.getElementById("newItemText").value = "";
  document.getElementById("newItemValue").value = "";
}
