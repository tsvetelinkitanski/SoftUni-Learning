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

const updateNav = (user) =>
  html` <a id="logo" href="/"
  ><img id="logo-img" src="./images/logo.jpg" alt=""
/></a>

<nav>
  <div>
    <a href="/catalog">Dashboard</a>
  </div>
${ user ? html` 
  <div class="user">
    <a href="/create">Create Offer</a>
    <a href="/logout">Logout</a>
  </div>` 
  : html` 
  <div class="guest">
    <a href="/login">Login</a>
    <a href="/register">Register</a>
  </div>` }
 

 
</nav>`;
