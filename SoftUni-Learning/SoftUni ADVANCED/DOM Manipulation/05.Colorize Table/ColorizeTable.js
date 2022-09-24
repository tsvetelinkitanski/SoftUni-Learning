function colorize() {
  let check = document.querySelectorAll("table tr");
  let row;
  for (let i = 1; i < check.length; i++) {
    if (i % 2 === 0) {
      row = check[i];
      row.style.background = "teal";
    }
  }
}
