import { html } from "../../node_modules/lit-html/lit-html.js";
import { login } from "../api/user.js";
import { createSubmitHandler } from "../util.js";

const loginTemplate = (onLogin) => html`
<section id="login-page" class="login">
    <form @submit = ${onLogin} id="login-form" action="" method="">
        <fieldset>
            <legend>Login Form</legend>
            <p class="field">
                <label for="email">Email</label>
                <span class="input">
                    <input type="text" name="email" id="email" placeholder="Email">
                </span>
            </p>
            <p class="field">
                <label for="password">Password</label>
                <span class="input">
                    <input type="password" name="password" id="password" placeholder="Password">
                </span>
            </p>
            <input class="button submit" type="submit" value="Login">
        </fieldset>
    </form>
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