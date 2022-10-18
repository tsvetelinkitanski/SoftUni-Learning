window.addEventListener("load", solve);

function solve() {
  let sendBtn = document.querySelector("form button");

  let inputs = {
    productType: document.getElementById("type-product"),
    description: document.getElementById("description"),
    clientName: document.getElementById("client-name"),
    clienPhone: document.getElementById("client-phone"),
  };

  sendBtn.addEventListener("click", onSend);

  let sectionElement = document.getElementById("received-orders");

  function onSend(ev) {
    ev.preventDefault();

    let productValue = inputs.productType.value;
    let descrValue = inputs.description.value;
    let clientNameValue = inputs.clientName.value;
    let clientPhoneValue = inputs.clienPhone.value;

    let container = document.createElement("div");
    container.className = "container";

    container.innerHTML = `<h2>Product type for repair: ${productValue}</h2>
                            <h3>Client information: ${clientNameValue}, ${clientPhoneValue}</h3>
                            <h4>Description of the problem: ${descrValue}</h4>
                            <button class= 'start-btn'> Start repair </button>
                            <button class= 'finish-btn' disabled> Finish repair </button>`;
    if (
      inputs.productType.value == "" ||
      inputs.clientName.value == "" ||
      inputs.clienPhone.value == "" ||
      inputs.description.value == ""
    ) {
      return;
    }

    sectionElement.appendChild(container);

    inputs.productType.value = "";
    inputs.clientName.value = "";
    inputs.clienPhone.value = "";
    inputs.description.value = "";

    let startBtn = Array.from(container.querySelectorAll(".start-btn")).forEach(
      (btn) => btn.addEventListener("click", onStart)
    );

    let finishBtn = Array.from(
      container.querySelectorAll(".finish-btn")
    ).forEach((btn) => btn.addEventListener("click", onFinish));

    let completeField = document.getElementById("completed-orders");

    function onFinish(ev) {
      let firstBtn = container.querySelector(".start-btn").remove();
      let secondBtn = container.querySelector(".finish-btn").remove();

      container.remove();
      completeField.appendChild(container);
    }

    let clearBtn = document.getElementsByClassName("clear-btn")[0];
    clearBtn.addEventListener("click", () => {
      container.remove();
    });
  }

  function onStart(ev) {
    ev.target.disabled = true;
    ev.target.parentElement.querySelector(".finish-btn").disabled = false;
  }
}
