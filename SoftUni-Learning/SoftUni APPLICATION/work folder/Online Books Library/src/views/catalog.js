import { html } from "../../node_modules/lit-html/lit-html.js";
import { getAll } from "../api/data.js";

const catalogTemplate = (info) => html` 
<section id="dashboard-page" class="dashboard">
  <h1>Dashboard</h1>
  <!-- Display ul: with list-items for All books (If any) -->
  <ul class="other-books-list">
${info.length > 0 
? info.map (x=> catalogCard(x))
: html `<!-- Display paragraph: If there are no books in the database -->
  <p class="no-books">No books in database!</p>`}
  </ul>

</section>
`;

const catalogCard = (info) => html`
<li class="otherBooks">
  <h3>${info.title}</h3>
  <p>Type: ${info.type}</p>
  <p class="img"><img src="${info.imageUrl}"></p>
  <a class="button" href="/details/${info._id}">Details</a>
</li>`;

export async function catalogPage(ctx) {
  const info = await getAll()
  ctx.render(catalogTemplate(info))
}