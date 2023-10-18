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

//-----------------------------------------------------------------------

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

//-----------------------------------------------------------------------

// Create middle function that should return an array with only the middle element(s) of the provided array. This means that the length of the returned elements could vary.

// Edge-case 1: For arrays with one or two elements, there is no middle. Return an empty array.
// Edge-case 2: For arrays with odd number of elements, an array containing a single middle element should be returned.
// Edge-case 3: For arrays with an even number of elements, an array containing the two elements in the middle should be returned

// Create middle function which takes in one argument (array):
const middle = function(array) {
  // Initialize variable containing empty array:
  let middleElements = [];

  // If statements for edge-cases
  // Edge-case 1:
  if (array.length < 3) {
    return middleElements;
  }
  // Edge-case 2:
  if (array.length % 2 !== 0) {
    let middleIndex = Math.floor(array.length / 2);
    // Push results from conditionals to empty array:
    middleElements.push(array[middleIndex]);
    return middleElements;
  }
  // Edge-case 3:
  if (array.length % 2 === 0) {
    let middleFirstIndex = (array.length / 2) - 1;
    let middleSecondIndex = (array.length / 2);
    middleElements.push(array[middleFirstIndex], array[middleSecondIndex]);
    return middleElements;
  }
};

// TEST CODE:

// Test assertions for middle function:
// console.log(middle([1])); // => []
// console.log(middle([1, 2])); // => []

// console.log(middle([1, 2, 3])); // => [2]
// console.log(middle([1, 2, 3, 4, 5])); // => [3]

// console.log(middle([1, 2, 3, 4])); // => [2, 3]
// console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]

// Assertion tests for the middle function:
assertArraysEqual(middle([1]), []); // Should pass
assertArraysEqual(middle([1, 2]), []); // Should pass
assertArraysEqual(middle([1, 2, 3]), [2]); // Should pass
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); // Should pass
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); // Should pass
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); // Should pass
