import { html, nothing } from "../../node_modules/lit-html/lit-html.js";
import { del } from "../api/api.js";
import { deleteDetail, getDetails } from "../api/data.js";

const detailsTemplate = (moreInfo, owner, onDelete) => html`
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
    const choice = confirm('Are you sure you want to delete this item?');
    if (choice) {
      await deleteDetail(id);
      ctx.page.redirect('/catalog')
    }
  }
}

function hasOwner(userId, ownerId) {
  return Boolean(userId === ownerId);
}
