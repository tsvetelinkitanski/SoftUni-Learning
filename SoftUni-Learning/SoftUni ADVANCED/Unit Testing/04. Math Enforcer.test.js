const { assert } = require("chai");
const { mathEnforcer } = require("./04.Math Enforcer");

describe("mathEnforcer test", () => {
  describe("addFive function test", () => {
    //negative tests for addFive
    it("return undefined - parameter is not a number, (string)", () => {
      assert.equal(mathEnforcer.addFive("Gosho"), undefined);
    });
    it("return undefined - parameter is not a number, (Array)", () => {
      assert.equal(mathEnforcer.addFive([]), undefined);
    });
    it("return undefined - parameter is not a number, (Object)", () => {
      assert.equal(mathEnforcer.addFive({}), undefined);
    });
    //positive tests for addFive
    it("return sum + 5", () => {
      assert.equal(mathEnforcer.addFive(15), 20);
    });
    it("return sum + 5", () => {
      assert.equal(mathEnforcer.addFive(15.5), 20.5);
    });
    it("return sum + 5", () => {
      assert.equal(mathEnforcer.addFive(-10), -5);
    });
  });

  describe("subtractTen function test", () => {
    //negative tests for subtractTen
    it("return undefined - parameter is not a number, (string)", () => {
      assert.equal(mathEnforcer.subtractTen("Gosho"), undefined);
    });
    it("return undefined - parameter is not a number, (Array)", () => {
      assert.equal(mathEnforcer.subtractTen([]), undefined);
    });
    it("return undefined - parameter is not a number, (Object)", () => {
      assert.equal(mathEnforcer.subtractTen({}), undefined);
    });
    //positive tests for subtractTen
    it("return sum + 5", () => {
      assert.equal(mathEnforcer.subtractTen(15), 5);
    });
    it("return sum - 10", () => {
      assert.equal(mathEnforcer.subtractTen(15.5), 5.5);
    });
    it("return sum - 10", () => {
      assert.equal(mathEnforcer.subtractTen(-15), -25);
    });
  });

  describe("sum function test", () => {
    //negative tests for sum
    it("return undefined - first param is a string", () => {
      assert.equal(mathEnforcer.sum("Gosho", 10), undefined);
    });
    it("return undefined - second param is a string", () => {
      assert.equal(mathEnforcer.sum(10, "Gosho"), undefined);
    });
    it("return undefined - both param is a strings", () => {
      assert.equal(mathEnforcer.sum("Pesho", "Gosho"), undefined);
    });
    //positive tests for sum
    it("return sum of two integer numbers", () => {
      assert.equal(mathEnforcer.sum(20, 10), 30);
    });
    it("return sum of two decimal numbers", () => {
      assert.equal(mathEnforcer.sum(20.4, 10.3), 30.7);
    });
    it("return sum of two negative numbers", () => {
      assert.equal(mathEnforcer.sum(-10, -5), -15);
    });
  });
});
