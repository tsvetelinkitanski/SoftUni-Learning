window.addEventListener("load", solve);

function solve() {
  const addBtn = document.getElementById("add");
  addBtn.addEventListener("click", onAdd);

  const inputs = {
    model: document.getElementById("model"),
    year: document.getElementById("year"),
    description: document.getElementById("description"),
    price: document.getElementById("price"),
  };

  function onAdd(ev) {
    ev.preventDefault();
    let modelValue = inputs.model.value;
    let yearValue = inputs.year.value;
    let descriptionValue = inputs.description.value;
    let priceValue = inputs.price.value;
    priceValue = Number(priceValue);

    if (
      inputs.model.value == "" ||
      inputs.year.value == "" ||
      inputs.description.value == "" ||
      inputs.price.value == "" ||
      inputs.price.value < 0 ||
      inputs.year.value < 0
    ) {
      return;
    }

    const container = document.getElementById("furniture-list");

    const trClassInfoElement = document.createElement("tr");
    trClassInfoElement.className = "info";

    trClassInfoElement.innerHTML = `<td>${modelValue}</td>
                             <td>${priceValue.toFixed(2)}</td>
                             <td>
                                  <button class= 'moreBtn'>More Info</button>
                                  <button class= 'buyBtn'>Buy it</button>
                             </td>`;

    const trClassHideElement = document.createElement("tr");
    trClassHideElement.className = "hide";

    trClassHideElement.innerHTML = `<td>Year: ${yearValue}</td>
                                      <td colspan='3'>Description: ${descriptionValue}</td>`;

    inputs.model.value = "";
    inputs.year.value = "";
    inputs.description.value = "";
    inputs.price.value = "";

    container.appendChild(trClassInfoElement);
    container.appendChild(trClassHideElement);

    let moreInfoBtn = Array.from(
      trClassInfoElement.querySelectorAll(".moreBtn")
    ).forEach((b) => b.addEventListener("click", onMoreInfo));
    let buyInfoBtn = Array.from(
      trClassInfoElement.querySelectorAll(".buyBtn")
    ).forEach((b) => b.addEventListener("click", onBuy));

    function onMoreInfo(ev) {
      let txtContEvTarget = ev.target.textContent;

      if (txtContEvTarget === "More Info") {
        trClassHideElement.style.display = "contents";
        ev.target.textContent = "Less Info";
      } else {
        trClassHideElement.style.display = "none";
        ev.target.textContent = "More Info";
      }
    }
    function onBuy(ev) {
      let sumRef = document.getElementsByClassName("total-price")[0];
      let numSumRef = Number(sumRef.textContent);
      let res = numSumRef + priceValue;

      sumRef.textContent = res.toFixed(2);

      trClassInfoElement.remove();
      trClassHideElement.remove();
    }
  }
}
