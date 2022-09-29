function solve() {
  let btn = Array.from(document.getElementsByClassName("answer-text"));
  let sectionElements = document.getElementsByTagName("section");

  let liElementRes = document.getElementsByClassName("results-inner")[0];

  for (let button of btn) {
    button.addEventListener("click", onClick);
  }
  let trueAnswers = 0;
  let falseAnswers = 0;

  function onClick(ev) {
    let parent = ev.target.parentElement.parentElement;
    let currUlElement = parent.parentElement;

    if (ev.target.textContent === "onclick") {
      trueAnswers++;
      currUlElement.className = "none";
      sectionElements[1].className = "block";
    } else if (ev.target.textContent === "onmouseclick") {
      +falseAnswers++;
      currUlElement.className = "none";
      sectionElements[1].className = "block";
    } else if (ev.target.textContent === "JSON.stringify()") {
      trueAnswers++;
      currUlElement.className = "none";
      sectionElements[2].className = "block";
    } else if (ev.target.textContent === "JSON.toString()") {
      falseAnswers++;
      currUlElement.className = "none";
      sectionElements[2].className = "block";
    } else if (
      ev.target.textContent === "A programming API for HTML and XML documents"
    ) {
      trueAnswers++;

      if (trueAnswers > falseAnswers && falseAnswers === 0) {
        currUlElement.className = "none";
        let liParent = liElementRes.parentElement;
        liParent.style.display = "block";
        liElementRes.children[0].textContent =
          "You are recognized as top JavaScript fan!";
      } else if (falseAnswers !== 0) {
        currUlElement.className = "none";
        let liParent = liElementRes.parentElement;
        liParent.style.display = "block";
        liElementRes.children[0].textContent = `You have ${trueAnswers} right answers`;
      }
    } else if (ev.target.textContent === "The DOM is your source HTML") {
      ++falseAnswers;

      if (falseAnswers !== 0) {
        currUlElement.className = "none";
        let liParent = liElementRes.parentElement;
        liParent.style.display = "block";
        liElementRes.children[0].textContent = `You have ${trueAnswers} right answers`;
      }
    }
  }
}
