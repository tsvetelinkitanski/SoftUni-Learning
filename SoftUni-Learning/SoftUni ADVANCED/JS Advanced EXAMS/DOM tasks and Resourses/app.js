window.addEventListener("load", solve);

function solve() {
  document.getElementById("publish").addEventListener("click", onPublished);
  let tBodyEl = document.getElementById("table-body");
  let totalSumOfSellingCars = 0;

  function onPublished(ev) {
    ev.preventDefault();
    let fieldsetElements = document.getElementsByTagName("fieldset")[0];

    let makeField = fieldsetElements.children.make.value;
    let modelField = fieldsetElements.children.model.value;
    let yearField = fieldsetElements.children.year.value;
    let fuelField = fieldsetElements.children.fuel.value;
    let originalCost = document.getElementById("original-cost").value;
    let sellingPrice = document.getElementById("selling-price").value;

    if (
      makeField === "" ||
      makeField === " " ||
      modelField === "" ||
      modelField === " " ||
      yearField === "" ||
      yearField === " " ||
      fuelField === "" ||
      fuelField === " "
    ) {
      return;
    }
    if (
      originalCost === "" ||
      sellingPrice === "" ||
      Number(originalCost) > Number(sellingPrice)
    ) {
      return;
    }

    let tBodyElements =
      `<tr class= 'row' >` +
      `<td> ${makeField.trim()}</td>` +
      `<td> ${modelField.trim()}</td>` +
      `<td> ${yearField.trim()}</td>` +
      `<td> ${fuelField.trim()}</td>` +
      `<td> ${originalCost.trim()}</td>` +
      `<td> ${sellingPrice.trim()}</td>` +
      `<td>` +
      `<button class= "action-btn edit"> Edit</button>` +
      `<button class= "action-btn sell"> Sell</button>` +
      `</td>` +
      `</tr>`;

    tBodyEl.innerHTML = tBodyElements;

    let editBtn = document.getElementsByClassName("action-btn edit")[0];
    editBtn.addEventListener("click", editFnc);

    let sellBtn = document.getElementsByClassName("action-btn sell")[0];
    sellBtn.addEventListener("click", sellFnc);

    fieldsetElements.children.make.value = "";
    fieldsetElements.children.model.value = "";
    fieldsetElements.children.year.value = "";
    fieldsetElements.children.fuel.value = "";
    document.getElementById("original-cost").value = "";
    document.getElementById("selling-price").value = "";

    tBodyEl.style.display = "block";

    function editFnc(ev) {
      tBodyEl.style.display = "none";

      fieldsetElements.children.make.value = makeField;
      fieldsetElements.children.model.value = modelField;
      fieldsetElements.children.year.value = yearField;
      fieldsetElements.children.fuel.value = fuelField;
      document.getElementById("original-cost").value = originalCost;
      document.getElementById("selling-price").value = sellingPrice;
    }

    function sellFnc(ev) {
      console.log(totalSumOfSellingCars);
      let sumOfSellingCars = Number(Math.abs(originalCost - sellingPrice));
      let isVisited = false;
      let liElements =
        `<li class= 'each-list'>` +
        `<span> ${makeField} ${modelField}</span>` +
        `<span> ${yearField}</span>` +
        `<span> ${sumOfSellingCars}</span>` +
        `</li>`;

      totalSumOfSellingCars += sumOfSellingCars;

      tBodyEl.style.display = "none";

      let ulElements = document.getElementById("cars-list");

      ulElements.innerHTML += liElements;

      let profitElement = document.getElementById("profit");
      if (!isVisited) {
        profitElement.textContent = Number(totalSumOfSellingCars);
        isVisited = true;
      } else {
        profitElement.textContent = Number(totalSumOfSellingCars);
      }
    }
  }
}
