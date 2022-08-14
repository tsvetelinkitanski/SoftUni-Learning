function inventory(array) {
  let heroes = [];
  array.forEach((element) => {
    let [name, level, items] = element.split(" / ");
    let currentHero = {
      name,
      level: +level,
      items,
    };
    heroes.push(currentHero);
  });
  let sortedElements = heroes.sort((a, b) => {
    return a.level - b.level;
  });
  sortedElements.forEach((el) => {
    console.log(`Hero: ${el.name}`);
    console.log(`level => ${el.level}`);
    console.log(`items => ${el.items}`);
  });
}
inventory([
  "Isacc / 25 / Apple, GravityGun",
  "Derek / 12 / BarrelVest, DestructionSword",
  "Hes / 1 / Desolator, Sentinel, Antara",
]);
