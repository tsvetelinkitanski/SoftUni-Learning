function rounding(number, decimalNum) {
  if (decimalNum > 15) {
    decimalNum = 15;
  }
  let tempNum = number.toFixed(decimalNum);

  console.log(parseFloat(tempNum));
}
rounding(3.1415926535897932384626433832795, 2);
rounding(10.5, 3);
rounding(13.45322, 16);
