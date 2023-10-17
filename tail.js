// Function implementation.
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
    return; // Exit function if test passes.
  }

  console.error(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
};

const tail = function(array) {
  return array.slice(1);
};

// Test Case 1: Check the returned array elements
const result = tail(["Hello"]);
assertEqual(result.length, 0); // Should pass; an array with only one element should yield an empty array for its tail.

// Test Case 2:
const result2 = tail([]);
assertEqual(result2.length, 0); // Should pass; as an empty array should yield empty for its tail.

// Test case 3 to check if tail function does not mutate the original array:
const originalArray = ["Hello", "Lighthouse", "Labs"];
const newArray = tail(originalArray);

assertEqual(originalArray.length, 3);  // Original array should still have 3 elements.
assertEqual(newArray.length, 2);  // New array should have 2 elements.

// Test case 4 to check first element of the returned array from the tail function:
assertEqual(newArray[0], "Lighthouse");  // First element of new array should be "Lighthouse".