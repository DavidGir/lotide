const eqArrays = require('./eqArrays');

// Creating function assertArraysEqual for handling output based on the result through call function:
const assertArraysEqual = function(array1, array2) {
  // Call function eqArrays with array1 and array2 as arguments:
  let isMatch = eqArrays(array1, array2);

  //Print results If isMatch true or false
  if (isMatch) {
    console.log(`✅✅ Assertion passed: ${array1} and ${array2}`);
  } else {
    console.log(`❌❌ Assertion failed: ${array1} and ${array2}`);
  }
};

module.exports = assertArraysEqual;