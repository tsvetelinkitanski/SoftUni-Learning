import { html, render } from "../node_modules/lit-html/lit-html.js";
import { towns } from "./towns.js";
const root = document.getElementById("towns");

update();

function searchTemplate(townsName, match) {
  const ul = html`
    <ul>
      ${townsName.map((town) => createTemplate(town, match))};
    </ul>
  `;
  return ul;
}

function createTemplate(town, match) {
  return html`
    <li class="${town.toLowerCase().includes(match) ? "active" : ""}">
      ${town}
    </li>
  `;
}

function update(text) {
  const ul = searchTemplate(towns, text);
  render(ul, root);
}

document.getElementsByTagName("button")[0].addEventListener("click", search);
const res = document.getElementById("result");

function search() {
  if (document.getElementById("searchText").value == "") {
    return;
  }
  let input = document.getElementById("searchText");
  const inputValue = input.value.toLowerCase();

  update(inputValue);
  countMAtches();
  input.value = "";
}

function countMAtches() {
  const count = document.querySelectorAll(".active").length;
  const countEl = html`<p>${count} matches found</p>`;
  render(countEl, res);
}
