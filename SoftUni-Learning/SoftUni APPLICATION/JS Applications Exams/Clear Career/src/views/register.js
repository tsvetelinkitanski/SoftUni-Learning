import { html } from "../../node_modules/lit-html/lit-html.js";
import { register } from "../api/user.js";
import { createSubmitHandler } from "../util.js";

const registerTemplate = (onRegister) => html`
<section id="register">
    <div class="form">
        <h2>Register</h2>
        <form @submit=${onRegister}class="login-form">
            <input type="text" name="email" id="register-email" placeholder="email" />
            <input type="password" name="password" id="register-password" placeholder="password" />
            <input type="password" name="re-password" id="repeat-password" placeholder="repeat password" />
            <button type="submit">register</button>
            <p class="message">Already registered? <a href="/login">Login</a></p>
        </form>
    </div>
</section>
`;

export function registerPage(ctx) {
    ctx.render(registerTemplate(createSubmitHandler(ctx, onRegister)));
}

async function onRegister(ctx, data, ev) {
    if (Object.values(data).some(f => f == '')) {
        return alert('All fields are require!')
    }
    if (data.password !== data['re-password']) {
        return alert('Passwords don\'t match!')
    }

    await register(data.email, data.password);

    ev.target.reset();
    ctx.page.redirect('/catalog')
}
