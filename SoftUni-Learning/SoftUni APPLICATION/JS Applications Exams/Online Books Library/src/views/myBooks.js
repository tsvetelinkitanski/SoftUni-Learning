import { html } from "../../node_modules/lit-html/lit-html.js";
import { getMyBooks } from "../api/data.js";

const myBooksTemplate = (info) => html`
  <section id="my-books-page" class="my-books">
    <h1>My Books</h1>
    <!-- Display ul: with list-items for every user's books (if any) -->
    <ul class="my-books-list">
      ${info.length > 0
        ? info.map((x) => myBookCard(x))
        : html` <!-- Display paragraph: If the user doesn't have his own books  -->
            <p class="no-books">No books in database!</p>`}
    </ul>
  </section>
`;

const myBookCard = (info) => html` <li class="otherBooks">
  <h3>${info.title}</h3>
  <p>Type: ${info.type}</p>
  <p class="img"><img src="${info.imageUrl}" /></p>
  <a class="button" href="/details/${info._id}">Details</a>
</li>`;

export async function myBookPage(ctx) {
  const id = ctx.user._id;
  const info = await getMyBooks(id);
  ctx.render(myBooksTemplate(info));
}
