const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

// -----------------------------------------------------------------------------

// Our map function will take in two arguments:

// 1. An array to map
// 2. A callback function

// The map function will return a new array based on the results of the callback function.

const words = ["ground", "control", "to", "major", "tom"];

// Declare map function:
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const results1 = map(words, word => word[0]);

console.log(results1);

module.exports = map;
