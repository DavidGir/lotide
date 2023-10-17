// Function implementation.
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
    return; // Exit function if test passes.
  }

  console.error(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
};

const head = function(array) {
  return array[0];
};

// Test Code.
assertEqual(head([5,6,7]), 5); // Should pass.
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"); // Should pass.
assertEqual(head([]), 5); // Should fail and head be undefined.
