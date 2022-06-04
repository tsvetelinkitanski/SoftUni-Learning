function reverseArr(n, array) {
  let newArray = [];
  for (let i = n - 1; i >= 0; i--) {
    newArray.push(array[i]);
  }
  console.log(newArray.join(" "));
}
reverseArr(3, [10, 20, 30, 40, 50]);
reverseArr(4, [-1, 20, 99, 5]);
reverseArr(2, [66, 43, 75, 89, 47]);
