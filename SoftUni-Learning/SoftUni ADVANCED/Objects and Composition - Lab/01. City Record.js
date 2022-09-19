function cityRecord(name, population, treasury) {
  let res = {
    name,
    population: +population,
    treasury: +treasury,
  };
  return res;
}
cityRecord("Tortuga", 7000, 15000);
