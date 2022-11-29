import { html } from "../../node_modules/lit-html/lit-html.js";
import { getDetails, onUpdate } from "../api/data.js";
import { createSubmitHandler } from "../util.js";

const editTemplate = (info, onEdit) => html`
<section id="editPage">
  <form @submit=${onEdit} class="editForm">
    <img src="${info.image}">
    <div>
      <h2>Edit PetPal</h2>
      <div class="name">
        <label for="name">Name:</label>
        <input name="name" id="name" type="text" value=${info.name}>
      </div>
      <div class="breed">
        <label for="breed">Breed:</label>
        <input name="breed" id="breed" type="text" value=${info.breed}>
      </div>
      <div class="Age">
        <label for="age">Age:</label>
        <input name="age" id="age" type="text" value=${info.age}>
      </div>
      <div class="weight">
        <label for="weight">Weight:</label>
        <input name="weight" id="weight" type="text" value=${info.weight}>
      </div>
      <div class="image">
        <label for="image">Image:</label>
        <input name="image" id="image" type="text" value=${info.image}>
      </div>
      <button class="btn" type="submit">Edit Pet</button>
    </div>
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
      name: data.name,
      breed: data.breed,
      age: data.age,
      weight: data.weight,
      image: data.image,
     
    });

    ev.target.reset();
    ctx.page.redirect('/details/' + id);
  }
}