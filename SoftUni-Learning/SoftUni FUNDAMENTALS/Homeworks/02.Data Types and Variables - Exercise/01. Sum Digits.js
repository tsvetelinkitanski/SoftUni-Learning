function sumDigit(num) {
  let tempNum = String(num);
  let res = 0;
  for (let char of tempNum) {
    res += Number(char)

}
console.log(res);

}
sumDigit(1234);
