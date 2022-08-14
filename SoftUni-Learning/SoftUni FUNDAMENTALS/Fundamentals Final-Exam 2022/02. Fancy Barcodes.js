function fancyBarcode(input) {
  let dontNeed = input.shift();

  let textTocheck = "";
  let pattern = /@#+(?<stock>[A-Z][A-Za-z0-9]{4,}[A-Z])@#+/g;
  let checkForDigitsReg = /\d/g;
  let matches = pattern.exec(input);

  for (let i = 0; i < dontNeed; i++) {
    textTocheck += input[i];
  }
  while (matches !== null) {
    barcodes.push(matches[1]);
    matches = pattern.exec(textTocheck);
  }
  for (const el of barcodes) {
    for (let i = 0; i < el.length; i++) {
      if (typeof el[i] === Number) {
      }
    }
  }
  console.log(barcodes);
}

fancyBarcode(["3", "@#FreshFisH@#", "@###Brea0D@###", "@##Che4s6E@##"]);
