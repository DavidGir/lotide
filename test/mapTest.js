const assert = require('chai').assert;
const map = require('../map');


// Assertion tests:

describe("#map function", () => {
  it("should return ['g', 'c', 't', 'm', 't'] when passed ['ground', 'control', 'to', 'major', 'tom'] and the function word => word[0]", () => {
    const words = ["ground", "control", "to", "major", "tom"];
    const result = map(words, word => word[0]);
    assert.deepEqual(result, ['g', 'c', 't', 'm', 't']);
  });

  it("should return [3, 5, 4] when passed ['cat', 'dioji', 'bird'] and the function word => word.length", () => {
    const result = map(["cat", "dioji", "bird"], word => word.length);
    assert.deepEqual(result, [3, 5, 4]);
  });

  it("should return [2, 4, 6] when passed [1, 2, 3] and the function num => num * 2", () => {
    const result = map([1, 2, 3], num => num * 2);
    assert.deepEqual(result, [2, 4, 6]);
  });

  it("should return ['A', 'B', 'C'] when passed ['a', 'b', 'c'] and the function char => char.toUpperCase()", () => {
    const result = map(["a", "b", "c"], char => char.toUpperCase());
    assert.deepEqual(result, ['A', 'B', 'C']);
  });
});