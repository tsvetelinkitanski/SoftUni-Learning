function heroRecruitment(input) {
  let obj = {};

  for (const heroes of input) {
    let [command, name, spellName] = heroes.split(" ");
    if (command === "End") {
      break;
    }
    if (command === "Enroll") {
      if (!obj.hasOwnProperty(name)) {
        obj[name] = [];
      } else {
        console.log(`${name} is already enrolled.`);
      }
    } else if (command === "Learn") {
      if (!obj.hasOwnProperty(name)) {
        console.log(`${name} doesn't exist.`);
        continue;
      } else if (obj[name].includes(spellName)) {
        console.log(`${name} has already learnt ${spellName}.`);
      } else if (!obj[name].includes(spellName)) {
        obj[name].push(spellName);
      }
    } else if (command === "Unlearn") {
      if (!obj.hasOwnProperty(name)) {
        console.log(`${name} doesn't exist.`);
        continue;
      } else if (!obj[name].includes(spellName)) {
        console.log(`${name} doesn't know ${spellName}.`);
        continue;
      } else {
        let index = obj[name].indexOf(spellName);
        obj[name].splice(index, 1);
      }
    }
  }
  console.log("Heroes:");
  for (const el in obj) {
    let txt = "";
    let counter = 0;
    if (obj[el].length > 0) {
      for (const item of obj[el]) {
        if (counter > 0) {
          txt += `, ${item}`;
        } else {
          txt += `== ${el}: ${item}`;
          counter++
        }
      }
      console.log(txt);
    } else {
      console.log(`== ${el}: `);
    }
  }
}
heroRecruitment([
  "Enroll Stefan",
  "Enroll Peter",
  "Enroll Stefan",
  "Learn Stefan ItShouldWork",
  "Learn John ItShouldNotWork",
  "Unlearn George Dispel",
  "Unlearn Stefan ItShouldWork",
  "End",
]);
console.log("-------");

heroRecruitment([
  "Enroll Stefan",
  "Learn Stefan ItShouldWork",
  "Learn Stefan ItShouldWork",
  "Unlearn Stefan NotFound",
  "End",
]);
console.log("-------");

heroRecruitment([
  "Enroll Stefan",
  "Enroll Peter",
  "Enroll John",
  "Learn Stefan Spell",
  "Learn Peter Dispel",
  "Learn Stefan Go6o",
  "Learn Peter Pe6o",
  "End",
]);
