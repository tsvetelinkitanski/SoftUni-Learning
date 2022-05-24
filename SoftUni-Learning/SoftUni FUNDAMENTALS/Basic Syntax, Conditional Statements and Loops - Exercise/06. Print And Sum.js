function printAndSum(startNum, endNum) {
  let sequence = "";
  let sum = 0;
  for (let i = startNum; i <= endNum; i++) {
    sequence += [i] + " ";
    sum += i;
  }
  console.log(sequence);
  console.log(`Sum: ${sum}`);
}
printAndSum(5, 10);
printAndSum(0, 26);
printAndSum(50, 60);
