// Function implementation.
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
    return; // Exit function if test passes.
  }

  console.error(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
};

// Test Code.
assertEqual("Lighthouse Labs", "Bootcamp"); // Should fail.
assertEqual(1, 1); // Should pass.
assertEqual("Flowers", "Flowers"); // Should pass.
assertEqual(2, 8); // Should fail.