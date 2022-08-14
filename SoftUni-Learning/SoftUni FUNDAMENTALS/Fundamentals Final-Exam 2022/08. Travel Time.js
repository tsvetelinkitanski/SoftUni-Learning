function travelTime(arr) {
  let result = {};

  for (const line of arr) {
    let [country, town, cost] = line.split(" > ");

    if (!result.hasOwnProperty(country)) {
      result[country] = {};
    }
    if (!result[country].hasOwnProperty(town)) {
      result[country][town] = 0;
    }
    let oldCost = result[country][town];
    if (oldCost > Number(cost) || oldCost === 0) {
      result[country][town] = Number(cost);
    }
    console.table(result);
  }
}
travelTime([
  "Bulgaria > Sofia > 500",
  "Bulgaria > Sopot > 800",
  "France > Paris > 2000",
  "Albania > Tirana > 1000",
  "Bulgaria > Sofia > 200",
]);
