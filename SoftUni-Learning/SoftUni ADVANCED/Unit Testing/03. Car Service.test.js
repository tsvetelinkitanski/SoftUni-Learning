const { carService } = require("./03. Car Service");
const { assert } = require("chai");

describe("carServise object tests", () => {
  describe("isItExpensive func tests", () => {
    //hardcore tests
    it('return positive result if string =="Engine"', () => {
      assert.equal(
        carService.isItExpensive("Engine"),
        `The issue with the car is more severe and it will cost more money`
      );
    });
    it('return positive result if string =="Transmission"', () => {
      assert.equal(
        carService.isItExpensive("Transmission"),
        `The issue with the car is more severe and it will cost more money`
      );
    });
    //if is not hardcore input
    it('return negative result if string !=="Transmission" && !== "Engine"', () => {
      assert.equal(
        carService.isItExpensive("Gosho"),
        `The overall price will be a bit cheaper`
      );
    });
    //
  });
  describe("discount func tests", () => {
    //negative type of inputs
    it('return "Invalid input" - first param is string', () => {
      assert.throws(() => carService.discount("4", 13), "Invalid input");
    });
    it('return "Invalid input" - second param is string', () => {
      assert.throws(() => carService.discount(15, "4"), "Invalid input");
    });
    it('return "Invalid input" - both param is string', () => {
      assert.throws(() => carService.discount("5", "4"), "Invalid input");
    });
    //positive inputs
    it("sum discount with 15%", () => {
      assert.equal(
        carService.discount(3, 20),
        `Discount applied! You saved ${3}$`
      );
    });
    it("sum discount with 15%", () => {
      assert.equal(
        carService.discount(9, 20),
        `Discount applied! You saved ${6}$`
      );
    });
    it("sum discount with 15%", () => {
      assert.equal(carService.discount(1, 20), "You cannot apply a discount");
    });
  });
  describe("partsToBuy function tests", () => {
    //negative tests...
    it('throw Error "Invalid input" - first param is a string', () => {
      assert.throws(
        () => carService.partsToBuy("4", [2, 4, 4, 2, 1]),
        "Invalid input"
      );
    });
    it('throw Error "Invalid input" - second param is a string', () => {
      assert.throws(
        () => carService.partsToBuy([2, 4, 4, 2, 1], "4"),
        "Invalid input"
      );
    });
    it('throw Error "Invalid input" - first param is a number', () => {
      assert.throws(
        () => carService.partsToBuy(4, [2, 4, 4, 2, 1]),
        "Invalid input"
      );
    });
    it('throw Error "Invalid input" - second param is a number', () => {
      assert.throws(
        () => carService.partsToBuy([2, 4, 4, 2, 1], 12),
        "Invalid input"
      );
    });
    it('throw Error "Invalid input" - both param is numbers', () => {
      assert.throws(() => carService.partsToBuy(32, 12), "Invalid input");
    });
    it('throw Error "Invalid input" - first param is an object', () => {
      assert.throws(
        () => carService.partsToBuy({}, [2, 4, 4, 2, 1]),
        "Invalid input"
      );
    });
    it('throw Error "Invalid input" - second param is an object', () => {
      assert.throws(
        () => carService.partsToBuy([2, 4, 4, 2, 1], {}),
        "Invalid input"
      );
    });
    it("return 0 - first param is empty", () => {
      assert.equal(
        carService.partsToBuy([], ["blowoff valve", "injectors"]),
        0
      );
    });
    it("return sum - both params are correct", () => {
      assert.equal(
        carService.partsToBuy(
          [
            { part: "blowoff valve", price: 145 },
            { part: "injectors", price: 230 },
          ],
          ["blowoff valve", "injectors"]
        ),
        375
      );
    });
    it("return sum - both param are correct, second index of second param is not equal to an object parts", () => {
      assert.equal(
        carService.partsToBuy(
          [
            { part: "blowoff valve", price: 145 },
            { part: "coil springs", price: 230 },
          ],
          ["blowoff valve", "injectors"]
        ),
        145
      );
    });
  });
});
