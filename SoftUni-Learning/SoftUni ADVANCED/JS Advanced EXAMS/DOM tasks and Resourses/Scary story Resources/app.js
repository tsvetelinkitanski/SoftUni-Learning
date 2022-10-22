window.addEventListener("load", solve);

function solve() {
  const publishBtn = document.getElementById("form-btn");
  const inputs = {
    fName: document.getElementById("first-name"),
    lName: document.getElementById("last-name"),
    age: document.getElementById("age"),
    storyTitle: document.getElementById("story-title"),
    genre: document.getElementById("genre"),
    yourStory: document.getElementById("story"),
  };

  publishBtn.addEventListener("click", onPublish);

  function onPublish(ev) {
    ev.preventDefault();
    let fNameValue = inputs.fName.value;
    let lNameValue = inputs.lName.value;
    let ageValue = inputs.age.value;
    let storyTitleValue = inputs.storyTitle.value;
    let genreValue = inputs.genre.value;
    let yourStoryValue = inputs.yourStory.value;

    if (
      fNameValue == "" ||
      lNameValue == "" ||
      ageValue == "" ||
      storyTitleValue == "" ||
      genreValue == "" ||
      yourStoryValue == ""
    ) {
      return;
    }

    const container = document.getElementById("preview-list");

    const liElement = document.createElement("li");
    liElement.className = "story-info";

    liElement.innerHTML = `<article>
                           <h4>Name: ${fNameValue} ${lNameValue}</h4>
                           <p>Age: ${ageValue}</p>
                           <p>Title: ${storyTitleValue}</p>
                           <p>Genre: ${genreValue}</p>
                           <p>${yourStoryValue}</p>
                           </article>
                           <button class= 'save-btn'> Save Story</button>
                           <button class= 'edit-btn'> Edit Story</button>
                           <button class= 'delete-btn'> Delete Story</button>
                           `;

    let editBtn = Array.from(liElement.querySelectorAll(".edit-btn")).forEach(
      (b) => b.addEventListener("click", onEdit)
    );
    let saveBtn = Array.from(liElement.querySelectorAll(".save-btn")).forEach(
      (b) => b.addEventListener("click", onSave)
    );
    let deleteBtn = Array.from(
      liElement.querySelectorAll(".delete-btn")
    ).forEach((b) => b.addEventListener("click", onDelete));

    container.appendChild(liElement);
    inputs.fName.value = "";
    inputs.lName.value = "";
    inputs.age.value = "";
    inputs.storyTitle.value = "";
    inputs.genre.value = "";
    inputs.yourStory.value = "";

    publishBtn.disabled = true;

    function onEdit(ev) {
      inputs.fName.value = fNameValue;
      inputs.lName.value = lNameValue;
      inputs.age.value = ageValue;
      inputs.storyTitle.value = storyTitleValue;
      inputs.genre.value = genreValue;
      inputs.yourStory.value = yourStoryValue;
      liElement.remove();

      publishBtn.disabled = false;
    }
    function onSave(ev) {
      const body = document.getElementById("main");
      let children = Array.from(body.children).forEach((ch) => ch.remove());

      let h1Element = document.createElement("h1");
      h1Element.textContent = "Your scary story is saved!";
      body.appendChild(h1Element);
      publishBtn.disabled = false;
    }
    function onDelete(ev) {
      liElement.remove();
      publishBtn.disabled = false;
    }
  }
}
