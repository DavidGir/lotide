const assertArraysEqual = require("../assertArraysEqual");
const eqArrays = require("../eqArrays");


// Test code for assertArraysEqual:
assertArraysEqual([1, 2, 3], [1, 2, 3]); // Should pass as equal
assertArraysEqual([1, 2, 3], [1, 2, 5]); // SHould pass as not equal