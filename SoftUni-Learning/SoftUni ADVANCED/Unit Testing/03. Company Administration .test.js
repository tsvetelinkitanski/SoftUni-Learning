const { companyAdministration } = require("./03. Company Administration ");
const { assert } = require("chai");

describe("companyAdministration tests", () => {
  describe("hiringEmployee function testing", () => {
    //Throw new Error You are Not Hired
    it("We are not looking workers for this position - QA Automation", () => {
      assert.throws(
        () =>
          companyAdministration.hiringEmployee("Pencho", "QA Automation", 7),
        `We are not looking for workers for this position.`
      );
    });
    it("We are not looking workers for this position - Technical manager", () => {
      assert.throws(
        () =>
          companyAdministration.hiringEmployee("Vasko", "Technical manager", 7),
        `We are not looking for workers for this position.`
      );
    });
    //Valid inputs 'You are hired'
    it("return you are successfully hired - greater than 3 yearsExp", () => {
      assert.equal(
        companyAdministration.hiringEmployee("Ivan", "Programmer", 4),
        `Ivan was successfully hired for the position Programmer.`
      );
    });
    it("return you are successfully hired - equal 3 yearsExp", () => {
      assert.equal(
        companyAdministration.hiringEmployee("Stamat", "Programmer", 3),
        `Stamat was successfully hired for the position Programmer.`
      );
    });
    // Valid inputs, but 'No you don't have enough experience :/'
    it("return you are not approved for this position :/ - less than 3 yearsExp", () => {
      assert.equal(
        companyAdministration.hiringEmployee("Gosho", "Programmer", 1),
        `Gosho is not approved for this position.`
      );
    });
    it("return you are not approved for this position :/ - less than 3 yearsExp", () => {
      assert.equal(
        companyAdministration.hiringEmployee("Igor", "Programmer", 2),
        `Igor is not approved for this position.`
      );
    });
  });
  describe("calculateSalary function testing", () => {
    //invalid inputs
    it("throw an Error, param is not a number - string", () => {
      assert.throws(
        () => companyAdministration.calculateSalary("Pesho"),
        "Invalid hours"
      );
    });
    it("throw an Error, param is not a number - array", () => {
      assert.throws(
        () => companyAdministration.calculateSalary([]),
        "Invalid hours"
      );
    });
    it("throw an Error, param is not an integer number", () => {
      assert.throws(
        () => companyAdministration.calculateSalary(-10),
        "Invalid hours"
      );
    });
    //Valid inputs
    it("return salary for employee", () => {
      assert.equal(companyAdministration.calculateSalary(65), 975);
    });
    it("return salary for employee with bonus for extra hours", () => {
      assert.equal(companyAdministration.calculateSalary(176), 3640);
    });
  });
  describe("firedEmployee function testing", () => {
    //Invalid inputs
    it("throw an Error, first param is not an array - string", () => {
      assert.throws(
        () => companyAdministration.firedEmployee("Pesho", 12),
        "Invalid input"
      );
    });
    it("throw an Error, first param is not an array - number", () => {
      assert.throws(
        () => companyAdministration.firedEmployee(12, 12),
        "Invalid input"
      );
    });
    it("throw an Error, first param is not a valid array - not strings", () => {
        assert.throws(
          () =>
            companyAdministration.firedEmployee(
              ["Petar", 12, 43],
              13
            ),
          "Invalid input"
        );
      });
    it("throw an Error, second param is not a number - string", () => {
      assert.throws(
        () =>
          companyAdministration.firedEmployee(
            ["Petar", "Ivan", "George"],
            "Pencho"
          ),
        "Invalid input"
      );
    });
 
    it("throw an Error, second param is not a number - object", () => {
      assert.throws(
        () =>
          companyAdministration.firedEmployee(["Petar", "Ivan", "George"], {}),
        "Invalid input"
      );
    });
    it("throw an Error, second param is outside from the limits of the array", () => {
      assert.throws(
        () =>
          companyAdministration.firedEmployee(["Petar", "Ivan", "George"], 5),
        "Invalid input"
      );
    });
    it("throw an Error, second param is outside from the limits of the array", () => {
      assert.throws(
        () =>
          companyAdministration.firedEmployee(["Petar", "Ivan", "George"], -2),
        "Invalid input"
      );
    });
    it("throw an Error, second param is outside from the limits of the array", () => {
      assert.throws(
        () =>
          companyAdministration.firedEmployee(["Petar", "Ivan", "George"], 3),
        "Invalid input"
      );
    });
    //Valid inputs
    it("return changed array, one of the employee is fired", () => {
      assert.equal(
        companyAdministration.firedEmployee(["Petar", "Ivan", "George"], 1),
        "Petar, George"
      );
    });
    it("return changed array, one of the employee is fired", () => {
      assert.equal(
        companyAdministration.firedEmployee(
          ["Petar", "Ivan", "George", "Stamat", "Igor"],
          3
        ),
        "Petar, Ivan, George, Igor"
      );
    });
  });
});
