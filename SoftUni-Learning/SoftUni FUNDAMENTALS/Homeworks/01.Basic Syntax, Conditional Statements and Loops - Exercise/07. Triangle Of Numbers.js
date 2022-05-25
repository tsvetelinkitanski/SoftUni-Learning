function triangleOfNums(num) {
  for (let i = 1; i <= num; i++) {
    let tempSequence = "";
    for (let j = 0; j < i; j++) {
      tempSequence += [i] + " ";
    }
    console.log(tempSequence);
  }
}
triangleOfNums(3);
triangleOfNums(5);
triangleOfNums(6);
