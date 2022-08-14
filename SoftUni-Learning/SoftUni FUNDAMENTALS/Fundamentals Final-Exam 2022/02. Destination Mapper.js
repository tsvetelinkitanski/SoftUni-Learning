function destination(someText) {
  let pattern = /([=|/])[A-Z]{1}[A-Za-z]{2,}\1/g;
  let matches = pattern.exec(someText);
  let result = [];

  while (matches !== null) {
    result.push(matches[0]);

    matches = pattern.exec(someText);
  }

  let lengthEl = 0;
  let endText = [];
  result.forEach((el) => {
    el = el.slice(1, -1);
    endText.push(el);
    lengthEl += el.length;
  });
  console.log(`Destinations: ${endText.join(", ")}`);
  console.log(`Travel Points: ${lengthEl}`);
}
destination("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=");
