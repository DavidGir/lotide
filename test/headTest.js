// test/head.js
const assertEqual = require('../assertEqual');
const head = require('../head');

// Test Code for head function:
assertEqual(head([5,6,7]), 5); // Should pass.
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"); // Should pass.
assertEqual(head([]), 5); // Should fail and head be undefined.