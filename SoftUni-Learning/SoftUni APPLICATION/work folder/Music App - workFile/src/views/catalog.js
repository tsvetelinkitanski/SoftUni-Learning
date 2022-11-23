import { html } from "../../node_modules/lit-html/lit-html.js";
import { getAll } from "../api/data.js";

const catalogTemplate = (info) => html`
<section id="catalogPage">
    <h1>All Albums</h1>
    ${info.length > 0
      ? info.map((m) => cardBox(m))
      : html`<p>No Albums in Catalog!</p>`}
</section>
`;

const cardBox = (card) => html`
<div class="card-box">
    <img src="${card.imgUrl}" />
    <div>
        <div class="text-center">
            <p class="name">${card.name}</p>
            <p class="artist">${card.artist}</p>
            <p class="genre">${card.genre}</p>
            <p class="price">${card.price}</p>
            <p class="date">${card.date}</p>
        </div>
        <div class="btn-group">
            <a href="/details" id="details">Details</a>
        </div>
    </div>
</div>
`;

export async function catalogPage(ctx) {
    const info = await getAll();
    ctx.render(catalogTemplate(info));
}
 