import { html, render } from "../../node_modules/lit-html/lit-html.js";
import { getAll } from "../api/aboutShoes.js";

const dashboardTemplate = (shoe) => html`<section id="dashboard">
  <h2>Collectibles</h2>
  <ul class="card-wrapper">
    ${shoe.length > 0
  ? shoe.map((s) => catalogCard(s))
  : html`<h2>There are no items added yet.</h2>`}
  </ul>
</section>`;

const catalogCard = (shoe) => html`
  <li class="card">
    <img src=${shoe.imageUrl} alt="eminem" />
    <p><strong>Brand: </strong><span class="brand">${shoe.brand}</span></p>
    <p><strong>Model: </strong><span class="model">${shoe.model}</span></p>
    <p><strong>Value:</strong><span class="value">${shoe.value}</span>$</p>
    <a class="details-btn" href='/details/${shoe._id}'>Details</a>
  </li>
`;

export async function catalogView(ctx) {
  const allShoes = await getAll();
  ctx.render(dashboardTemplate(allShoes));
}
