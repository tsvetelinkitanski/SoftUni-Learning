function townPop(input) {
    let res = {};
  
    input.forEach((x) => {
      let [town, population] = x.split(" <-> ");
      if (res.hasOwnProperty(town)) {
        res[town] += Number(population);
      } else {
        res[town] = Number(population);
      }
    });
  
    for (const key in res) {
      console.log(`${key} : ${res[key]}`);
    }
  }
  townPop(['Sofia <-> 1200000',
  'Montana <-> 20000',
  'New York <-> 10000000',
  'Washington <-> 2345000',
  'Las Vegas <-> 1000000']
  )