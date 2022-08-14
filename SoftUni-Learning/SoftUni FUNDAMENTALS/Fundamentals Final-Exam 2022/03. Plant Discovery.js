function plantDiscovery(input) {
  let result = {};
  let n = input.shift();
  let name;
  let rarity;
  for (let i = 0; i < n; i++) {
    [name, rarity] = input[i].split("<->");
    result[name] = [];
    result[name].push(rarity);
  }
  for (let j = n; j < input.length; j++) {
    let token = input[j].split(": ");
    let command = token[0];
    let moreCommand;
    let namePlant;
    switch (command) {
      case "Rate":
        moreCommand = token[1].split(" - ");
        namePlant = moreCommand[0];
        let rating = moreCommand[1];
        result[namePlant].push(rating);
        break;
      case "Update":
        moreCommand = token[1].split(" - ");
        namePlant = moreCommand[0];
        let newRarity = moreCommand[1];
        result[namePlant][0] = newRarity;
        break;
      case "Reset":
        namePlant = token[1];
        result[namePlant].splice(1);
        result[namePlant].push(0);
        break;

      default:
        break;
    }
  }
  console.table(result);
  for (const key in result) {
    let totalRarity = result[key].shift();
    let counter = 0;
    for (let index = 0; index < result[key].length; index++) {
      console.log(
        `- ${key}; Rarity: ${totalRarity}; Rating: ${result[key][index]}`
      );
      oldKey = key;

      // console.log(result[key][index]);
    }

    // console.log(
    //   `- ${key}; Rarity: ${result[key][0]}; Rating: ${result[key][1]}`
    // );
  }
}

plantDiscovery([
  "3",
  "Arnoldii<->4",
  "Woodii<->7",
  "Welwitschia<->2",
  "Rate: Woodii - 10",
  "Rate: Welwitschia - 7",
  "Rate: Arnoldii - 3",
  "Rate: Woodii - 5",
  "Update: Woodii - 5",
  "Reset: Arnoldii",
  "Exhibition",
]);
