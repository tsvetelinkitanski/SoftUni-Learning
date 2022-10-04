const { isOddOrEven } = require("./02.EvenOrOdd");
const { assert } = require("chai");

describe("isOddOrEven tests functions", () => {
  it("Invalid input with number", () => {
    assert.equal(isOddOrEven(10), undefined);
  });
  it("Invalid input with array", () => {
    assert.equal(isOddOrEven([]), undefined);
  });
  it("Invalid input with object", () => {
    assert.equal(isOddOrEven({}), undefined);
  });

  it("Should return even", () => {
    assert.equal(isOddOrEven("PeshoU"), "even");
  });
  it("Should return odd", () => {
    assert.equal(isOddOrEven("Pesho"), "odd");
  });
});
