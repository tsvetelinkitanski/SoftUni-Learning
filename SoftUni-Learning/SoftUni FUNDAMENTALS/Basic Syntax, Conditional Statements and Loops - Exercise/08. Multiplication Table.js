function multiplicationTable(num) {
  for (let i = 1; i < 2; i++) {
    for (let j = 1; j <= 10; j++) {
      console.log(`${num} X ${j} = ${num * j}`);
    }
  }
}
multiplicationTable(5);
multiplicationTable(2);
