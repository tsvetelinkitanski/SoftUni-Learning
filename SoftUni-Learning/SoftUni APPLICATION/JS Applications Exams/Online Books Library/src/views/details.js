import { html, nothing } from "../../node_modules/lit-html/lit-html.js";
import { deleteDetail, getDetails } from "../api/data.js";

const detailsTemplate = (moreInfo, owner, user, onDelete) => html`
  <section id="details-page" class="details">
    <div class="book-information">
      <h3>${moreInfo.title}</h3>
      <p class="type">Type: ${moreInfo.type}</p>
      <p class="img"><img src="${moreInfo.imageUrl}" /></p>
      <div class="actions">
        ${user
          ? owner
            ? html`<!-- Edit/Delete buttons ( Only for creator of this book )  -->
                <a class="button" href="/edit/${moreInfo._id}">Edit</a>
                <a @click=${onDelete} class="button" href="javascript:void(0)"
                  >Delete</a
                >`
            : html` <!-- ( for Guests and Users )  -->
                <div class="likes">
                  <img class="hearts" src="/images/heart.png" />
                  <span id="total-likes">Likes: 0</span>
                  <!-- Like button ( Only for logged-in users, which is not creators of the current book ) -->
                  <a class="button" href="#">Like</a>
                </div>`
          : nothing}
      </div>
    </div>
    <div class="book-description">
      <h3>Description:</h3>
      <p>${moreInfo.description}</p>
    </div>
  </section>
`;

export async function detailseView(ctx) {
  const id = ctx.params.id;
  const moreInfo = await getDetails(id);
  const user = ctx.user;
  if (user) {
    const userId = ctx.user._id;
    const ownerId = moreInfo._ownerId;
    const owner = hasOwner(userId, ownerId);
    ctx.render(detailsTemplate(moreInfo, owner, user, onDelete));
  } else {
    ctx.render(detailsTemplate(moreInfo));
  }

  async function onDelete() {
    const choice = confirm("Are you sure you want to delete this item?");
    if (choice) {
      await deleteDetail(id);
      ctx.page.redirect("/catalog");
    }
  }
}

function hasOwner(userId, ownerId) {
  return Boolean(userId === ownerId);
}
