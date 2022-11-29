import { html, nothing } from "../../node_modules/lit-html/lit-html.js";
import { deleteDetail, getDetails } from "../api/data.js";

const detailsTemplate = (moreInfo, owner, user, onDelete) => html`
  <section id="detailsPage">
    <div class="details">
      <div class="animalPic">
        <img src="${moreInfo.image}" />
      </div>
      <div>
        <div class="animalInfo">
          <h1>Name: ${moreInfo.name}</h1>
          <h3>Breed: ${moreInfo.breed}</h3>
          <h4>Age: ${moreInfo.age}</h4>
          <h4>Weight: ${moreInfo.weight}</h4>
          <h4 class="donation">Donation: 0$</h4>
        </div>

        ${user 
        ? owner
          ? html` 
            <div class="actionBtn">
              <!-- Only for registered user and creator of the pets-->
              <a href="/edit/${moreInfo._id}" class="edit">Edit</a>
              <a @click = ${onDelete} href="javascript:void(0)" class="remove">Delete</a>
              
          </div>`
          : html `<!--(Bonus Part) Only for no creator and user-->
          <div class="actionBtn">
              <a href="javascript:void(0)" class="donate">Donate</a>
          </div>` : nothing }
      
      </div>
    </div>
  </section>
`;

export async function detailseView(ctx) {
  const id = ctx.params.id;
  const moreInfo = await getDetails(id);
  const user = ctx.user
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

// function onDonate(ev) {
//   console.log(ev.target);
//   let count = 0;
//   if (count > 0) {
// //TODO
//   }
// }

function hasOwner(userId, ownerId) {
  return Boolean(userId === ownerId);
}
