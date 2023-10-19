// Function implementation.
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.error(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Test Code.
assertEqual("Lighthouse Labs", "Bootcamp"); // Should fail.
assertEqual(1, 1); // Should pass.
assertEqual("Flowers", "Flowers"); // Should pass.
assertEqual(2, 8); // Should fail.