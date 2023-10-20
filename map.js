// Using function eqArrays for checking array equality and returns result:
const eqArrays = function(array1, array2) {
  // Check if both arrays have same length, if not return false.
  if (array1.length !== array2.length) {
    return false;
  }

  // For loop to iterate through elements of the first array.
  for (let i = 0; i < array1.length; i++) {
    // Compare both array indices
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  //Returns true if not false
  return true;
};

// -----------------------------------------------------------------------------

// Creating function assertArraysEqual for handling output based on the result through call function:
const assertArraysEqual = function(array1, array2) {
  // Call function eqArrays with array1 and array2 as arguments:
  let isMatch = eqArrays(array1, array2);

  //Print results If isMatch true or false
  if (isMatch) {
    console.log(`✅✅ The arrays ${array1} and ${array2} are equal.`);
  }

  if (!isMatch) {
    console.log(`❌❌ The arrays ${array1} and ${array2} are not equal.`);
  }
};


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

// Assertion tests:

assertArraysEqual(map(["cat", "dioji", "bird"], word => word.length), [3, 5, 4]);  // Should pass
assertArraysEqual(map([1, 2, 3], num => num * 2), [2, 4, 6]);  // Should pass
assertArraysEqual(map(["a", "b", "c"], char => char.toUpperCase()), ["A", "B", "C"]);  // Should pass

