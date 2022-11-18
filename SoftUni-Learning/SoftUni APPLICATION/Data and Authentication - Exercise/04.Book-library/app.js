import { html, render } from "../node_modules/lit-html/lit-html.js";

document.getElementById("loadBooks").addEventListener("click", getAllBooks);
const url = "http://localhost:3030/jsonstore/collections/books";
const root = document.querySelector("table tbody");

//OK
async function getAllBooks(ev) {
  ev.preventDefault();
  const response = await fetch(url);
  const data = await response.json();
  const arr = Object.values(data);

  render(template(arr), root);
}

const form = document.querySelector("form");
form.addEventListener("submit", postRequest);

//OK
async function postRequest(ev) {
  ev.preventDefault();

  const formData = new FormData(form);
  const data = Object.fromEntries(formData);

  const title = data.title;
  const author = data.author;

  if (title !== "" || author !== "") {
    requester("post", url, { title: title, author: author });
    await getAllBooks(ev);
  }
  form.reset();
}

//TODO
function putRequest(ev) {
  const target = ev.target.parentElement.parentElement;
  const currTittle = target.children[0].textContent;
  const currAuthor = target.children[1].textContent;
}

//OK
function deleteRequest(ev) {
  const del = ev.target.parentElement.parentElement;
  const id = ev.target.parentElement.parentElement.id;
  if (id) {
    requester("delete", url + `/${id}`);
    del.remove();
  }
}

const template = (data, _id) =>
  data.map(
    (a) => html` <tr id=${a._id}>
      <td>${a.title}</td>
      <td>${a.author}</td>

      <td>
        <button @click=${putRequest}>Edit</button>
        <button @click=${deleteRequest}>Delete</button>
      </td>
    </tr>`
  );

//OK
async function requester(method, url, data) {
  const option = {
    method,
    headers: {
      "content-type": "application/json",
    },
  };
  if (data != undefined) {
    option.body = JSON.stringify(data);
  }
  const response = await fetch(url, option);
  const info = await response.json();

  return info;
}
