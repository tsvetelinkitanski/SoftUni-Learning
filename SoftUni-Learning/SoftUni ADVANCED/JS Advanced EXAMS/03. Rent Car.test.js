const { rentCar } = require("./03. Rent Car");
const { assert } = require("chai");
const { describe } = require("mocha");

describe("rentCar testing", () => {
  describe("searchCar function testing", () => {
    // Invalid Inputs
    it("return Invalid input - first param is not an array - string", () => {
      assert.throws(
        () => rentCar.searchCar("Volswagen", "Golf"),
        "Invalid input"
      );
    });
    it("return Invalid input - first param is not an array - number", () => {
      assert.throws(() => rentCar.searchCar(23, "Golf"), "Invalid input");
    });
    it("return Invalid input - second param is not a string - number", () => {
      assert.throws(
        () => rentCar.searchCar(["BMW", "Volkswagen", "Audi"], 26),
        "Invalid input"
      );
    });
    it("return Invalid input - second param is not a string - object", () => {
      assert.throws(
        () =>
          rentCar.searchCar(["BMW", "Volkswagen", "Audi"], {
            key: 24,
            name: "Gosho",
          }),
        "Invalid input"
      );
    });

    //Valid inputs, but with negative answer
    it("Throw Error - there is no match in array ", () => {
      assert.throws(
        () => rentCar.searchCar(["BMW", "Volkswagen", "Audi"], "Volvo"),
        "There are no such models in the catalog!"
      );
    });

    //Valid inputs
    it("Return findModels.length there is match in array ", () => {
      assert.equal(
        rentCar.searchCar(["BMW", "Volkswagen", "Audi"], "Audi"),
        `There is 1 car of model Audi in the catalog!`
      );
    });
  });
  describe("calculatePriceOfCar function testing", () => {
    //Invalid Inputs
    it("throw error first param is not a string - number", () => {
      assert.throws(
        () => rentCar.calculatePriceOfCar(23, 12),
        "Invalid input!"
      );
    });
    it("throw error first param is not a string - array", () => {
      assert.throws(
        () => rentCar.calculatePriceOfCar(23, []),
        "Invalid input!"
      );
    });
    it("throw error second param is not a number - string", () => {
      assert.throws(
        () => rentCar.calculatePriceOfCar("Gosho", "Pesho"),
        "Invalid input!"
      );
    });
    it("throw error second param is not a number - object", () => {
      assert.throws(
        () => rentCar.calculatePriceOfCar({}, 12),
        "Invalid input!"
      );
    });
    it("throw error /'No such model in the catalog!'/", () => {
      assert.throws(
        () => rentCar.calculatePriceOfCar("Lada", 12),
        "No such model in the catalog!"
      );
    });

    //Valid inputs
    it("return You choose Audi and it will cost 144", () => {
      assert.equal(
        rentCar.calculatePriceOfCar("Audi", 4),
        `You choose Audi and it will cost $144!`
      );
    });
    it("return You choose Mercedes and it will cost 300", () => {
      assert.equal(
        rentCar.calculatePriceOfCar("Mercedes", 6),
        `You choose Mercedes and it will cost $300!`
      );
    });
  });
  describe("checkBudget function testing", () => {
    //Invalid inputs
    it("throw Invalid input first param is not a number - string", () => {
      assert.throws(() => rentCar.checkBudget("Gosho", 5, 4), "Invalid input!");
    });
    it("throw Invalid input first param is not a number - array", () => {
      assert.throws(() => rentCar.checkBudget([], 5, 4), "Invalid input!");
    });
    it("throw Invalid input first param is not a number - object", () => {
      assert.throws(() => rentCar.checkBudget({}, 5, 4), "Invalid input!");
    });
    it("throw Invalid input second param is not a number - object", () => {
      assert.throws(() => rentCar.checkBudget(4, {}, 4), "Invalid input!");
    });
    it("throw Invalid input second param is not a number - array", () => {
      assert.throws(() => rentCar.checkBudget(4, [], 4), "Invalid input!");
    });
    it("throw Invalid input second param is not a number - string", () => {
      assert.throws(() => rentCar.checkBudget(4, "Pesho", 4), "Invalid input!");
    });
    it("throw Invalid input third param is not a number - string", () => {
      assert.throws(() => rentCar.checkBudget(4, 3, "Ivan"), "Invalid input!");
    });
    it("throw Invalid input third param is not a number - object", () => {
      assert.throws(() => rentCar.checkBudget(4, 3, {}), "Invalid input!");
    });
    it("throw Invalid input third param is not a number - array", () => {
      assert.throws(() => rentCar.checkBudget(4, 3, []), "Invalid input!");
    });
    //Valid inputs
    it("return You rent a car", () => {
      assert.equal(rentCar.checkBudget(3, 12, 150), "You rent a car!");
    });
    it("return You need a bigger budget", () => {
      assert.equal(
        rentCar.checkBudget(3, 120, 210),
        "You need a bigger budget!"
      );
    });
  });
});
