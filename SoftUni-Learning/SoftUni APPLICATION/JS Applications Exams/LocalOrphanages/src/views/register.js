import { html } from "../../node_modules/lit-html/lit-html.js";
import { register } from "../api/user.js";
import { createSubmitHandler } from "../util.js";

const registerTemplate = (onRegister) => html` 
<section id="register-page" class="auth">
    <form @submit = ${onRegister} id="register">
        <h1 class="title">Register</h1>

        <article class="input-group">
            <label for="register-email">Email: </label>
            <input type="email" id="register-email" name="email">
        </article>

        <article class="input-group">
            <label for="register-password">Password: </label>
            <input type="password" id="register-password" name="password">
        </article>

        <article class="input-group">
            <label for="repeat-password">Repeat Password: </label>
            <input type="password" id="repeat-password" name="repeatPassword">
        </article>

        <input type="submit" class="btn submit-btn" value="Register">
    </form>
</section>
`;

export function registerPage(ctx) {
    ctx.render(registerTemplate(createSubmitHandler(ctx, onRegister)));
}

async function onRegister(ctx, data, ev) {
    if (Object.values(data).some(f => f == '')) {
        return alert('All fields are require!')
    }
    if (data.password !== data.repeatPassword) {
        return alert('Passwords don\'t match!')
    }

    await register(data.email, data.password);

    ev.target.reset();
    ctx.page.redirect('/catalog')
}
