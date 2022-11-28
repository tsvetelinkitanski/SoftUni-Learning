import { html } from "../../node_modules/lit-html/lit-html.js";
import { register } from "../api/user.js";
import { createSubmitHandler } from "../util.js";

const registerTemplate = (onRegister) => html`
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
