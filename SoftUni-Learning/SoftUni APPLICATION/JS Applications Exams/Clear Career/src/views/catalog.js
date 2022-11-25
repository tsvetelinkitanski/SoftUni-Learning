import { html } from "../../node_modules/lit-html/lit-html.js";
import { getAll } from "../api/data.js";

const catalogTemplate = (info) => html` 
<section id="dashboard">
  <h2>Job Offers</h2>

  <!-- Display a div with information about every post (if any)-->
  ${info.length > 0 
  ? info.map(x => catalogCard(x))
  :  html`<h2>No offers yet.</h2>`}

  <!-- Display an h2 if there are no posts -->
 
</section>
`;

const catalogCard = (info) => html` 
<div class="offer">
  <img src=${info.imageUrl} alt="./images/example3.png" />
  <p>
    <strong>Title: </strong><span class="title">${info.title}</span>
  </p>
  <p><strong>Salary:</strong><span class="salary">${info.salary}</span></p>
  <a class="details-btn" href="/details/${info._id}">Details</a>
</div>`;

export async function catalogPage(ctx) {
  const info = await getAll()
  ctx.render(catalogTemplate(info))
}