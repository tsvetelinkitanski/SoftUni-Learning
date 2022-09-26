function addItem() {
  let ulElements = document.getElementById("items");
  let input = document.getElementById("newItemText");
  let newLiElement = document.createElement("li");
  
  newLiElement.textContent = input.value;
  
  ulElements.appendChild(newLiElement);
  
  let aTag = document.createElement("a");
  aTag.textContent = "[Delete]";
  aTag.href = "#";
  newLiElement.appendChild(aTag);

  aTag.addEventListener('click', onClick)

  input.value = "";
  
  function onClick (event) {
     event.target.parentElement.remove()
  }
}
