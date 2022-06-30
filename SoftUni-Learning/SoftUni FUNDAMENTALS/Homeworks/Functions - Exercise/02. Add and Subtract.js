function addAndSubtract(firstNum, secNum, thirdNum) {
  function add(firstNum, secNum) {
    return firstNum + secNum;
  }
  function subtract(addRes, thirdNum) {
    return addRes - thirdNum;
  }

  let result = add(firstNum, secNum);
  let finalRes = subtract(result, thirdNum);
  console.log(finalRes);
}
addAndSubtract(23, 6, 10);
addAndSubtract(1, 17, 30);
addAndSubtract(42, 58, 100);
