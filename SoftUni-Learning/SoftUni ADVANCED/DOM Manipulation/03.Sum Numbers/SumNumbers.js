function calc() {
  let numberOne = document.getElementById("num1").value;
  let numberTwo = document.getElementById("num2").value;

  let sumNumbers = document.getElementById("sum");
  console.log(sumNumbers);
  let res = Number(numberOne) + Number(numberTwo);

  sumNumbers.value = res;
}
