function needForSpeed(input) {
  let numOfCars = input.shift();
  let cars = {};

  for (let i = 0; i < numOfCars; i++) {
    let [car, mileage, fuel] = input[i].split("|");
    cars[car] = [];
    cars[car].push(Number(mileage), Number(fuel));
  }
  for (let myCar of input) {
    let token = myCar.split(" : ");
    let command = token[0];
    if (command === "Stop") {
      break;
    }

    if (command === "Drive") {
      let car = token[1];
      let distance = Number(token[2]);
      let fuel = Number(token[3]);
      if (fuel > cars[car][1]) {
        console.log("Not enough fuel to make that ride");
      } else {
        cars[car][0] += distance;
        cars[car][1] -= fuel;
        console.log(
          `${car} driven for ${distance} kilometers. ${fuel} liters of fuel consumed.`
        );
        if (cars[car][0] >= 100000) {
          console.log(`Time to sell the ${car}!`);
          delete cars[car];
        }
      }
    } else if (command === "Refuel") {
      let car = token[1];
      let fuel = Number(token[2]);
      let oldFuel = cars[car][1];
      cars[car][1] += fuel;
      if (cars[car][1] >= 75) {
        console.log(`${car} refueled with ${75 - oldFuel} liters`);
        cars[car][1] = 75;
        continue;
      } else {
        console.log(`${car} refueled with ${fuel} liters`);
      }
    } else if (command === "Revert") {
      let car = token[1];
      let kilometers = token[2];
      cars[car][0] -= kilometers;
      if (cars[car][0] < 10000) {
        cars[car][0] = 10000;
      } else {
        console.log(`${car} mileage decreased by ${kilometers} kilometers`);
      }
    }
  }
  for (let totalCars of Object.entries(cars)) {
    console.log(
      `${totalCars[0]} -> Mileage: ${totalCars[1][0]} kms, Fuel in the tank: ${totalCars[1][1]} lt.`
    );
  }
}
// needForSpeed([
//   "3",
//   "Audi A6|38000|62",
//   "Mercedes CLS|11000|35",
//   "Volkswagen Passat CC|45678|5",
//   "Drive : Audi A6 : 543 : 47",
//   "Drive : Mercedes CLS : 94 : 11",
//   "Drive : Volkswagen Passat CC : 69 : 8",
//   "Refuel : Audi A6 : 50",
//   "Revert : Mercedes CLS : 500",
//   "Revert : Audi A6 : 30000",
//   "Stop",
// ]);
needForSpeed([
  "4",
  "Lamborghini Veneno|11111|74",
  "Bugatti Veyron|12345|67",
  "Koenigsegg CCXR|67890|12",
  "Aston Martin Valkryie|99900|50",
  "Drive : Koenigsegg CCXR : 382 : 82",
  "Drive : Aston Martin Valkryie : 99 : 23",
  "Drive : Aston Martin Valkryie : 2 : 1",
  "Refuel : Lamborghini Veneno : 40",
  "Revert : Bugatti Veyron : 2000",
  "Stop",
]);
