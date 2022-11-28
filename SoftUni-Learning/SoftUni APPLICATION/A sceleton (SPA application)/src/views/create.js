import { html } from "../../node_modules/lit-html/lit-html.js";
import { createOffer } from "../api/data.js";
import { createSubmitHandler } from "../util.js";

const createTemplate = (onCreate) => html`
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
    imageUrl: data.imageUrl,
    category: data.category,
    description: data.description,
    requirements: data.requirements,
    salary: data.salary,
  })
  ev.target.reset();
  ctx.page.redirect('/catalog')

}
