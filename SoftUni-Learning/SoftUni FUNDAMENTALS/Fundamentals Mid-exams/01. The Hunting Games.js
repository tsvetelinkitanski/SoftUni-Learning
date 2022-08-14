function huntingGame(arr) {
  let index = 0;
  let days = Number(arr[index]);
  index++;
  let numberOfPlayers = Number(arr[index]);
  index++;
  let energy = arr[index];
  index++;
  let waterPerDay = Number(arr[index]);
  index++;
  let foodPerDay = Number(arr[index]);
  index++;
  let counterDays = 1;
  let lossEnergy = Number(arr[index]);
  index++;
  waterDay = 0;
  foodDay = 0;

  let totalWater = numberOfPlayers * waterPerDay * days;
  let totalFood = numberOfPlayers * foodPerDay * days;

  for (let i = 0; i < days; i++) {
    let boost;
    energy -= lossEnergy;
    waterDay++;
    foodDay++;
    if (energy <= 0) {
      break;
    }

    if (waterDay % 2 == 0) {
      boost = energy * 0.05;
      energy += boost;
      totalWater -= totalWater * 0.3;
      waterDay = 0;
    }
    if (foodDay % 3 == 0) {
      totalFood -= totalFood / numberOfPlayers;
      boost = energy * 0.1;
      energy += boost;
      foodDay = 0;
    }
    lossEnergy = Number(arr[index]);

    index++;
  }
  if (energy >= 1) {
    console.log(
      `You are ready for the quest. You will be left with - ${energy.toFixed(
        2
      )} energy!`
    );
  } else {
    console.log(
      `You will run out of energy. You will be left with ${totalFood.toFixed(
        2
      )} food and ${totalWater.toFixed(2)} water.`
    );
  }
}
huntingGame([
  "10",
  "7",
  "5035.5",
  "11.3",
  "7.2",
  "942.3",
  "500.57",
  "520.68",
  "540.87",
  "505.99",
  "630.3",
  "784.20",
  "321.21",
  "456.8",
  "330",
]);
huntingGame([
  "12",
  "6",
  "4430",
  "9.8",
  "5.5",
  "620.3",
  "840.2",
  "960.1",
  "220",
  "340",
  "674",
  "365",
  "345.5",
  "212",
  "412.12",
  "258",
  "496",
]);
