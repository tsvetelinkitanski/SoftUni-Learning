import { html, render } from "../../node_modules/lit-html/lit-html.js";

const root = document.getElementById("main-header");
const navBar = document.getElementById('nav-bar')

function addRender(content) {

  render(content, root);
}

export function readyForRender(ctx, next) {
  render(navigationTemplate(ctx.user), navBar)
  ctx.render = addRender;

  next();
}

const navigationTemplate = (user) => html`
<a id="logo" href="/"><img id="logo-img" src="./images/logo.png" alt="" /></a>
<nav>
  <div>
    <a href="/catalog">Dashboard</a>
    <a href="/search">Search</a>
  </div>
  ${user
  ? html`
  <!-- Logged-in users -->
  <div class="user">
    <a href="/create">Add Pair</a>
    <a href="/logout">Logout</a>
  </div>`
  : html`
  <!-- Guest users -->
  <div class="guest">
    <a href="/login">Login</a>
    <a href="/register">Register</a>
  </div>`
}
</nav>
`;