import { render, html } from "../../node_modules/lit-html/lit-html.js";

const root = document.getElementById("main-content");

function ctxReder(content) {
  render(content, root);
}

export function addRender(ctx, next) {
  ctx.render = ctxReder;

  next();
}
