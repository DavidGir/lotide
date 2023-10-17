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

// Test Case 2
const result2 = tail([]);
assertEqual(result2[0], "Labs"); // Should fail; as an empty array should yield empty undefined for its tail.