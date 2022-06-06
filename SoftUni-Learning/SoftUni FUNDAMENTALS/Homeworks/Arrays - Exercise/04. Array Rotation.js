function arrRotation(arr, n) {
  let result = [];
  if (n >= arr.length) {
    n = n - arr.length;
    for (let i = n; i < arr.length; i++) {
      result.push(arr[i]);
    }
    // if (n == 1) {
    //   result.push(arr[0]);
    // }
  } else {
    let numRotation = 0;
    for (let i = n; i < arr.length; i++) {
      result.push(arr[i]);
      numRotation = i;
      if (n == 0) {
        continue;
      }
    }
    for (let theOtherHalf = 0; theOtherHalf < numRotation - n; theOtherHalf++) {
      result.push(arr[theOtherHalf]);
    }
  }
  console.log(result.join(" "));
}

arrRotation([51, 47, 32, 61, 21], 2);
arrRotation([32, 21, 61, 1], 4);
arrRotation([2, 4, 15, 31], 5);
