const { chooseYourCar } = require("./Choose your car");
const { assert } = require("chai");

describe("chooseYourCar testing", () => {
  describe("choosingType function tests", () => {
    //invalid inputs
    it("invalid year - less than 1900", () => {
      assert.throws(
        () => chooseYourCar.choosingType("gosho", "lenche", 1870),
        "Invalid Year!"
      );
    });
    it("invalid year - less than 1900", () => {
      assert.throws(
        () => chooseYourCar.choosingType("gosho", "lenche", 1899),
        "Invalid Year!"
      );
    });
    it("invalid year - more than 2022", () => {
      assert.throws(
        () => chooseYourCar.choosingType("gosho", "lenche", 2043),
        "Invalid Year!"
      );
    });
    it("invalid type not equal to 'Sedan'", () => {
      assert.throws(
        () => chooseYourCar.choosingType("Coupe", "blue", 2011),
        "This type of car is not what you are looking for."
      );
    });
    it("invalid type not equal to 'Sedan'", () => {
      assert.throws(
        () => chooseYourCar.choosingType("Coupe", "red", 1900),
        "This type of car is not what you are looking for."
      );
    });
    //valid inputs
    it("return valid res 1", () => {
      assert.equal(
        chooseYourCar.choosingType("Sedan", "red", 2011),
        `This red Sedan meets the requirements, that you have.`
      );
    });
    it("return valid res 2", () => {
      assert.equal(
        chooseYourCar.choosingType("Sedan", "red", 2009),
        `This Sedan is too old for you, especially with that red color.`
      );
    });
    it("return valid res 3", () => {
      assert.equal(
        chooseYourCar.choosingType("Sedan", "red", 2010),
        `This red Sedan meets the requirements, that you have.`
      );
    });
  });
  describe("brandName function tests", () => {
    //invalid inputs
    it("return invalid input first param is not an array - string", () => {
      assert.throws(
        () => chooseYourCar.brandName("Gosho", 2),
        "Invalid Information!"
      );
    });
    it("return invalid input first param is not an array - number", () => {
      assert.throws(
        () => chooseYourCar.brandName(12, 2),
        "Invalid Information!"
      );
    });
    it("return invalid input second param is not a number - string", () => {
      assert.throws(
        () => chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"], "gosho"),
        "Invalid Information!"
      );
    });
    it("return invalid input second param is not a number - array", () => {
      assert.throws(
        () => chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"], []),
        "Invalid Information!"
      );
    });
    it("return invalid input second param is not a valid number - more than array.length", () => {
      assert.throws(
        () => chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"], 4),
        "Invalid Information!"
      );
    });
    it("return invalid input second param is not a valid number - negative num", () => {
      assert.throws(
        () => chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"], -4),
        "Invalid Information!"
      );
    });
    it("return invalid input second param is not a valid number - floating point num", () => {
      assert.throws(
        () => chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"], 4.3),
        "Invalid Information!"
      );
    });
    //valid inputs
    it("return changed array as a string", () => {
      assert.equal(
        chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"], 1),
        "BMW, Peugeot"
      );
    });
  });
  describe("carFuelConsumption function tests", () => {
    //negative inputs
    it("return invalid information first param is not a number - string", () => {
      assert.throws(
        () => chooseYourCar.carFuelConsumption("Gosho", 2),
        "Invalid Information!"
      );
    });
    it("return invalid information first param is not a number - array", () => {
      assert.throws(
        () => chooseYourCar.carFuelConsumption([], 2),
        "Invalid Information!"
      );
    });
    it("return invalid information first param is not a number - negative number", () => {
      assert.throws(
        () => chooseYourCar.carFuelConsumption(-3, 2),
        "Invalid Information!"
      );
    });
    it("return invalid information first param is not a valid number - 0", () => {
      assert.throws(
        () => chooseYourCar.carFuelConsumption(0, 2),
        "Invalid Information!"
      );
    });
    it("return invalid information second param is not a number - negative number", () => {
      assert.throws(
        () => chooseYourCar.carFuelConsumption(4, -2),
        "Invalid Information!"
      );
    });
    it("return invalid information second param is not a valid number - 0", () => {
      assert.throws(
        () => chooseYourCar.carFuelConsumption(4, 0),
        "Invalid Information!"
      );
    });
    it("return invalid information second param is not a number - string", () => {
      assert.throws(
        () => chooseYourCar.carFuelConsumption(4, "Pesho"),
        "Invalid Information!"
      );
    });
    it("return invalid information second param is not a number - object", () => {
      assert.throws(
        () => chooseYourCar.carFuelConsumption(4, {}),
        "Invalid Information!"
      );
    });
    //valid inputs
    it("return valid res 1", () => {
      assert.equal(
        chooseYourCar.carFuelConsumption(10, 2),
        `The car burns too much fuel - 20.00 liters!`
      );
    });
    it("return valid res 2", () => {
      assert.equal(
        chooseYourCar.carFuelConsumption(20, 2),
        `The car burns too much fuel - 10.00 liters!`
      );
    });
    it("return valid res 3", () => {
      assert.equal(
        chooseYourCar.carFuelConsumption(20, 0.5),
        "The car is efficient enough, it burns 2.50 liters/100 km."
      );
    });
    it("return valid res =less than 7", () => {
      assert.equal(
        chooseYourCar.carFuelConsumption(40, 2.5),
        "The car is efficient enough, it burns 6.25 liters/100 km."
      );
    });
    it("return valid res equal to 7", () => {
      assert.equal(
        chooseYourCar.carFuelConsumption(40, 2.8),
        "The car is efficient enough, it burns 7.00 liters/100 km."
      );
    });
  });
});
