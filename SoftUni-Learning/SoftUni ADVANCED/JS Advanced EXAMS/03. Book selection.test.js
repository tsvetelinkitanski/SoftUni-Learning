const { bookSelection } = require("./03. Book selection");
const { assert } = require("chai");

describe("bookSelection function - testing", () => {
  // Negative results

  it('return "this book is not suitable for kids", with first param - "Thriller"', () => {
    assert.equal(
      bookSelection.isGenreSuitable("Thriller", 10),
      `Books with ${"Thriller"} genre are not suitable for kids at ${10} age`
    );
  });
  it('"return "this book is not suitable for kids", with first param - "Horror"', () => {
    assert.equal(
      bookSelection.isGenreSuitable("Horror", 10),
      `Books with ${"Horror"} genre are not suitable for kids at ${10} age`
    );
  });

  // Positive results

  it('"return "Those books are suitable", with first param - casual', () => {
    assert.equal(
      bookSelection.isGenreSuitable("Romantic", 16),
      "Those books are suitable"
    );
  });
  it('"return "Those books are suitable", with first param - "Thriller"', () => {
    assert.equal(
      bookSelection.isGenreSuitable("Thriller", 15),
      "Those books are suitable"
    );
  });
});
describe("isItAffordable function - testing", () => {
  //Invalid inputs

  it("throw Error if first param is not a number - string", () => {
    assert.throws(
      () => bookSelection.isItAffordable("Gosho", 12),
      "Invalid input"
    );
  });
  it("throw Error if second param is not a number - string", () => {
    assert.throws(
      () => bookSelection.isItAffordable(12, "Gosho"),
      "Invalid input"
    );
  });
  it("throw Error if second param is not a number - array", () => {
    assert.throws(() => bookSelection.isItAffordable(12, []), "Invalid input");
  });
  it("throw Error if first param is not a number - array", () => {
    assert.throws(() => bookSelection.isItAffordable([], 15), "Invalid input");
  });

  // Positive Inputs
  it("return sumLeft if you have enough money", () => {
    assert.equal(
      bookSelection.isItAffordable(20, 50),
      `Book bought. You have ${30}$ left`
    );
  });
  it("return \"You don't have enough money\" if you don't have enough money", () => {
    assert.equal(
      bookSelection.isItAffordable(30, 20),
      "You don't have enough money"
    );
  });
});
describe("suitableTitles function - testing", () => {
  //Invalid inputs
  it("return 'Invalid input' - first params is not an Array - string", () => {
    assert.throws(
      () => bookSelection.suitableTitles("Gosho", "Pesho"),
      "Invalid input"
    );
  });
  it("return 'Invalid input' - first params is not an Array - number", () => {
    assert.throws(
      () => bookSelection.suitableTitles(12, "Pesho"),
      "Invalid input"
    );
  });
  it("return 'Invalid input' - first params is not an Array - number", () => {
    assert.throws(() => bookSelection.suitableTitles({}, []), "Invalid input");
  });
  //Valid inputs
  it("return title for book", () => {
    assert.equal(
      bookSelection.suitableTitles(
        [{ title: "The Da Vinci Code", genre: "Thriller" }],
        "Thriller"
      ),
      "The Da Vinci Code"
    );
  });
});
