function calc(num1, operator, num2) {
  let result = 0;
  if (operator == "+") {
    result = Number(num1) + Number(num2);
  } else if (operator == "-") {
    result = Number(num1) - Number(num2);
  } else if (operator == "*") {
    result = Number(num1) * Number(num2);
  } else if (operator == "/") {
    result = Number(num1) / Number(num2);
  }
  console.log(`${result.toFixed(2)}`);
}
calc("5", "+", "10");
