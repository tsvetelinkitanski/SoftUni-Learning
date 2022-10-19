const { library } = require("./03.Library");
const { assert } = require("chai");

describe("library functions", () => {
  describe("calcPriceOfBook function testing", () => {
    //Invalid inputs
    it("throw an Error, first param is not a string - number", () => {
      assert.throws(() => library.calcPriceOfBook(23, 14), "Invalid input");
    });
    it("throw an Error, first param is not a string - array", () => {
      assert.throws(() => library.calcPriceOfBook([], 14), "Invalid input");
    });
    it("throw an Error, second param is not a number - string", () => {
      assert.throws(
        () => library.calcPriceOfBook("The Mountain", "Pesho"),
        "Invalid input"
      );
    });
    it("throw an Error, second param is not a number - object", () => {
      assert.throws(
        () => library.calcPriceOfBook("The Mountain", {}),
        "Invalid input"
      );
    });
    it("throw an Error, second param is not an integer number - floating point number", () => {
      assert.throws(
        () => library.calcPriceOfBook("The Mountain", 1982.2),
        "Invalid input"
      );
    });
    //Valid Inputs
    it("calculate the price for book after 1980's", () => {
      assert.equal(
        library.calcPriceOfBook("Harry Potter", 1997),
        `Price of Harry Potter is 20.00`
      );
    });
    it("calculate the price for book before 1980's", () => {
      assert.equal(
        library.calcPriceOfBook("Peter Pan", 1902),
        `Price of Peter Pan is 10.00`
      );
    });
    it("calculate the price for book since 1980's", () => {
      assert.equal(
        library.calcPriceOfBook("Midnight's Children", 1980),
        `Price of Midnight's Children is 10.00`
      );
    });
  });
  describe("findBook function testing", () => {
    it("return book is not available", () => {
      assert.throws(
        () => library.findBook([], "Cocolandia"),
        "No books currently available"
      );
    });
    it("return book is found", () => {
      assert.equal(
        library.findBook(["Troy", "Life Style", "Torronto"], "Troy"),
        "We found the book you want."
      );
    });
    it("return the book you are looking for is not here ", () => {
      assert.equal(
        library.findBook(["Troy", "Life Style", "Torronto"], "Cocolandia"),
        "The book you are looking for is not here!"
      );
    });
  });
  describe("arrangeTheBooks function testing", () => {
    //Invalid inputs
    it("throw an Error, param is not a number - string", () => {
      assert.throws(() => library.arrangeTheBooks("Pencho"), "Invalid input");
    });
    it("throw an Error, param is not a number - array", () => {
      assert.throws(() => library.arrangeTheBooks([]), "Invalid input");
    });
    it("throw an Error, param is not an integer number - floating point number", () => {
      assert.throws(() => library.arrangeTheBooks(14.5), "Invalid input");
    });
    it("throw an Error, param is not a positive number - negative number", () => {
      assert.throws(() => library.arrangeTheBooks(-12), "Invalid input");
    });
    //Valid inputs
    it("return, the books are arranged", () => {
      assert.equal(
        library.arrangeTheBooks(16),
        "Great job, the books are arranged."
      );
    });
    it("return, the books are arranged", () => {
      assert.equal(
        library.arrangeTheBooks(37),
        "Great job, the books are arranged."
      );
    });
    it("return, the books are arranged", () => {
      assert.equal(
        library.arrangeTheBooks(40),
        "Great job, the books are arranged."
      );
    });
    it("return, Insufficient space", () => {
      assert.equal(
        library.arrangeTheBooks(47),
        "Insufficient space, more shelves need to be purchased."
      );
    });
    it("return, Insufficient space", () => {
      assert.equal(
        library.arrangeTheBooks(41),
        "Insufficient space, more shelves need to be purchased."
      );
    });
  });
});
