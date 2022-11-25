import { html } from "../../node_modules/lit-html/lit-html.js";
import { login } from "../api/user.js";
import { createSubmitHandler } from "../util.js";

const loginTemplate = (onLogin) => html`
<section id="login">
    <div class="form">
        <h2>Login</h2>
        <form @submit=${onLogin}class="login-form">
            <input type="text" name="email" id="email" placeholder="email" />
            <input type="password" name="password" id="password" placeholder="password" />
            <button type="submit">login</button>
            <p class="message">
                Not registered? <a href="/register">Create an account</a>
            </p>
        </form>
    </div>
</section>
`;

export function loginPage(ctx) {

    ctx.render(loginTemplate(createSubmitHandler(ctx, onLogin)))
}

async function onLogin(ctx, data, ev) {
    if (data.email || data.password) {
        await login(data.email, data.password);
        ev.target.reset();
        ctx.page.redirect('/catalog')
    }

}