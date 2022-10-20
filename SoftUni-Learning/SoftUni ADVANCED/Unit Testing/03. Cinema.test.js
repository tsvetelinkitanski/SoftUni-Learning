const cinema = require("./03. Cinema");
const { assert } = require("chai");

describe("cinema testing", () => {
  describe("showMovies function tests", () => {
    //Negative result
    it("return - no movie to show, array.length is 0", () => {
      assert.equal(
        cinema.showMovies([]),
        "There are currently no movies to show."
      );
    });
    //Positive result
    it("return movies", () => {
      assert.equal(
        cinema.showMovies([
          "The tomorrow war",
          "Joker",
          "Cocolandia",
          "King Kong",
        ]),
        "The tomorrow war, Joker, Cocolandia, King Kong"
      );
    });
  });
  describe("ticketPrice function tests", () => {
    //Positive results
    it("return the price for Premier is 12.0", () => {
      assert.equal(cinema.ticketPrice("Premiere"), 12.0);
    });
    it("return the price for Normal is 7.5", () => {
      assert.equal(cinema.ticketPrice("Normal"), 7.5);
    });
    it("return the price for Discount is 5.5", () => {
      assert.equal(cinema.ticketPrice("Discount"), 5.5);
    });
    //Negative results
    it("return Invalid projection type", () => {
      assert.throws(
        () => cinema.ticketPrice("Premier"),
        "Invalid projection type."
      );
    });
    it("return Invalid projection type", () => {
      assert.throws(() => cinema.ticketPrice([]), "Invalid projection type.");
    });
    it("return Invalid projection type", () => {
      assert.throws(() => cinema.ticketPrice({}), "Invalid projection type.");
    });
    it("return Invalid projection type", () => {
      assert.throws(() => cinema.ticketPrice(12), "Invalid projection type.");
    });
  });
  describe("swapSeatsInHall function tests", () => {
    //Invalid inputs
    it("return invalid input, second param is not exist", () => {
      assert.equal(
        cinema.swapSeatsInHall(12, undefined),
        "Unsuccessful change of seats in the hall."
      );
    });
    it("return invalid input, first param is not exist", () => {
      assert.equal(
        cinema.swapSeatsInHall(undefined, 12),
        "Unsuccessful change of seats in the hall."
      );
    });
    it("return invalid input, first param is not an integer number - floating point number", () => {
      assert.equal(
        cinema.swapSeatsInHall(12.4, 4),
        "Unsuccessful change of seats in the hall."
      );
    });
    it("return invalid input, second param is not an integer number - floating point number", () => {
      assert.equal(
        cinema.swapSeatsInHall(4, 12.4),
        "Unsuccessful change of seats in the hall."
      );
    });
    it("return invalid input, first param is not a number - string", () => {
      assert.equal(
        cinema.swapSeatsInHall("Gosho", 4),
        "Unsuccessful change of seats in the hall."
      );
    });
    it("return invalid input, second param is not a number - string", () => {
      assert.equal(
        cinema.swapSeatsInHall(4, "Stamat"),
        "Unsuccessful change of seats in the hall."
      );
    });
    it("return invalid input, first param is not a number - array", () => {
      assert.equal(
        cinema.swapSeatsInHall([], 4),
        "Unsuccessful change of seats in the hall."
      );
    });
    it("return invalid input, second param is not a number - array", () => {
      assert.equal(
        cinema.swapSeatsInHall(4, []),
        "Unsuccessful change of seats in the hall."
      );
    });
    it("return invalid input, first param is greater than the capacity of hall", () => {
      assert.equal(
        cinema.swapSeatsInHall(21, 12),
        "Unsuccessful change of seats in the hall."
      );
    });
    it("return invalid input, first param is greater than the capacity of hall", () => {
      assert.equal(
        cinema.swapSeatsInHall(25, 12),
        "Unsuccessful change of seats in the hall."
      );
    });
    it("return invalid input, second param is greater than the capacity of hall", () => {
      assert.equal(
        cinema.swapSeatsInHall(12, 21),
        "Unsuccessful change of seats in the hall."
      );
    });
    it("return invalid input, second param is greater than the capacity of hall", () => {
      assert.equal(
        cinema.swapSeatsInHall(12, 27),
        "Unsuccessful change of seats in the hall."
      );
    });
    it("return invalid input, first param is less than 0", () => {
      assert.equal(
        cinema.swapSeatsInHall(-2, 14),
        "Unsuccessful change of seats in the hall."
      );
    });
    it("return invalid input, second param is less than 0", () => {
      assert.equal(
        cinema.swapSeatsInHall(14, -1),
        "Unsuccessful change of seats in the hall."
      );
    });
    it("return invalid input, first param is 0", () => {
      assert.equal(
        cinema.swapSeatsInHall(0, 14),
        "Unsuccessful change of seats in the hall."
      );
    });
    it("return invalid input, second param is 0", () => {
      assert.equal(
        cinema.swapSeatsInHall(14, 0),
        "Unsuccessful change of seats in the hall."
      );
    });
    it("return invalid input, the params are equal", () => {
      assert.equal(
        cinema.swapSeatsInHall(6, 6),
        "Unsuccessful change of seats in the hall."
      );
    });
    //Valid inputs
    it("return successfull change", () => {
      assert.equal(
        cinema.swapSeatsInHall(14, 3),
        "Successful change of seats in the hall."
      );
    });
    it("return successfull change", () => {
      assert.equal(
        cinema.swapSeatsInHall(10, 14),
        "Successful change of seats in the hall."
      );
    });
    it("return successfull change", () => {
      assert.equal(
        cinema.swapSeatsInHall(20, 14),
        "Successful change of seats in the hall."
      );
    });
    it("return successfull change", () => {
      assert.equal(
        cinema.swapSeatsInHall(3, 20),
        "Successful change of seats in the hall."
      );
    });
  });
});
