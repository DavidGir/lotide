// test/assertEqualTest.js
const assertEqual = require('../assertEqual');


// Test Code for assertEqual function:
assertEqual("Lighthouse Labs", "Bootcamp"); // Should fail.
assertEqual(1, 1); // Should pass.
assertEqual("Flowers", "Flowers"); // Should pass.
assertEqual(2, 8); // Should fail.

