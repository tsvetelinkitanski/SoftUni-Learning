function addItem() {
  let ulElements = document.getElementById("items");
  let input = document.getElementById("newItemText");
  let newLiElement = document.createElement("li");
  
  newLiElement.textContent = input.value;
  ulElements.appendChild(newLiElement);
  input.value = "";
}
