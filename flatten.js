const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');


// Create a function flatten which will take in an array containing elements including nested arrays of elements, and return a "flattened" version of the array.

const flatten = function(arr) {
  // Initialize empty array to contain our flattened array:
  const flattenedArray = [];
  // Loop through array using recursion:
  arr.forEach(element => {
    if (Array.isArray(element)) {
      // Initialize variable returned from the recursive call; rather than pushing a nested array in the empty array we need to spread individual elements using the spread operator (...):
      const subArray = flatten(element);
      flattenedArray.push(...subArray);
    } else {
      // Else push element itself to the flattened array:
      flattenedArray.push(element);
    }
  });
  // Return flattened array:
  return flattenedArray;
};

// Expected input:
const inputArray = [1, 2, [3, 4], 5, [6]];
const resultArray = flatten(inputArray);
// Print to console; expected output => [1, 2, 3, 4, 5, 6]
console.log(resultArray);

// Test code:
assertArraysEqual(eqArrays(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]), true);
assertArraysEqual(eqArrays(flatten([1, 2, 3, 4, 5]), [1, 2, 3, 4, 5]), true);
assertArraysEqual(eqArrays(flatten([]), []), true);
assertArraysEqual(eqArrays(flatten([1, [2, [3, [4]]], 5]), [1, 2, 3, 4, 5]), true);
