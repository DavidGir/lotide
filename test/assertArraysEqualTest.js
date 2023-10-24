const assert = require('chai').assert;
const assertArraysEqual = require("../assertArraysEqual");

// Test code for assertArraysEqual:
describe("#assertArraysEqual", () => {

  it("should return true for [1, 2, 3] and [1, 2, 3]", () => {
    assert.deepEqual([1, 2, 3], [1, 2, 3]);
  });

  it("should return false for [1, 2, 3] and [1, 2, 5]", () => {
    assert.notDeepEqual([1, 2, 3], [1, 2, 5]);
  });
});