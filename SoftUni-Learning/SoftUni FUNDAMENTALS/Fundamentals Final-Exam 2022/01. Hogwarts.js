function hogwarts(input) {
  let givenText = input.shift();
  for (const el of input) {
    let token = el.split(" ");
    let command = token[0];

    if (command === "Abracadabra") {
      break;
    } else if (command === "Abjuration") {
      givenText = givenText.toUpperCase();
      console.log(givenText);
    } else if (command === "Necromancy") {
      givenText = givenText.toLowerCase();
      console.log(givenText);
    } else if (command === "Illusion") {
      let index = Number(token[1]);
      let letter = token[2];
      if (index >= givenText.length) {
        console.log("The spell was too weak.");
      }
      let bolean = false;
      for (let i = 0; i < givenText.length; i++) {
        if (i === index) {
          givenText = givenText.replace(givenText[i], letter);
          bolean = true;
        }
      }
      if (bolean) {
        console.log("Done!");
      }
    } else if (command === "Divination") {
      let firstSubstr = token[1];
      let secSubstr = token[2];
      if (!givenText.includes(firstSubstr)) {
        continue;
      } else {
        while (givenText.includes(firstSubstr)) {
          givenText = givenText.replace(firstSubstr, secSubstr);
        }
        console.log(givenText);
      }
    } else if (command === "Alteration") {
      let substr = token[1];
      if (!givenText.includes(substr)) {
        continue;
      } else {
        givenText = givenText.replace(substr, "");
        console.log(givenText);
      }
    } else {
      console.log("The spell did not work!");
    }
  }
}

hogwarts([
  "A7ci0",
  "Illusion 1 c",
  "Illusion 4 o",
  "Abjuration",
  "Abracadabra",
]);
console.log("---------");

hogwarts([
  "TR1GG3R",
  "Necromancy",
  "Illusion 8 m",
  "Illusion 9 n",
  "Abracadabra",
]);

console.log("-----");

hogwarts([
  "SwordMaster",
  "Target Target Target",
  "Abjuration",
  "Necromancy",
  "Alteration master",
  "Abracadabra",
]);
console.log("---------");
