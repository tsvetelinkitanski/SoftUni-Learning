window.addEventListener("load", solve);

function solve() {
  const inputs = {
    genre: document.getElementById("genre"),
    name: document.getElementById("name"),
    author: document.getElementById("author"),
    date: document.getElementById("date"),
  };

  const submitBtn = document.getElementById("add-btn");
  submitBtn.addEventListener("click", onSubmit);

  function onSubmit(ev) {
    ev.preventDefault();

    if (
      inputs.genre.value === "" ||
      inputs.name.value === "" ||
      inputs.author.value == "" ||
      inputs.date.value == ""
    ) {
      return;
    }

    let genreValue = inputs.genre.value;
    let nameValue = inputs.name.value;
    let authorValue = inputs.author.value;
    let dateValue = inputs.date.value;

    const container = document.getElementsByClassName("all-hits-container")[0];

    let divElement = document.createElement("div");
    divElement.className = "hits-info";

    divElement.innerHTML = `<img src='./static/img/img.png'>
                                  <h2> Genre: ${genreValue}</h2>
                                  <h2> Name: ${nameValue}</h2>
                                  <h2> Author: ${authorValue}</h2>
                                  <h3> Date: ${dateValue}</h3>
                                  <button class= 'save-btn'> Save song</button>
                                  <button class= 'like-btn'> Like song</button>
                                  <button class= 'delete-btn'> Delete</button>`;

    container.appendChild(divElement);

    inputs.genre.value = "";
    inputs.name.value = "";
    inputs.author.value = "";
    inputs.date.value = "";

    let likeBtn = Array.from(divElement.querySelectorAll(".like-btn")).forEach(
      (b) => b.addEventListener("click", onLike)
    );
    let saveBtn = Array.from(divElement.querySelectorAll(".save-btn")).forEach(
      (b) => b.addEventListener("click", onSave)
    );

    let deleteBtn = Array.from(
      divElement.querySelectorAll(".delete-btn")
    ).forEach((b) => b.addEventListener("click", onDelete));

    function onSave(ev) {
      let saveContainer = document.getElementsByClassName("saved-container")[0];

      let savebtn = divElement.querySelector(".save-btn");
      let likebtn = divElement.querySelector(".like-btn");
      savebtn.remove();
      likebtn.remove();

      saveContainer.appendChild(divElement);
    }
    function onDelete(ev) {
      //   ev.target.parentElement.remove();
      divElement.remove();
    }
  }
  function onLike(ev) {
    ev.target.disabled = true;
    let likeCounter = document.querySelector(".likes p");

    let splittedEl = likeCounter.textContent.split(": ");
    let numberLikeCnt = Number(splittedEl[1]);
    numberLikeCnt++;
    let textInfo = splittedEl[0];
    likeCounter.textContent = textInfo + ": " + numberLikeCnt;
  }
}
