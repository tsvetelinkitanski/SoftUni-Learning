function extractText() {
  let itemsElements = document.querySelectorAll("ul li");
  let textAreaElement = document.getElementById("result");

  for (const el of itemsElements) {
    let res = el.textContent;
    textAreaElement.value += res + "\n";
  }
}
