function theImitationGame(data) {
  let word = data.shift();

  for (const item of data) {
    let token = item.split("|");
    let command = token[0];
    if (command === "Decode") {
      break;
    }
    switch (command) {
      case "Move":
        let n = token[1];
        let oldValue = word.substring(0, n);
        let newValue = word.substring(n);
        word = newValue + oldValue;
        break;
      case "Insert":
        let index = token[1];
        let value = token[2];
        let startSubsText = word.substring(0, index);
        let endSubsText = word.substring(index);
        word = startSubsText + value + endSubsText;
        break;
      case "ChangeAll":
        let substring = token[1];
        let replacement = token[2];
        while (word.includes(substring)) {
          word = word.replace(substring, replacement.repeat(substring.length));
        }
        break;
    }
  }
  console.log(`The decrypted message is: ${word}`);
}
theImitationGame(["zzHe", "ChangeAll|z|l", "Insert|2|o", "Move|3", "Decode"]);
theImitationGame([
  "owyouh",
  "Move|2",
  "Move|3",
  "Insert|3|are",
  "Insert|9|?",
  "Decode",
]);
