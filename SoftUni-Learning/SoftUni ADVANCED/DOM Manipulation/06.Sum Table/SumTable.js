function sumTable() {
  let res = document.getElementById("sum");
  let nums = document.querySelectorAll("tbody tr td");
  let sum = 0;
  let counter = 1;

  for (let num of nums) {
      let checker = Number(num.textContent)

    if (counter % 2 === 0 ) {
      sum += checker;
    }
    counter++
}
res.textContent = sum
}
