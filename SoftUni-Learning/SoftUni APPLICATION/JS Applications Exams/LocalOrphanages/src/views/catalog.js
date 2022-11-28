import { html } from "../../node_modules/lit-html/lit-html.js";
import { getAll } from "../api/data.js";

const catalogTemplate = (info) => html`
  <section id="dashboard-page">
    <h1 class="title">All Posts</h1>
    <div class="all-posts">
      ${info.length > 0
    ? info.map((x) => catalogCard(x))
    : html`<h1 class="title no-posts-title">No posts yet!</h1>`}
    </div>
  </section>
`;

const catalogCard = (info) => html`<div class="post">
  <h2 class="post-title">${info.title}</h2>
  <img class="post-image" src="${info.imageUrl}" alt="Kids clothes" />
  <div class="btn-wrapper">
    <a href="/details/${info._id}" class="details-btn btn">Details</a>
  </div>
`;

export async function catalogPage(ctx) {
  const info = await getAll();
  ctx.render(catalogTemplate(info));
}
