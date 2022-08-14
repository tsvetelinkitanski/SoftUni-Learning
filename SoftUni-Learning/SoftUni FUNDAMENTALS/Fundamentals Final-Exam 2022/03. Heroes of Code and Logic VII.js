function heroesOfCode(input) {
  let n = input.shift();
  let result = {};
  for (let i = 0; i < n; i++) {
    let [name, heal, mana] = input.shift().split(" ");
    result[name] = [];
    result[name].push(Number(heal), Number(mana));
  }

  for (const el of input) {
    let token = el.split(" - ");
    let command = token[0];
    if (command === "End") {
      break;
    }
    if (command === "CastSpell") {
      let name = token[1];
      let manaNeeded = token[2];
      let spellName = token[3];
      if (result[name][1] >= manaNeeded) {
        result[name][1] -= manaNeeded;
        console.log(
          `${name} has successfully cast ${spellName} and now has ${result[name][1]} MP!`
        );
      } else {
        console.log(`${name} does not have enough MP to cast ${spellName}!`);
      }
    } else if (command === "TakeDamage") {
      let name = token[1];
      let damage = token[2];
      let attacker = token[3];
      result[name][0] -= damage;
      if (result[name][0] > 0) {
        console.log(
          `${name} was hit for ${damage} HP by ${attacker} and now has ${result[name][0]} HP left!`
        );
      } else {
        console.log(`${name} has been killed by ${attacker}!`);
        delete result[name];
      }
    } else if (command === "Recharge") {
      let name = token[1];
      let amount = Number(token[2]);
      let oldValue = result[name][1];
      result[name][1] += amount;
      if (result[name][1] > 200) {
        console.log(`${name} recharged for ${200 - oldValue} MP!`);
        result[name][1] = 200;
      } else {
        console.log(`${name} recharged for ${amount} MP!`);
      }
    } else if (command === "Heal") {
      let name = token[1];
      let heal = Number(token[2]);
      let oldValue = result[name][0];
      result[name][0] += heal;
      if (result[name][0] > 100) {
        console.log(`${name} healed for ${100 - oldValue} HP!`);
        result[name][0] = 100;
      } else {
        console.log(`${name} healed for ${heal} HP!`);
      }
    }
  }
  for (const res in result) {
    console.log(res);
    console.log(`  HP: ${result[res][0]}`);
    console.log(`  MP: ${result[res][1]}`);
  }
}
heroesOfCode([
  "2",
  "Solmyr 85 120",
  "Kyrre 99 50",
  "Heal - Solmyr - 10",
  "Recharge - Solmyr - 50",
  "TakeDamage - Kyrre - 66 - Orc",
  "CastSpell - Kyrre - 15 - ViewEarth",
  "End",
]);
