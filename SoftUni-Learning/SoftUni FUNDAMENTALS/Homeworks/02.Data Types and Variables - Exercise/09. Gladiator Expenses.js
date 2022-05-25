function gladiatorExpenses(
  lostFights,
  helmetPrice,
  swordPrice,
  shieldPrice,
  armorPrice
) {
  countBrokenHelmet = 0;
  conuntBrokenSword = 0;
  countBrokenShield = 0;
  countBrokenArmor = 0;
  for (let day = 1; day <= lostFights; day++) {
    if (day % 2 == 0) {
      countBrokenHelmet++;
    }
    if (day % 3 == 0) {
      conuntBrokenSword++;
    }
    if (day % 2 == 0 && day % 3 == 0) {
      countBrokenShield++;
      if (countBrokenShield % 2 == 0) {
        countBrokenArmor++;
      }
    }
  }
  let totalPricePerHelmet = countBrokenHelmet * helmetPrice;
  let totalPricePerSword = conuntBrokenSword * swordPrice;
  let totalPricePerShield = countBrokenShield * shieldPrice;
  let totalPricePerArmor = countBrokenArmor * armorPrice;

  let totalPrice =
    totalPricePerArmor +
    totalPricePerHelmet +
    totalPricePerShield +
    totalPricePerSword;
  console.log(`Gladiator expenses: ${totalPrice.toFixed(2)} aureus`);
}
gladiatorExpenses(23, 12.5, 21.5, 40, 200);

// •	Every second lost game, his helmet is broken.
// •	Every third lost game, his sword is broken.
// •	When both his sword and helmet are broken in the same lost fight, his shield also breaks.
// •	Every second time, when his shield brakes, his armor also needs to be repaired
