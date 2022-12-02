import { render, html } from "../../node_modules/lit-html/lit-html.js";

const root = document.getElementById("site-content");
const navBar = document.getElementById("site-header");

function ctxReder(content) {
  render(content, root);
}

export function addRender(ctx, next) {
  render(updateNav(ctx.user), navBar);
  ctx.render = ctxReder;

  next();
}

const updateNav = (user) => html`
  <!-- Navigation -->
  <nav class="navbar">
    <section class="navbar-dashboard">
      <a href="/catalog">Dashboard</a>
      ${!user 
      ? html`<!-- Guest users -->
      <div id="guest">
        <a class="button" href="/login">Login</a>
        <a class="button" href="/register">Register</a>
      </div>`
      : html `<!-- Logged-in users -->
      <div id="user">
        <span>Welcome, ${user.email}</span>
        <a class="button" href="/myBooks">My Books</a>
        <a class="button" href="/create">Add Book</a>
        <a class="button" href="/logout">Logout</a>
      </div>`}
    </section>
  </nav>
  `;
