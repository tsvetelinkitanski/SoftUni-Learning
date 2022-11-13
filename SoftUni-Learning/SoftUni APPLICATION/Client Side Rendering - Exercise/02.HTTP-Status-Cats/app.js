import { html, render } from "../node_modules/lit-html/lit-html.js";
import * as helpFile from "./catSeeder.js";

const root = document.getElementById("allCats");

const info = helpFile.cats;

const templateView = (data, onToggle) => html`
<ul>
    ${data.map(cat => html`
    <li>
        <img src='./images/${cat.imageLocation}.jpg' width="250" height="250" alt="Card image cap" />
        <div class="info">
            <button class="showBtn" @click=${onToggle}>Show status code</button>
            <div class="status" style="display: none" id='${cat.id}'>
                <h4>Status Code: ${cat.statusCode}</h4>
                <p>${cat.statusMessage}</p>
            </div>
        </div>
    </li>`)};
</ul>
`;

function onToggle(ev) {

    if (ev.target.parentElement.children[1].style.display === 'none' &&
        ev.target.textContent === 'Show status code') {
        ev.target.parentElement.children[1].style.display = 'block'
        ev.target.textContent = 'Hide status code'
    } else {
        ev.target.parentElement.children[1].style.display = 'none'
        ev.target.textContent = 'Show status code'
    }

}



render(templateView(info, onToggle), root)
