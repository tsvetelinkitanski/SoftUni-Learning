class CarDealership {
  constructor(name) {
    this.name = name;
    this.availableCars = [];
    this.soldCars = [];
    this.totalIncome = 0;
  }
  addCar(model, horsepower, price, mileage) {
    if (!model || !horsepower || !price || !mileage) {
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
    if (currModel.mileage >= desiredMileage) {
      let diff = currModel.mileage - desiredMileage;
      if (diff <= 40000) {
        currModel.price -= currModel.price * 0.05;
      } else if (diff > 40000) {
        currModel.price -= currModel.price * 0.1;
      }
    }
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
}
let dealership = new CarDealership("SoftAuto");
dealership.addCar("Toyota Corolla", 100, 3500, 190000);
dealership.addCar("Mercedes C63", 300, 29000, 187000);
dealership.addCar("Audi A3", 120, 4900, 240000);
console.log(dealership.sellCar("Toyota Corolla", 230000));
console.log(dealership.sellCar("Mercedes C63", 110000));
