import { html } from "../../node_modules/lit-html/lit-html.js";
import { getDetails, onUpdate } from "../api/data.js";
import { createSubmitHandler } from "../util.js";

const editTemplate = (info, onEdit) => html`<section id="edit">
  <div class="form">
    <h2>Edit Offer</h2>
    <form @submit=${onEdit}class="edit-form">
      <input type="text" name="title" id="job-title" placeholder="Title" value=${info.title} />
      <input type="text" name="imageUrl" id="job-logo" placeholder="Company logo url" value=${info.imageUrl} />
      <input type="text" name="category" id="job-category" placeholder="Category" value=${info.category} />
      <textarea id="job-description" name="description" placeholder="Description" rows="4" cols="50"
        .value=${info.description}> </textarea>
      <textarea id="job-requirements" name="requirements" placeholder="Requirements" rows="4" cols="50"
        .value=${info.requirements}></textarea>
      <input type="text" name="salary" id="job-salary" placeholder="Salary" value=${info.salary} />

      <button type="submit">post</button>
    </form>
  </div>
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
      imageUrl: data.imageUrl,
      category: data.category,
      description: data.description,
      requirements: data.requirements,
      salary: data.salary,
    });

    ev.target.reset();
    ctx.page.redirect('/details/' + id);
  }
}