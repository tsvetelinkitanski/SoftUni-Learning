function storeCatalogue(arr) {
  let obj = {};
  arr.map((x) => {
    let [productName, productPrice] = x.split(" : ");
    obj[productName] = productPrice;
  });

  let wordsFromObj = Object.keys(obj).sort((a, b) => a.localeCompare(b));
  let onlyLetter = [];

  wordsFromObj.forEach((el) => onlyLetter.push(el[0]));

  onlyLetter = onlyLetter.filter((x, i, a) => a.indexOf(x) == i);

  for (const letter of onlyLetter) {
    console.log(letter);
    for (const words of wordsFromObj) {
      if (words.startsWith(letter)) {
        console.log(`  ${words}: ${obj[words]}`);
      }
    }
  }
}

storeCatalogue([
  "Appricot : 20.4",
  "Fridge : 1500",
  "TV : 1499",
  "Deodorant : 10",
  "Boiler : 300",
  "Apple : 1.25",
  "Anti-Bug Spray : 15",
  "T-Shirt : 10",
]);

storeCatalogue([
  "Banana : 2",
  "Rubic's Cube : 5",
  "Raspberry P : 4999",
  "Rolex : 100000",
  "Rollon : 10",
  "Rali Car : 2000000",
  "Pesho : 0.000001",
  "Barrel : 10",
]);
