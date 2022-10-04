const { lookupChar } = require("./03.CharLookUp");
const { assert } = require("chai");

describe("charLookUp function testing", () => {
  //Invalid tests
  it("Returning undefined - both of parameters is invalid", () => {
    assert.equal(lookupChar(10, "Gosho"), undefined);
  });
  it("Returning undefined - first parameter is invalid, second is valid", () => {
    assert.equal(lookupChar(10, 20), undefined);
  });
  it("Returning undefined - second of parameter is invalid, first is valid", () => {
    assert.equal(lookupChar("Pesho", "Gosho"), undefined);
  });
  it("Return Incorrect index - index is bigger from string.length", () => {
    assert.equal(lookupChar("Gosho", 100), "Incorrect index");
  });
  it("Return Incorrect index - index is negative number", () => {
    assert.equal(lookupChar("Gosho", -10), "Incorrect index");
  });
  it("Return undefined - index is decimal number", () => {
    assert.equal(lookupChar("Gosho", 10.5), undefined);
  });
  // Valid tests
  it("Return specified char at this index", () => {
    assert.equal(lookupChar("Pesho", 2), "s");
  });
  it("Return char at this index, when index is only one char", () => {
    assert.equal(lookupChar("P", 0), "P");
  });
});
