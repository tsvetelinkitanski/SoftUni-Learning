import { html, nothing } from "../../node_modules/lit-html/lit-html.js";
import { getMyPosts } from "../api/data.js";

const myPostsTemplate = (info) => html`<section id="my-posts-page">
  <h1 class="title">My Posts</h1>
  <div class="my-posts">
  <!-- Display a div with information about every post (if any)-->
  ${info.length > 0 
  ? info.map(x=> myPostCard(x))
  : html `<h1 class="title no-posts-title">You have no posts yet!</h1>`}

  <!-- Display an h1 if there are no posts -->
  </div>
</section>`;


const myPostCard = (info) => html`
    <div class="post">
      <h2 class="post-title">${info.title}</h2>
      <img class="post-image" src="${info.imageUrl}" alt="Material Image">
      <div class="btn-wrapper">
        <a href="/details/${info._id}" class="details-btn btn">Details</a>
      </div>
    </div>`;

export async function myPostsPageView(ctx) { 
  const user = ctx.user._id;
  const info = await getMyPosts(user);
  console.log(info);
  ctx.render(myPostsTemplate(info));
}
