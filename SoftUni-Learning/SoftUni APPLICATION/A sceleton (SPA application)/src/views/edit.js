import { html } from "../../node_modules/lit-html/lit-html.js";
import { getDetails, onUpdate } from "../api/data.js";
import { createSubmitHandler } from "../util.js";

const editTemplate = (info, onEdit) => html`
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