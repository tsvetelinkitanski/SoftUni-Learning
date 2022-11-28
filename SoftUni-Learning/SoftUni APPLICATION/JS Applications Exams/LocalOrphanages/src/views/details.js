import { html, nothing } from "../../node_modules/lit-html/lit-html.js";
import { del } from "../api/api.js";
import { deleteDetail, getDetails } from "../api/data.js";

const detailsTemplate = (moreInfo, owner, onDelete) => html`
  <section id="details-page">
    <h1 class="title">Post Details</h1>

    <div id="container">
      <div id="details">
        <div class="image-wrapper">
          <img
            src="${moreInfo.imageUrl}"
            alt="Material Image"
            class="post-image"
          />
        </div>
        <div class="info">
          <h2 class="title post-title">${moreInfo.title}</h2>
          <p class="post-description">Description: ${moreInfo.description}</p>
          <p class="post-address">Address: ${moreInfo.address}</p>
          <p class="post-number">Phone number: ${moreInfo.phone}</p>
          <p class="donate-Item">Donate Materials: 0</p>

          <!--Edit and Delete are only for creator-->
          ${owner
            ? html` <div class="btns">
                <a href="/edit/${moreInfo._id}" class="edit-btn btn">Edit</a>
                <a @click = ${onDelete} href="javascript:void(0)" class="delete-btn btn">Delete</a>

                <!--Bonus - Only for logged-in users ( not authors )-->
                <a href="#" class="donate-btn btn">Donate</a>
              </div>`
            : nothing}
        </div>
      </div>
    </div>
  </section>
`;

export async function detailseView(ctx) {
  const id = ctx.params.id;
  const moreInfo = await getDetails(id);
  if (ctx.user) {
    const userId = ctx.user._id;
    const ownerId = moreInfo._ownerId;
    const owner = hasOwner(userId, ownerId);
    ctx.render(detailsTemplate(moreInfo, owner, onDelete));
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
