function rotateArray(arr, numToRotate) {
  for (let i = 0; i < numToRotate; i++) {
    let currArr = arr.pop();

    arr.unshift(currArr);
  }
  console.log(arr.join(' '));
}
rotateArray(["1", "2", "3", "4"], 2);
rotateArray(["Banana", "Orange", "Coconut", "Apple"], 15);
