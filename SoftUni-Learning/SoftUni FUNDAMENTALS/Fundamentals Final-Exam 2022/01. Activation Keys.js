function activationKeys(input) {
  let givenText = input.shift();
  for (const el of input) {
    let token = el.split(">>>");
    let command = token[0];

    if (command === "Generate") {
      console.log(`Your activation key is: ${givenText}`);
      break;
    } else if (command === "Contains") {
      let substr = token[1];
      if (givenText.includes(substr)) {
        console.log(`${givenText} contains ${substr}`);
      } else {
        console.log(`Substring not found!`);
      }
    } else if (command === "Flip") {
      let startIndx = Number(token[2]);
      let endIndx = Number(token[3]);
      let middleTxt = givenText.substring(startIndx, endIndx);
      if (token[1] === "Upper") {
        givenText = givenText.replace(middleTxt, middleTxt.toUpperCase());
      } else if (token[1] === "Lower") {
        givenText = givenText.replace(middleTxt, middleTxt.toLowerCase());
      }
      console.log(givenText);
    } else if (command === "Slice") {
      let startIndx = token[1];
      let endIndx = token[2];
      let beginTxt = givenText.substr(0, startIndx);
      let endTxt = givenText.substr(endIndx);
      givenText = beginTxt + endTxt;
      console.log(givenText);
    }
  }
}
activationKeys([
  "abcdefghijklmnopqrstuvwxyz",
  "Slice>>>2>>>6",
  "Flip>>>Upper>>>3>>>14",
  "Flip>>>Lower>>>5>>>7",
  "Contains>>>def",
  "Contains>>>deF",
  "Generate",
]);
