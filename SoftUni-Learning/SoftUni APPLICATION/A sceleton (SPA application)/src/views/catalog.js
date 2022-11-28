import { html } from "../../node_modules/lit-html/lit-html.js";
import { getAll } from "../api/data.js";

const catalogTemplate = (info) => html` 
`;

const catalogCard = (info) => html` `;

export async function catalogPage(ctx) {
  const info = await getAll()
  ctx.render(catalogTemplate(info))
}