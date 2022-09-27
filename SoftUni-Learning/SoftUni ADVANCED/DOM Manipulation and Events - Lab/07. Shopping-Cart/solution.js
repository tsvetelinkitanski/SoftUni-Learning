function solve() {
  const div = document.getElementsByClassName("product");

  let btn = Array.from(document.getElementsByClassName("add-product")).forEach(
    (el) => {
      el.addEventListener("click", onClick);
    }
  );

  const textArea = document.getElementsByTagName("textarea")[0];
  const checkBtn = document.getElementsByClassName("checkout")[0];

  let cartProducts = [];

  checkBtn.addEventListener("click", sum);

  function sum() {
    let splitted = textArea.value.split(" ");
    let result = 0;
    let pattern = /[0-9]+.[0-9]+/g;
    let matches = pattern.exec(splitted);

    while (matches !== null) {
      result += Number(matches);
      matches = pattern.exec(splitted);
    }

    textArea.value += `You bought ${cartProducts.join(
      ", "
    )} for ${result.toFixed(2)}.`;

    checkBtn.removeEventListener("click", sum);

    btn = Array.from(document.getElementsByClassName("add-product")).forEach(
      (el) => {
        el.removeEventListener("click", onClick);
      }
    );
  }

  function onClick(e) {
    let parentEl = e.target.parentElement.parentElement;
    let price = Number(parentEl.lastElementChild.textContent);
    let title = parentEl.children[1].firstElementChild.textContent;
    let res = `Added ${title} for ${price.toFixed(2)} to the cart.\n`;

    textArea.value += res;

    if (!cartProducts.includes(title)) cartProducts.push(title);
  }
  textArea.value = "";
}

// /[0-9]+.[0-9]+/g
