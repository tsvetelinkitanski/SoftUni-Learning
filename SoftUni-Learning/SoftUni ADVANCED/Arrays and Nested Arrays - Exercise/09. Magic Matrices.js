function magicMatrices(input) {
  let resRow = [];
  let resCol = [];
  let bolean = false;
  for (let rowInMatrix = 0; rowInMatrix < input.length; rowInMatrix++) {
    let row = 0;
    let col = 0;
    for (let colInMatrix = 0; colInMatrix < input.length; colInMatrix++) {
      row += input[rowInMatrix][colInMatrix];
      col += input[colInMatrix][rowInMatrix];
    }
    resRow.push(row);
    resCol.push(col);
  }
  if (resRow[0] === resCol[0]) {
    for (const el of resRow) {
      if (el === resRow[0]) {
        bolean = true;
      } else {
        return (bolean = false);
      }
      for (const el of resCol) {
        if (el === resCol[0]) {
          bolean = true;
        } else {
          return (bolean = false);
        }
      }
    }
  }
  if (bolean) {
    console.log(true);
  } else {
    console.log(false);
  }
}
magicMatrices([
  [4, 5, 6],
  [6, 5, 4],
  [5, 5, 5],
]);
console.log("--------------");
magicMatrices([
  [11, 32, 45],
  [21, 0, 1],
  [21, 1, 1],
]);
