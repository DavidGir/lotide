const assert = require('chai').assert;
const flatten = require('../flatten');

// Test code:
describe("#flatten", () => {

  it("should return a flattened array [1, 2, 3, 4, 5, 6] when input is [1, 2, [3, 4], 5, [6]]", () => {
    assert.deepEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
  });

  it("should return the same array [1, 2, 3, 4, 5] when input is [1, 2, 3, 4, 5]", () => {
    assert.deepEqual(flatten([1, 2, 3, 4, 5]), [1, 2, 3, 4, 5]);
  });

  it("should return an empty array [] when input is an empty array []", () => {
    assert.deepEqual(flatten([]), []);
  });

  it("should return a flattened array [1, 2, 3, 4, 5] when input is [1, [2, [3, [4]]], 5]", () => {
    assert.deepEqual(flatten([1, [2, [3, [4]]], 5]), [1, 2, 3, 4, 5]);
  });
});