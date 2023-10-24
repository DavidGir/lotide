// test/tailTest.js
const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail function", () => {
  it("should return an empty array for an empty input array", () => {
    assert.deepEqual(tail([]), []);
  });
  it("should return ['Lighthouse', 'Labs'] for an input array of ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });
  it("should have 'Lighthouse' as the first element of the new array", () => {
    const inputArray = ["Hello", "Lighthouse", "Labs"];
    const expectedArray = tail(inputArray);
    assert.equal(expectedArray[0], "Lighthouse");
  });
});
