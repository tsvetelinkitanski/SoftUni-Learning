import { html } from "../../node_modules/lit-html/lit-html.js";
import { login } from "../api/user.js";
import { createSubmitHandler } from "../util.js";

const loginTemplate = (onLogin) => html`
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