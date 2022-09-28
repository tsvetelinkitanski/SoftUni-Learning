function create(words) {
  let container = document.getElementById("content");

  for (let word of words) {
    const p = document.createElement("p");
    p.style.display = "none";
    let divElement = document.createElement("div");

    divElement.appendChild(p);
    container.appendChild(divElement);

    p.textContent = word;

    divElement.addEventListener("click", onShow);
  }

  function onShow(ev) {
    ev.target.children[0].style.display = "block";
  }
}
