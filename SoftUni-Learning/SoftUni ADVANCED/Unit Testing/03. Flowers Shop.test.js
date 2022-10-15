const { flowerShop } = require("./03. Flowers Shop");
const { assert } = require("chai");

describe("flowerShop testing", () => {
  describe("calcPriceOfFlowers function testing", () => {
    //Invalid inputs
    it("throw Error first param is not a string - number", () => {
      assert.throws(
        () => flowerShop.calcPriceOfFlowers(12, 4, 5),
        "Invalid input!"
      );
    });
    it("throw Error, first param is not a string - Array", () => {
      assert.throws(
        () => flowerShop.calcPriceOfFlowers([], 4, 5),
        "Invalid input!"
      );
    });
    it("throw Error, second param is not a number - string", () => {
      assert.throws(
        () => flowerShop.calcPriceOfFlowers("Tulip", "nutmeg", 5),
        "Invalid input!"
      );
    });
    it("throw Error, second param is not a number - Array", () => {
      assert.throws(
        () => flowerShop.calcPriceOfFlowers("Tulip", [], 5),
        "Invalid input!"
      );
    });
    it("throw Error, third param is not a number - string", () => {
      assert.throws(
        () => flowerShop.calcPriceOfFlowers("Tulip", 5, "nutmeg"),
        "Invalid input!"
      );
    });
    it("throw Error, third param is not a number - Array", () => {
      assert.throws(
        () => flowerShop.calcPriceOfFlowers("Tulip", 4, []),
        "Invalid input!"
      );
    });
    //Valid inputs
    it("return valid result - integer number", () => {
      assert.equal(
        flowerShop.calcPriceOfFlowers("Tulip", 4, 5),
        `You need $20.00 to buy Tulip!`
      );
    });
    it("return valid result - floating point number", () => {
      assert.equal(
        flowerShop.calcPriceOfFlowers("Tulip", 43, 54),
        `You need $2322.00 to buy Tulip!`
      );
    });
  });
  describe("checkFlowersAvailable function testing", () => {
    //Positive result
    it("return flower are available...", () => {
      assert.equal(
        flowerShop.checkFlowersAvailable("Tulip", [
          "Rose",
          "Lily",
          "Orchid",
          "Tulip",
        ]),
        `The Tulip are available!`
      );
    });
    it("return flower are available...", () => {
      assert.equal(
        flowerShop.checkFlowersAvailable("Rose", [
          "Rose",
          "Lily",
          "Orchid",
          "Tulip",
        ]),
        `The Rose are available!`
      );
    });
    //Negative result
    it("return you need to purchase...", () => {
      assert.equal(
        flowerShop.checkFlowersAvailable("Tulip", ["Rose", "Lily", "Orchid"]),
        `The Tulip are sold! You need to purchase more!`
      );
    });
    it("return you need to purchase...", () => {
      assert.equal(
        flowerShop.checkFlowersAvailable("Nutmeg", ["Rose", "Lily", "Orchid"]),
        `The Nutmeg are sold! You need to purchase more!`
      );
    });
  });
  describe("sellFlowers function testing", () => {
    //Invalid inputs
    it("throw new Error, first param is not an array - string", () => {
      assert.throws(
        () => flowerShop.sellFlowers("Tulip", "Nutmeg"),
        "Invalid input!"
      );
    });
    it("throw new Error, first param is not an array - number", () => {
      assert.throws(
        () => flowerShop.sellFlowers(13, "Nutmeg"),
        "Invalid input!"
      );
    });
    it("throw new Error, second param is not a number - string", () => {
      assert.throws(
        () => flowerShop.sellFlowers("Nutmeg", "Gosho"),
        "Invalid input!"
      );
    });
    it("throw new Error, second param is not a number - array", () => {
      assert.throws(
        () => flowerShop.sellFlowers("Nutmeg", -1),
        "Invalid input!"
      );
    });
    //Valid inputs
    it("return the changed array of flowers as a string, joined by ' / ' ", () => {
      assert.equal(
        flowerShop.sellFlowers(["Rose", "Lily", "Orchid", "Tulip"], 3),
        "Rose / Lily / Orchid"
      );
    });
    it("return the changed array of flowers as a string, joined by ' / ' ", () => {
      assert.equal(
        flowerShop.sellFlowers(["Rose", "Lily", "Orchid", "Tulip"], 1),
        "Rose / Orchid / Tulip"
      );
    });
  });
});
