function secretChat(input) {
  let givenText = input.shift();

  for (const el of input) {
    let token = el.split(":|:");
    let command = token[0];
    let substr;
    switch (command) {
      case "ChangeAll":
        substr = token[1];
        let replacement = token[2];
        givenText = givenText.replace(new RegExp(substr, "gi"), replacement);
        console.log(givenText);
        break;
      case "Reverse":
        substr = token[1];
        if (givenText.includes(substr) ) {
          givenText = givenText.split(substr);
          substr = token[1].split("").reverse().join("");
          givenText.push(substr);
          givenText = givenText.join("");
          console.log(givenText);
        } else {
          console.log("error");
        }
        break;
      case "InsertSpace":
        let index = Number(token[1]);
        let cutting = givenText.substring(0, index);
        let secondCutting = givenText.substr(index);
        givenText = cutting + " " + secondCutting;
        console.log(givenText);
        break;
      default:
        console.log(`You have a new text message: ${givenText}`);
        return;
    }
  }
}
secretChat([
  "heVVodar!gniV",
  "ChangeAll:|:V:|:l",
  "Reverse:|:!gnil",
  "InsertSpace:|:5",
  "Reveal",
]);

console.log("===========");

secretChat([
  "Hiware?uiy",
  "ChangeAll:|:i:|:o",
  "Reverse:|:?uoy",
  "Reverse:|:jd",
  "InsertSpace:|:3",
  "InsertSpace:|:7",
  "Reveal",
]);
