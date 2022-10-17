function solve() {
  const inputName = document.getElementById("fname");
  const inputLastName = document.getElementById("lname");
  const inputEmail = document.getElementById("email");
  const inputDateOfBirth = document.getElementById("birth");
  const inputPosition = document.getElementById("position");
  const inputSalary = document.getElementById("salary");

  const tbodyElement = document.getElementById("tbody");

  const btnForHireWorker = document.getElementById("add-worker");

  btnForHireWorker.addEventListener("click", onHire);

  function onHire(ev) {
    ev.preventDefault();

    if (
      !inputName ||
      !inputLastName ||
      !inputEmail ||
      !inputPosition ||
      !inputDateOfBirth ||
      !inputSalary
    ) {
      return;
    }

    let nameValue = inputName.value;
    let lastNameValue = inputLastName.value;
    let emailValue = inputEmail.value;
    let dateOfBirthValue = inputDateOfBirth.value;
    let positionValue = inputPosition.value;
    let salaryValue = Number(inputSalary.value);

    let tableRow =
      `<tr>` +
      `<td>${nameValue}</td>` +
      `<td>${lastNameValue}</td>` +
      `<td>${emailValue}</td>` +
      `<td>${dateOfBirthValue}</td>` +
      `<td>${positionValue}</td>` +
      `<td>${salaryValue}</td>` +
      `<td><button class= 'fired'>Fired</button> <button class= 'edit'>Edit</button></td>` +
      `</tr>`;

    tbodyElement.innerHTML += tableRow;
    const block = document.getElementsByClassName("tbl-content")[0];
    const parentEl = block.children[0];

    parentEl.appendChild(tbodyElement);

    inputName.value = "";
    inputLastName.value = "";
    inputEmail.value = "";
    inputDateOfBirth.value = "";
    inputPosition.value = "";
    inputSalary.value = "";

    let spanElementSum = document.getElementById("sum");
    let currSalary = Number(spanElementSum.textContent);
    spanElementSum.textContent = (currSalary + salaryValue).toFixed(2);

    let editBtn = Array.from(tbodyElement.querySelectorAll(".edit")).forEach(
      (el) => el.addEventListener("click", onEdit)
    );
    let firedBtn = Array.from(tbodyElement.querySelectorAll(".fired")).forEach(
      (el) => el.addEventListener("click", onFired)
    );
    function onEdit(ev) {
      let info = ev.target.parentElement.parentElement;
      info.remove();

      currSalary = Number(spanElementSum.textContent);
      spanElementSum.textContent = (currSalary - salaryValue).toFixed(2);

      inputName.value = nameValue;
      inputLastName.value = lastNameValue;
      inputEmail.value = emailValue;
      inputDateOfBirth.value = dateOfBirthValue;
      inputPosition.value = positionValue;
      inputSalary.value = salaryValue;
    }
    function onFired(ev) {
      let info = ev.target.parentElement.parentElement;
      info.remove();
      currSalary = Number(spanElementSum.textContent);
      spanElementSum.textContent = (currSalary - salaryValue).toFixed(2);
    }
  }
}
