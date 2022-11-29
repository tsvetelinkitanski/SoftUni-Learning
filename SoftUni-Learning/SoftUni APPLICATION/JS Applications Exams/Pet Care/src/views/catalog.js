import { html } from "../../node_modules/lit-html/lit-html.js";
import { getAll } from "../api/data.js";

const catalogTemplate = (info) => html`
  <section id="dashboard">
    <h2 class="dashboard-title">Services for every animal</h2>
    <div class="animals-dashboard">
      ${info.length > 0
        ? info.map((x) => catalogCard(x))
        : html`<div>
            <p class="no-pets">No pets in dashboard</p>
              </div>`}
    </div>
  </section>
`;

const catalogCard = (info) => html`
<div class="animals-board">
<article class="service-img">
    <img class="animal-image-cover" src="${info.image}">
</article>
<h2 class="name">${info.name}</h2>
<h3 class="breed">${info.breed}</h3>
<div class="action">
    <a class="btn" href="/details/${info._id}">Details</a>
</div>
</div>
`;

export async function catalogPage(ctx) {
  const info = await getAll();
  ctx.render(catalogTemplate(info));
}
