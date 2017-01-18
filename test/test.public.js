var assert = require("chai").assert;
var fizzbuzz = require("../app.js").fizzbuzz;

describe("FizzBuzz", function() {
  it("fizzbuzz(1) == 1", function() {
    assert.equal(fizzbuzz(1), 1);
  });
  it("fizzbuzz(3) == 'Fizz'", function() {
    assert.equal(fizzbuzz(3), 'Fizz');
  });
  it("fizzbuzz(5) == 'Buzz'", function() {
    assert.equal(fizzbuzz(5), "Buzz");
  });
  it("fizzbuzz(15) == 'FizzBuzz'", function() {
    assert.equal(fizzbuzz(15), "FizzBuzz");
  });
});