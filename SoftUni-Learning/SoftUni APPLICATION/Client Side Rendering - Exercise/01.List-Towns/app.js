import { html, render } from "../node_modules/lit-html/lit-html.js";

document.getElementById("btnLoadTowns").addEventListener("click", getTowns);
const root = document.getElementById("root");

const view = (data) => html`
  <ul>
    ${data.map((town) => html`<li>${town}</li>`)}
  </ul>
`;

function getTowns(ev) {
  ev.preventDefault();

  if (document.getElementById("towns").value !== "") {
    const inputField = document.getElementById("towns").value.split(", ");

    render(view(inputField), root);
  }
}
