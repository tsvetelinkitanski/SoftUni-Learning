window.addEventListener("load", solve);

function solve() {
  let postTitle = document.getElementById("post-title");
  let postCategory = document.getElementById("post-category");
  let postContent = document.getElementById("post-content");
  let ulElement = document.getElementById("review-list");

  let publishBtn = document.getElementById("publish-btn");

  publishBtn.addEventListener("click", onPublish);
  //ulField with id= 'review-list'
  let liElement = document.createElement("li");
  let articleElement = document.createElement("article");
  let h4Element = document.createElement("h4");
  let pCategoryElement = document.createElement("p");
  let pContentElement = document.createElement("p");

  let editBtn = document.createElement("button");
  let approveBtn = document.createElement("button");
  let clearBtn = document.getElementById("clear-btn");
  clearBtn.addEventListener("click", onClear);

  //ul field with id='published-list'

  let ulEementApprovedList = document.getElementById("published-list");

  function onPublish(ev) {
    ev.preventDefault();
    if (
      postTitle.value == "" ||
      postCategory.value == "" ||
      postContent.value == ""
    ) {
      return;
    }

    liElement.className = "rpost";

    h4Element.textContent = `${postTitle.value}`;
    pCategoryElement.textContent = `Category: ${postCategory.value}`;
    pContentElement.textContent = `Content: ${postContent.value}`;

    editBtn.className = "action-btn edit";
    editBtn.textContent = "Edit";

    approveBtn.className = "action-btn approve";
    approveBtn.textContent = "Approve";

    articleElement.appendChild(h4Element);
    articleElement.appendChild(pCategoryElement);
    articleElement.appendChild(pContentElement);

    liElement.appendChild(articleElement);
    liElement.appendChild(editBtn);
    liElement.appendChild(approveBtn);
    ulElement.appendChild(liElement);

    ulElement.style.display = "block";

    postTitle.value = "";
    postCategory.value = "";
    postContent.value = "";

    editBtn.addEventListener("click", onEdit);
    approveBtn.addEventListener("click", onApprove);
  }

  function onEdit(ev) {
    console.log(ev.target);
    ulElement.style.display = "none";
    postTitle.value = h4Element.textContent;
    postCategory.value = pCategoryElement.textContent.substring(10);
    postContent.value = pContentElement.textContent.substring(9);
  }

  function onApprove(ev) {
    liElement.removeChild(approveBtn);
    liElement.removeChild(editBtn);
    ulEementApprovedList.appendChild(liElement);
    ulEementApprovedList.style.display = "block";
  }

  function onClear(ev) {
    ulEementApprovedList.style.display = "none";
  }
}
