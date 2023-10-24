// test/assertEqualTest.js
const assert = require('chai').assert;
const assertEqual = require('../assertEqual');

describe("#assertEqual", () => {

  it("should return false for 'Lighthouse Labs' and 'Bootcamp'", () => {
    assert.notStrictEqual("Lighthouse Labs", "Bootcamp");
  });

  it("should return true for 1 and 1", () => {
    assert.strictEqual(1, 1);
  });

  it("should return true for 'Flowers' and 'Flowers'", () => {
    assert.strictEqual("Flowers", "Flowers");
  });

  it("should return false for 2 and 8", () => {
    assert.notStrictEqual(2, 8);
  });
});

