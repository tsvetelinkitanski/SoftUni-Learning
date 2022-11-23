import page from "../node_modules/page/page.mjs";
import { logout } from "./api/user.js";
import { readyForRender } from "./middleware/render.js";
import { addSession } from "./middleware/session.js";
import { createView } from "./views/create.js";
import { catalogView } from "./views/dashboard.js";
import { detailsView } from "./views/details.js";
import { editView } from "./views/edit.js";
import { homeView } from "./views/home.js";
import { loginView } from "./views/login.js";
import { registerView } from "./views/register.js";
import { searchView } from "./views/search.js";

page(addSession)
page(readyForRender);

page("/", homeView);
page("/catalog", catalogView);
page("/create", createView);
page("/details/:id", detailsView);
page("/login", loginView);
page("/search", searchView);
page("/register", registerView);
page("/logout", onLogout);
page("/edit/:id", editView);

page.start();


function onLogout() {
    logout();
    page.redirect('/catalog')
}