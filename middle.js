const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

// Create middle function that should return an array with only the middle element(s) of the provided array. This means that the length of the returned elements could vary.

// Edge-case 1: For arrays with one or two elements, there is no middle. Return an empty array.
// Edge-case 2: For arrays with odd number of elements, an array containing a single middle element should be returned.
// Edge-case 3: For arrays with an even number of elements, an array containing the two elements in the middle should be returned

// Create middle function which takes in one argument (array):
const middle = function(array) {
  // Initialize variable containing empty array:
  let middleElements = [];
  let middleGround = array.length / 2;
  // If statements for edge-cases
  // Edge-case 1:
  if (array.length < 3) {
    return middleElements;
  }
  // Edge-case 2:
  if (array.length % 2 !== 0) {
    let middleIndex = Math.floor(middleGround);
    // Push results from conditionals to empty array:
    middleElements.push(array[middleIndex]);
  }
  // Edge-case 3:
  if (array.length % 2 === 0) {
    let middleFirstIndex = (middleGround) - 1;
    let middleSecondIndex = (middleGround);
    middleElements.push(array[middleFirstIndex], array[middleSecondIndex]);
  }
  return middleElements;
};

module.exports = middle;