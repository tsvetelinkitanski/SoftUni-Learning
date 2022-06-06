function equalSums(array) {
  let foundingEqual = "no";
  let arrayL = array.length;

  for (let i = 0; i < arrayL; i++) {
    let leftSum = 0;
    let rightSum = 0;
    for (let l = 0; l < i; l++) {
      leftSum += array[l];
    }
    for (let r = i + 1; r < arrayL; r++) {
      rightSum += array[r];
    }
    if (leftSum === rightSum) {
      foundingEqual = i;
    }
  }
  console.log(foundingEqual);
}
equalSums([1, 2, 3, 3]);
equalSums([1, 2]);
equalSums([1]);
equalSums([1, 2, 3]);
equalSums([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]);
