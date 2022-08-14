function worldTour(input) {
  let textForManipulate = input.shift();
  for (const el of input) {
    let token = el.split(":");
    let command = token[0];
    if (command === "Travel") {
      console.log(`Ready for world tour! Planned stops: ${textForManipulate}`);
    }
    switch (command) {
      case "Add Stop":
        let index = token[1];

        if (index <= textForManipulate.length - 1) {
          let str = token[2];
          let startStr = textForManipulate.substring(0, index);
          let endStr = textForManipulate.substring(index);
          textForManipulate = startStr + str + endStr;
        }
        console.log(textForManipulate);
        break;

      case "Remove Stop":
        let startIndex = Number(token[1]);
        let endIndex = Number(token[2]);

        if (
          startIndex <= textForManipulate.length - 1 &&
          endIndex <= textForManipulate.length - 1
        ) {
          let replaceMethod = textForManipulate.substring(
            startIndex,
            endIndex + 1
          );
          textForManipulate = textForManipulate.replace(replaceMethod, "");
        }
        console.log(textForManipulate);
        break;

      case "Switch":
        let oldStr = token[1];
        let newStr = token[2];

        textForManipulate = textForManipulate.replace(oldStr, newStr);
        console.log(textForManipulate);
        break;
    }
  }
}
worldTour([
  "Hawai::Cyprys-Greece",
  "Add Stop:7:Rome",
  "Remove Stop:11:16",
  "Switch:Hawai:Bulgaria",
  "Travel",
]);
