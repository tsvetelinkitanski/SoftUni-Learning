import { html } from "../../node_modules/lit-html/lit-html.js";
import { createOffer } from "../api/data.js";
import { createSubmitHandler } from "../util.js";

const createTemplate = (onCreate) => html`
<section id="create-page" class="create">
  <form @submit = ${onCreate} id="create-form" action="" method="">
    <fieldset>
      <legend>Add new Book</legend>
      <p class="field">
        <label for="title">Title</label>
        <span class="input">
          <input type="text" name="title" id="title" placeholder="Title" .value =>
        </span>
      </p>
      <p class="field">
        <label for="description">Description</label>
        <span class="input">
          <textarea name="description" id="description" placeholder="Description"></textarea>
        </span>
      </p>
      <p class="field">
        <label for="image">Image</label>
        <span class="input">
          <input type="text" name="imageUrl" id="image" placeholder="Image">
        </span>
      </p>
      <p class="field">
        <label for="type">Type</label>
        <span class="input">
          <select id="type" name="type">
            <option value="Fiction">Fiction</option>
            <option value="Romance">Romance</option>
            <option value="Mistery">Mistery</option>
            <option value="Classic">Clasic</option>
            <option value="Other">Other</option>
          </select>
        </span>
      </p>
      <input class="button submit" type="submit" value="Add Book">
    </fieldset>
  </form>
</section>
`;

export function createPage(ctx) {
  ctx.render(createTemplate(createSubmitHandler(ctx, onCreate)))
}

async function onCreate(ctx, data, ev) {
  if (Object.values(data).some((f) => f == "")) {
    return alert("All fields are require!");
  }

  await createOffer({
    title: data.title,
    description: data.description,
    imageUrl: data.imageUrl,
    type: data.type,
    
  })
  ev.target.reset();
  ctx.page.redirect('/catalog')

}
