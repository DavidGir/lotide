const assert = require('chai').assert;
const middle = require('../middle');


describe("#middle function", () => {
  it("should return an empty array for an input array of [1]", () => {
    assert.deepEqual(middle([1]), []);
  });
  it("should return an empty array for an input array of [1, 2]", () => {
    assert.deepEqual(middle([1, 2]), []);
  });
  it("should return the middle element [2] for an input array of [1, 2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });
  it("should return the middle elements [2, 3] for an input array of [1, 2, 3, 4]", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });
  it("should return the middle element ['b'] for an input array of ['a', 'b', 'c']", () => {
    assert.deepEqual(middle(["a", "b", "c"]), ["b"]);
  });
  it("should not modify the original array", () => {
    const inputArray = ["Hello", "Lighthouse", "Labs"];
    middle(inputArray);
    assert.deepEqual(inputArray, ["Hello", "Lighthouse", "Labs"]);
  });
});
