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

// ----------------------------------------------------------------------------

// It will take in two parameters as well:

// The array to work with
// The callback (which Lodash calls "predicate")

//The function will return a "slice of the array with elements taken from the beginning." It should keep going until the callback/predicate returns a truthy value.

// To keep things simple, the callback should only be provided one value: The item in the array.

const takeUntil = function(array, callback) {
  // Initialize an empty array to hold elements that satisfy callback condition:
  const results = [];
  // Loop through each element of the input array:
  for (let item of array) {
    // Use callback function to check if element should terminate the loop
    //The callback is expected to return true if loop shoudl terminate:
    if (callback(item) !== true) {
      // Push elements that don't satisfy condition in the empty results array:
      results.push(item);
      // If element satisfies condition; return results:
    } else {
      return results;
    }
  }
};

// Expected input:

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);


// // Expected output:
// [ 1, 2, 5, 7, 2 ]
// --
// [ 'I\'ve', 'been', 'to', 'Hollywood' ]

// Assertion tests:

assertArraysEqual(takeUntil(data1, x => x < 0), [1, 2, 5, 7, 2]); // Should pass

assertArraysEqual(takeUntil(data2, x => x === ','), ["I've", "been", "to", "SouthCarolina"]); // Should fail
