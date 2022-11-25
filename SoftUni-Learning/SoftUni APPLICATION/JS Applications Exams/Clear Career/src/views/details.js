import { html, nothing } from "../../node_modules/lit-html/lit-html.js";
import { del } from "../api/api.js";
import { deleteDetail, getDetails } from "../api/data.js";


// category
// : 
// "Finance, Administration, Data Capture"

// description
// : 
// "The manager will oversee quality assurance, quality control, and customer service regarding the invoicing process; ensure adherence to proper invoicing procedures; and interpret and clarify invoicing policies. We are looking for individuals who have a passion for making a difference in the lives of people around the world."

// imageUrl
// : 
// "../images/example3.png"

// requirements
// : 
// "Experience with SQL-based accounting software and demonstrated ability to learn and operate new systems in a short period. Experience with accounts payable, general ledger, and client invoicing. Experience with accounting software; Solomon IV experience preferred. Ability to solve technical, managerial, or operational problems and evaluate options based on relevant information, resources, well-rounded experience, and knowledge."

// salary
// : 
// "1700"

// title
// : 
// "Invoice Administrator"
// _createdOn
// : 
// 1617194295480
// _id
// : 
// "136777f5-3277-42ad-b874-76d043b069cb"
// _ownerId
// : 
// "847ec027-f659-4086-8032-5173e2f9c93a"



const detailsTemplate = (moreInfo, owner, onDelete) => html`<section id="details">
  <div id="details-wrapper">
    <img id="details-img" src=${moreInfo.imageUrl} alt="example1" />
    <p id="details-title">${moreInfo.title}</p>
    <p id="details-category">
      Category: <span id="categories">${moreInfo.category}</span>
    </p>
    <p id="details-salary">
      Salary: <span id="salary-number">${moreInfo.salary}</span>
    </p>
    <div id="info-wrapper">
      <div id="details-description">
        <h4>Description</h4>
        <span>${moreInfo.description}</span>
      </div>
      <div id="details-requirements">
        <h4>Requirements</h4>
        <span>${moreInfo.requirements}</span>
      </div>
    </div>
    <p>Applications: <strong id="applications">1</strong></p>

    ${owner 
    ? html ` <!--Edit and Delete are only for creator-->
    <div id="action-buttons">
      <a href="/edit/${moreInfo._id}" id="edit-btn">Edit</a>
      <a @click=${onDelete} href="javascript:void(0)" id="delete-btn">Delete</a>

      <!--Bonus - Only for logged-in users ( not authors )-->
      <!-- <a href="" id="apply-btn">Apply</a> -->
    </div>` 
    : nothing}
   
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
