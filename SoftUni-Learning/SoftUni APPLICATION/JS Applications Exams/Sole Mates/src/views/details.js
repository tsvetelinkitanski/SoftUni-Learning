import { html, nothing } from "../../node_modules/lit-html/lit-html.js";
import { deleteShoe, detailsForShoe } from "../api/aboutShoes.js";

const detailsTemplate = (info, hasOwner, onDelete) => html`<!-- Details page -->
  <section id="details">
    <div id="details-wrapper">
      <p id="details-title">Shoe Details</p>
      <div id="img-wrapper">
        <img src="${info.imageUrl}" alt="example1" />
      </div>
      <div id="info-wrapper">
        <p>Brand: <span id="details-brand">${info.brand}</span></p>
        <p>Model: <span id="details-model">${info.model}</span></p>
        <p>Release date: <span id="details-release">${info.release}</span></p>
        <p>Designer: <span id="details-designer">${info.designer}</span></p>
        <p>Value: <span id="details-value">${info.value}</span></p>
      </div>

      ${hasOwner
        ? html`<div id="action-buttons">
            <a href="/edit/${info._id}" id="edit-btn">Edit</a>s
            <a @click=${onDelete} href="" id="delete-btn">Delete</a>
          </div>`
        : nothing}
    </div>
  </section>`;

export async function detailsView(ctx) {
  const id = ctx.params.id;
  const info = await detailsForShoe(id);
  ctx.render(detailsTemplate(info));
  
  if (ctx.user) {
    const userId = ctx.user._id;
    const ownerId = info._ownerId;

    const hasOwner = userId == ownerId;
    ctx.render(detailsTemplate(info, hasOwner, onDelete));
  }
  async function onDelete() {
    const choice = confirm("Are you sure you want to delete this shoes?");
    if (choice) {
      await deleteShoe(id);
      ctx.page.redirect("/catalog");
    }
  }
}
