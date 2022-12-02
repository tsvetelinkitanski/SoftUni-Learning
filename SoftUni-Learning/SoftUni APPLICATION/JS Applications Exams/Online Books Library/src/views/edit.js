import { html } from "../../node_modules/lit-html/lit-html.js";
import { getDetails, onUpdate } from "../api/data.js";
import { createSubmitHandler } from "../util.js";

const editTemplate = (info, onEdit) => html`
<section id="edit-page" class="edit">
  <form @submit = ${onEdit} id="edit-form" action="#" method="">
    <fieldset>
      <legend>Edit my Book</legend>
      <p class="field">
        <label for="title">Title</label>
        <span class="input">
          <input type="text" name="title" id="title" value=${info.title}>
        </span>
      </p>
      <p class="field">
        <label for="description">Description</label>
        <span class="input">
          <textarea name="description"
            id="description" .value= ${info.description}> </textarea>
        </span>
      </p>
      <p class="field">
        <label for="image">Image</label>
        <span class="input">
          <input type="text" name="imageUrl" id="image" value=${info.imageUrl}>
        </span>
      </p>
      <p class="field">
        <label for="type">Type</label>
        <span class="input">
          <select id="type" name="type">
            <option value="Fiction" selected>${info.type}</option>
            <option value="Romance">Romance</option>
            <option value="Mistery">Mistery</option>
            <option value="Classic">Clasic</option>
            <option value="Other">Other</option>
          </select>
        </span>
      </p>
      <input class="button submit" type="submit" value="Save">
    </fieldset>
  </form>
</section>
`;

export async function editPage(ctx) {
  const id = ctx.params.id
  const info = await getDetails(id)
  console.log(info);
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
      type: data.type,
      
    });

    ev.target.reset();
    ctx.page.redirect('/details/' + id);
  }
}