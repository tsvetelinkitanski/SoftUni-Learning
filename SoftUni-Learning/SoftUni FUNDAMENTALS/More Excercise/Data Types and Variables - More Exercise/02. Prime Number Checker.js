function primeNumber(num) {
  let tempNum = Math.round(num / 2);
  if (tempNum + tempNum === num) {
    console.log("false");
  } else {
    console.log("true");
  }
}
primeNumber(7);
primeNumber(8);
primeNumber(81);
