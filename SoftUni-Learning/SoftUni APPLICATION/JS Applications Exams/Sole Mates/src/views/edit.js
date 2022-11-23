import { html } from "../../node_modules/lit-html/lit-html.js";
import { detailsForShoe, update } from "../api/aboutShoes.js";
import { createSubmitHandler } from "../util.js";

const editTemplate = (
  shoe,
  onEdit
) => html`
<section id="edit">
  <div class="form">
    <h2>Edit item</h2>
    <form @submit="${onEdit}class"="edit-form">
      <input type="text" name="brand" id="shoe-brand" placeholder="Brand" .value=${shoe.brand} />
      <input type="text" name="model" id="shoe-model" placeholder="Model" .value=${shoe.model} />
      <input type="text" name="imageUrl" id="shoe-img" placeholder="Image url" .value=${shoe.imageUrl} />
      <input type="text" name="release" id="shoe-release" placeholder="Release date" .value=${shoe.release} />
      <input type="text" name="designer" id="shoe-designer" placeholder="Designer" .value=${shoe.designer} />
      <input type="text" name="value" id="shoe-value" placeholder="Value" .value=${shoe.value} />

      <button type="submit">post</button>
    </form>
  </div>
</section>`;

export async function editView(ctx) {
  const id = ctx.params.id;
  const shoe = await detailsForShoe(id);
  ctx.render(editTemplate(shoe, createSubmitHandler(ctx, onEdit)));

}
async function onEdit(ctx, data, ev) {
  const id = ctx.params.id

  if (Object.values(data).some((f) => f == "")) {
    return alert("All fields are required!");
  }

  await update(id, {
    brand: data.brand,
    model: data.model,
    imageUrl: data.imageUrl,
    release: data.release,
    designer: data.designer,
    value: data.value,
  });
  ev.target.reset();
  ctx.page.redirect(`/details/${id}`);
}

