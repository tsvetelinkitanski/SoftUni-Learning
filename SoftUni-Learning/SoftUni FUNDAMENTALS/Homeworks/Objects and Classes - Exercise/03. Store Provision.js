function storeProvision(stock1, stock2) {
  let storeProduct = {};
  let stock1L = stock1.length;
  let stock2L = stock2.length;

  for (let nameStock = 0; nameStock < stock1L; nameStock += 2) {
    let product = stock1[nameStock];
    storeProduct[product] = Number(stock1[nameStock + 1]);
  }

  for (let stock = 0; stock < stock2L; stock += 2) {
    let product = stock2[stock];
    if (!storeProduct.hasOwnProperty(product)) {
      storeProduct[product] = 0;
    }
    storeProduct[product] += Number(stock2[stock + 1]);
  }
  for (const product in storeProduct) {
    console.log(`${product} -> ${storeProduct[product]}`);
  }
}
storeProvision(
  ["Chips", "5", "CocaCola", "9", "Bananas", "14", "Pasta", "4", "Beer", "2"],
  ["Flour", "44", "Oil", "12", "Pasta", "7", "Tomatoes", "70", "Bananas", "30"]
);
