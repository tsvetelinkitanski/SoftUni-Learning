function subtract() {
  let fieldFirstInput = document.getElementById("firstNumber").value;
  let fieldSecondInput = document.getElementById("secondNumber").value;
  let div = document.getElementById("result");

  let res = Number(fieldFirstInput) - Number(fieldSecondInput);
  div.innerHTML = res;
}
