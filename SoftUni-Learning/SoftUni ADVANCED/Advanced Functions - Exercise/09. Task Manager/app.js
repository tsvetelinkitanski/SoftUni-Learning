function solve() {
  let taskField = document.getElementById("task");
  let txtAreaField = document.getElementById("description");
  let dateField = document.getElementById("date");
  let btnForAdd = document.getElementById("add");

  btnForAdd.addEventListener("click", add);

  function add(ev) {
    ev.preventDefault();

    if (
      taskField.value !== "" &&
      txtAreaField.value !== "" &&
      dateField.value !== ""
    ) {
      let section = document.getElementsByTagName("section")[1];
      let div = section.children[1];

      let articleElement = document.createElement("article");
      let h3Element = document.createElement("h3");
      h3Element.textContent = taskField.value;

      let pElement1 = document.createElement("p");
      pElement1.textContent = "Description: " + txtAreaField.value;

      let pElement2 = document.createElement("p");
      pElement2.textContent = "Due Date: " + dateField.value;

      let divElement = document.createElement("div");
      divElement.className = "flex";
      let btnElement1 = document.createElement("button");
      btnElement1.className = "green";
      btnElement1.textContent = "Start";
      let btnElement2 = document.createElement("button");
      btnElement2.className = "red";
      btnElement2.textContent = "Delete";

      btnElement1.addEventListener("click", addInProgress);
      btnElement2.addEventListener("click", removeElement);

      divElement.appendChild(btnElement1);
      divElement.appendChild(btnElement2);
      articleElement.appendChild(h3Element);
      articleElement.appendChild(pElement1);
      articleElement.appendChild(pElement2);
      articleElement.appendChild(divElement);

      div.appendChild(articleElement);
    }
  }

  function removeElement(ev) {
    let article = ev.target.parentElement.parentElement;
    document
      .getElementsByTagName("section")[1]
      .children[1].removeChild(article);
  }

  function addInProgress(ev) {
    ev.preventDefault();
    let section = document.getElementsByTagName("section")[2];
    let div = section.children[1];

    let articleElement = document.createElement("article");
    let h3Element = document.createElement("h3");
    h3Element.textContent = taskField.value;

    let pElement1 = document.createElement("p");
    pElement1.textContent = "Description: " + txtAreaField.value;

    let pElement2 = document.createElement("p");
    pElement2.textContent = "Due Date: " + dateField.value;

    let divElement = document.createElement("div");
    divElement.className = "flex";
    let btnElement1 = document.createElement("button");
    btnElement1.className = "red";
    btnElement1.textContent = "Delete";
    let btnElement2 = document.createElement("button");
    btnElement2.className = "orange";
    btnElement2.textContent = "Finish";

    btnElement1.addEventListener("click", deleteFromInProcess);
    btnElement2.addEventListener("click", finishTheTask);

    divElement.appendChild(btnElement1);
    divElement.appendChild(btnElement2);
    articleElement.appendChild(h3Element);
    articleElement.appendChild(pElement1);
    articleElement.appendChild(pElement2);
    articleElement.appendChild(divElement);

    div.appendChild(articleElement);

    let article = ev.target.parentElement.parentElement;
    document
      .getElementsByTagName("section")[1]
      .children[1].removeChild(article);
  }

  function deleteFromInProcess(ev) {
    let artc = ev.target.parentElement.parentElement;
    document.getElementsByTagName("section")[2].children[1].removeChild(artc);
  }

  function finishTheTask(ev) {
    let section = document.getElementsByTagName("section")[3];
    let div = section.children[1];

    let articleElement = document.createElement("article");
    let h3Element = document.createElement("h3");
    h3Element.textContent = taskField.value;

    let pElement1 = document.createElement("p");
    pElement1.textContent = "Description: " + txtAreaField.value;

    let pElement2 = document.createElement("p");
    pElement2.textContent = "Due Date: " + dateField.value;

    articleElement.appendChild(h3Element);
    articleElement.appendChild(pElement1);
    articleElement.appendChild(pElement2);

    div.appendChild(articleElement);

    let artc = ev.target.parentElement.parentElement;
    document.getElementsByTagName("section")[2].children[1].removeChild(artc);
  }
}
