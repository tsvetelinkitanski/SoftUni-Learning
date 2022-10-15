class CarDealership {
  constructor(name) {
    this.name = name;
    this.availableCars = [];
    this.soldCars = [];
    this.totalIncome = 0;
  }
  addCar(model, horsepower, price, mileage) {
    if (!model || horsepower < 0 || price < 0 || mileage < 0) {
      throw new Error("Invalid input!");
    }
    if (
      model.length <= 0 ||
      typeof horsepower !== "number" ||
      typeof price !== "number" ||
      typeof mileage !== "number"
    ) {
      throw new Error("Invalid input!");
    }

    this.availableCars.push({
      model,
      horsepower: Number(horsepower),
      price: Number(price),
      mileage: Number(mileage),
    });
    return `New car added: ${model} - ${horsepower} HP - ${mileage.toFixed(
      2
    )} km - ${price.toFixed(2)}$`;
  }
  sellCar(model, desiredMileage) {
    desiredMileage = Number(desiredMileage);
    let currModel = this.availableCars.find((x) => x.model === model);
    if (!currModel) {
      throw new Error(`${model} was not found!`);
    }
    let diff = Math.abs(desiredMileage - currModel.mileage);
    if (currModel.mileage <= desiredMileage) {
      currModel.price = currModel.price;
    } else {
      if (diff <= 40000) {
        currModel.price -= currModel.price * 0.05;
      } else if (diff > 40000) {
        currModel.price -= currModel.price * 0.1;
      }
    }
    // if (currModel.mileage >= desiredMileage) {
    //   if (diff <= 40000) {
    //     currModel.price -= currModel.price * 0.05;
    //   } else if (diff > 40000) {
    //     currModel.price -= currModel.price * 0.1;
    //   }
    // }
    let index = this.availableCars.indexOf(currModel);
    this.availableCars.splice(index, 1);
    let horsepower = currModel.horsepower;
    let soldPrice = currModel.price;
    this.soldCars.push({
      model,
      horsepower,
      soldPrice,
    });

    this.totalIncome += Number(soldPrice);
    return `${model} was sold for ${soldPrice.toFixed(2)}$`;
  }
  currentCar() {
    if (this.availableCars.length <= 0) {
      return "There are no available cars";
    }
    let buff = [];

    buff.push("-Available cars:");
    this.availableCars.forEach((car) => {
      buff.push(
        `---${car.model} - ${car.horsepower} HP - ${car.mileage.toFixed(
          2
        )} km - ${car.price.toFixed(2)}$`
      );
    });
    return buff.join("\n");
  }
  salesReport(criteria) {
    if (criteria === "horsepower") {
      this.soldCars.sort((a, b) => b.horsepower - a.horsepower);
    } else if (criteria === "model") {
      this.soldCars.sort((a, b) => a.model.localeCompare(b));
    } else {
      throw new Error("Invalid criteria!");
    }
    let buff = [];
    buff.push(
      `-${this.name} has a total income of ${this.totalIncome.toFixed(2)}$`
    );
    buff.push(`-${this.soldCars.length} cars sold:`);
    this.soldCars.forEach((car) => {
      buff.push(
        `---${car.model} - ${car.horsepower} HP - ${car.soldPrice.toFixed(2)}$`
      );
    });
    return buff.join("\n");
  }
}

let dealership = new CarDealership("SoftAuto");
dealership.addCar("Toyota Corolla", 100, 3500, 190000);
dealership.addCar("Mercedes C63", 300, 29000, 187000);
dealership.addCar("Audi A3", 120, 4900, 240000);
dealership.sellCar("Toyota Corolla", 230000);
dealership.sellCar("Mercedes C63", 110000);
console.log(dealership.salesReport("horsepower"));
// let dealership = new CarDealership("SoftAuto");
// dealership.addCar("Toyota Corolla", 100, 3500, 190000);
// dealership.addCar("Mercedes C63", 300, 29000, 187000);
// dealership.addCar("Audi A3", 120, 4900, 240000);
// console.log(dealership.sellCar("Toyota Corolla", 230000));
// console.log(dealership.sellCar("Mercedes C63", 110000));

// let dealership = new CarDealership('SoftAuto');
// console.log(dealership.addCar('Toyota Corolla', 100, 3500, 190000));
// console.log(dealership.addCar('Mercedes C63', 300, 29000, 187000));
// console.log(dealership.addCar('', 120, 4900, 240000));

// let dealership = new CarDealership('SoftAuto');
// dealership.addCar('Toyota Corolla', 100, 3500, 190000);
// dealership.addCar('Mercedes C63', 300, 29000, 187000);
// dealership.addCar('Audi A3', 120, 4900, 240000);
// console.log(dealership.sellCar('Toyota Corolla', 230000));
// console.log(dealership.sellCar('Mercedes C63', 110000));

// let dealership = new CarDealership('SoftAuto');
// dealership.addCar('Toyota Corolla', 100, 3500, 190000);
// dealership.addCar('Mercedes C63', 300, 29000, 187000);
// dealership.addCar('Audi A3', 120, 4900, 240000);
// console.log(dealership.currentCar());
