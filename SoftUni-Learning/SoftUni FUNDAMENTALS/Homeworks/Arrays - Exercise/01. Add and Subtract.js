function addAndSubtract(arr) {
  let tempArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      tempArr.push(arr[i] + i);
    } else {
      tempArr.push(arr[i] - i);
    }
  }
  console.log(tempArr);

  let sumOfArr = 0;
  let sumOfTempArr = 0;
  for (char of arr) {
    sumOfArr += char;
  }

  for (char of tempArr) {
    sumOfTempArr += char;
  }
  console.log(sumOfArr);
  console.log(sumOfTempArr);
}
addAndSubtract([5, 15, 23, 56, 35]);
addAndSubtract([-5, 11, 3, 0, 2]);
