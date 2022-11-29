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
  <nav>
    <section class="logo">
      <img src="./images/logo.png" alt="logo">
    </section>
    <ul>
      <!--Users and Guest-->
      <li><a href="/">Home</a></li>
      <li><a href="/catalog">Dashboard</a></li>
      ${!user 
      ? html `<!--Only Guest-->
      <li><a href="/login">Login</a></li>
      <li><a href="/register">Register</a></li>`
      : html`<!--Only Users-->
      <li><a href="/create">Create Postcard</a></li>
      <li><a href="/logout">Logout</a></li>`}
    </ul>
  </nav>
  `;
