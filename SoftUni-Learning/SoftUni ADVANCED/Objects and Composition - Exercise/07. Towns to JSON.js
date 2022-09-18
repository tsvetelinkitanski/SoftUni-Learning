function townsToJSON(input) {
  input.shift();
  let res = [];
  for (const el of input) {
    let [town, latitude, longitude] = el.split("|").filter((x) => x !== "");
    town = town.trim();
    latitude = Number(latitude).toFixed(2);
    longitude = Number(longitude).toFixed(2);
    currTown = {
      Town: town,
      Latitude: Number(latitude),
      Longitude: Number(longitude),
    };

    res.push(currTown);
  }
  console.table(JSON.stringify(res));
}
townsToJSON([
  "| Town | Latitude | Longitude |",
  "| Sofia | 42.696552 | 23.32601 |",
  "| Beijing | 39.913818 | 116.363625 |",
]);
