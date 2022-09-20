function lowestPrice(input) {
  let res = {};

  input.map((x) => {
    let [townName, productName, productPrice] = x.split(" | ");

    if (!res.hasOwnProperty(productName)) {
      res[productName] = [];

      if (!res[productName].includes(productPrice)) {
        res[productName].push(Number(productPrice));
        res[productName].push(townName);
      }
    } else {
      if (res[productName][0] > Number(productPrice)) {
        res[productName][0] = Number(productPrice);
        res[productName][1] = townName;
      }
    }
  });

  for (const key in res) {
    console.log(`${key} -> ${res[key][0]} (${res[key][1]})`);
  }
}
// lowestPrice([
//   "Sample Town | Sample Product | 1000",
//   "Sample Town | Orange | 2",
//   "Sample Town | Peach | 1",
//   "Sofia | Orange | 3",
//   "Sofia | Peach | 2",
//   "New York | Sample Product | 1000.1",
//   "New York | Burger | 10",
// ]);
// lowestPrice([
//   "Sofia City | NoOffenseToCarLovers | 0",
//   "Mexico City | Audi | 1000",
//   "Mexico City | BMW | 99999",
//   "Mexico City | Mitsubishi | 10000",
//   "New York City | Mitsubishi | 1000",
//   "Washington City | Mercedes | 1000",
// ]);
lowestPrice([
  "Sofia City | Audi | 100000",
  "Sofia City | BMW | 100000",
  "Sofia City | Mitsubishi | 10000",
  "Sofia City | Mercedes | 10000",
  "Sofia City | NoOffenseToCarLovers | 0",
  "Mexico City | Audi | 1000",
  "Mexico City | BMW | 99999",
  "Mexico City | Mitsubishi | 10000",
  "New York City | Mitsubishi | 1000",
  "Washington City | Mercedes | 1000",
]);
