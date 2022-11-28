import { render, html } from "../../node_modules/lit-html/lit-html.js";

const root = document.getElementById("main-content");
const navBar = document.getElementById("nav-bar");

function ctxRender(content) {
  render(content, root);
}

export function addRender(ctx, next) {
  render(updateNav(ctx.user), navBar);
  ctx.render = ctxRender;

  next();
}

const updateNav = (user) => html`
  <h1><a href="/">Orphelp</a></h1>

  <nav>
    <a href="/catalog">Dashboard</a>

    <!-- Logged-in users -->

    ${user
      ? html` <div id="user">
          <a href="/myPosts">My Posts</a>
          <a href="/create">Create Post</a>
          <a href="/logout">Logout</a>
        </div>`
      : html`
          <div id="guest">
            <a href="/login">Login</a>
            <a href="/register">Register</a>
          </div>
        `}
    <!-- Guest users -->
  </nav>
`;
