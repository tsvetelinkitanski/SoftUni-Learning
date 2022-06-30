function oddAndEvenSum(number) {
  number = String(number);
  even = 0;
  odd = 0;
  for (char of number) {
    if (char % 2 == 0) {
      even += Number(char);
    } else {
      odd += Number(char);
    }
  }
  console.log(`Odd number = ${odd}, Even num = ${even}`);
}
oddAndEvenSum(1000435);
