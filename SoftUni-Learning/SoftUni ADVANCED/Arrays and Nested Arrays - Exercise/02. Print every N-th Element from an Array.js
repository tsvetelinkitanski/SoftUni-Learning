function printEveryN(arr, step) {
  let res = [];
  for (let index = 0; index < arr.length; index += step) {
    res.push(arr[index]);
  }
  return res;
}
printEveryN(["5", "20", "31", "4", "20"], 2);
