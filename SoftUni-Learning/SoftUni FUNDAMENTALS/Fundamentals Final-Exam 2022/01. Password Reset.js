function passwordReset(input) {
  let givenText = input.shift();
  let newStr = "";
  for (let someCom of input) {
    let token = someCom.split(" ");
    let command = token[0];
    if (command === "Done") {
      console.log(`Your password is: ${givenText}`);
    }

    if (command === "TakeOdd") {
      givenText = givenText.split("");
      givenText.forEach((element, index) => {
        if (index % 2 !== 0) {
          newStr += element;
          givenText = newStr;
        }
      });
      console.log(givenText);
    } else if (command === "Cut") {
      let index = token[1];
      let l = token[2];
      givenText = givenText.split("");
      givenText.splice(index, l);
      givenText = givenText.join("");
      console.log(givenText);
    } else if (command === "Substitute") {
      let substr = token[1];
      let substit = token[2];
      if (givenText.includes(substr)) {
        while (givenText.includes(substr)) {
          givenText = givenText.replace(substr, substit);
        }
        console.log(givenText);
      } else {
        console.log(`Nothing to replace!`);
      }
    }
  }
}
passwordReset([
  "Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr",
  "TakeOdd",
  "Cut 15 3",
  "Substitute :: -",
  "Substitute | ^",
  "Done",
]);
console.log("=============");

passwordReset([
  "up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy",
  "TakeOdd",
  "Cut 18 2",
  "Substitute ! ***",
  "Substitute ? .!.",
  "Done",
]);
