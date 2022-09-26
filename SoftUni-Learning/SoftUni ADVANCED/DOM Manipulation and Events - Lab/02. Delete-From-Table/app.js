function deleteByEmail() {
  let table = document.querySelectorAll("tbody tr");
  let input = document.querySelector('input[name= "email"]');

  let isDelete = false;

  for (const row of table) {
    let checkForValidEmail = row.children[1];

    if (checkForValidEmail.textContent === input.value) {
      let parent = checkForValidEmail.parentElement;
      isDelete = true;
      parent.remove();
    }
    let result = document.getElementById("result");

    isDelete
      ? (result.textContent = "Deleted.")
      : (result.textContent = "Not found.");
  }
}
