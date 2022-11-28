import { render, html } from "../../node_modules/lit-html/lit-html.js";

const root = document.getElementById("main-content");
const navBar = document.getElementById("nav-bar");

function ctxReder(content) {
  render(content, root);
}

export function addRender(ctx, next) {
  render(updateNav(ctx.user), navBar);
  ctx.render = ctxReder;

  next();
}

const updateNav = (user) => html`
  
  `;
