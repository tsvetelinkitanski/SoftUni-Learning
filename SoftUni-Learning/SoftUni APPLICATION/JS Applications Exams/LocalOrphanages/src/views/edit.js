import { html } from "../../node_modules/lit-html/lit-html.js";
import { getDetails, onUpdate } from "../api/data.js";
import { createSubmitHandler } from "../util.js";

const editTemplate = (info, onEdit) => html`
<section id="edit-page" class="auth">
  <form @submit=${onEdit} id="edit">
    <h1 class="title">Edit Post</h1>

    <article class="input-group">
      <label for="title">Post Title</label>
      <input type="title" name="title" id="title" value="${info.title}">
    </article>

    <article class="input-group">
      <label for="description">Description of the needs </label>
      <input type="text" name="description" id="description" value="${info.description}">
    </article>

    <article class="input-group">
      <label for="imageUrl"> Needed materials image </label>
      <input type="text" name="imageUrl" id="imageUrl" value="${info.imageUrl}">
    </article>

    <article class="input-group">
      <label for="address">Address of the orphanage</label>
      <input type="text" name="address" id="address" value="${info.address}">
    </article>

    <article class="input-group">
      <label for="phone">Phone number of orphanage employee</label>
      <input type="text" name="phone" id="phone" value="${info.phone}">
    </article>

    <input type="submit" class="btn submit" value="Edit Post">
  </form>
</section>
`;

export async function editPage(ctx) {
  const id = ctx.params.id
  const info = await getDetails(id);
  ctx.render(editTemplate(info, createSubmitHandler(ctx, onEdit)))


  async function onEdit(ctx, data, ev) {
    const id = ctx.params.id;
    if (Object.values(data).some(f => f == '')) {
      return alert('All fields are require!')
    }
    await onUpdate(id, {
      title: data.title,
      description: data.description,
      imageUrl: data.imageUrl,
      address: data.address,
      phone: data.phone,
    });

    ev.target.reset();
    ctx.page.redirect('/details/' + id);
  }
}