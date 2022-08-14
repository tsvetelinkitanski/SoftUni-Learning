function messageTranslator(input) {
  let num = input.shift();
  let pattern = /!(?<command>[A-Z][a-z]{3,})!:\[(?<text>[A-Za-z]+)\]/g;
  for (const line of input) {
    let someTxt = "";
    let com = "";
    let bool = false;
    let match = pattern.exec(line);
    if (match) {
      for (const el of match.groups.text) {
        someTxt += el.charCodeAt() + " ";
      }
      if (com == "") {
        com = match.groups.command;
      }
      bool = true;
    } else {
      console.log(`The message is invalid`);
    }
    if (bool) {
      console.log(`${com}: ${someTxt}`);
    }
  }
}
messageTranslator(["2", "!Send!:[IvanisHere]", "*Time@:[Itis5amAlready"]);
console.log(".........");

messageTranslator([
  "3",
  "go:[outside]",
  "!drive!:YourCarToACarWash",
  "!Watch!:[LordofTheRings]",
]);
