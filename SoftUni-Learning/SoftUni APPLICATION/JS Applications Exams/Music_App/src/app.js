import page from "../node_modules/page/page.mjs";
import { authMiddleWare } from "./middlewares/authMiddleWare.js";
import { renderNavigationMiddleware, renderContentMiddleware } from "./middlewares/renderMiddleware.js";
import { catalogView } from "./views/catalogView.js";
import { createView } from "./views/createView.js";
import { homeView } from "./views/homeView.js";
import { loginView } from "./views/loginView.js";
import { logoutView } from "./views/logoutView.js";
import { registerView } from "./views/registerView.js";

page(authMiddleWare);
page(renderNavigationMiddleware);
page(renderContentMiddleware);

page("/", homeView);
page("/login", loginView);
page("/register", registerView);
page('/logout', logoutView)
page('/catalog', catalogView)
page('/create', createView)

page.start();
