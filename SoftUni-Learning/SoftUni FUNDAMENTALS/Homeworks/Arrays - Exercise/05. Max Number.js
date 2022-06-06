function maxNum(numbers) {
  let result = [];

  for (let i = 0; i < numbers.length; i++) {
    let number1 = numbers[i];
    let isBiggest = true;
    for (let j = i + 1; j < numbers.length; j++) {
      let number2 = numbers[j];
      if (number1 <= number2) {
        isBiggest = false;
      }
    }
    if (isBiggest) {
      result.push(number1);
    }
  }
  console.log(result.join(" "));
}
