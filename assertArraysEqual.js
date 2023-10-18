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

assertArraysEqual([1, 2, 3], [1, 2, 3]); // Should pass as equal
assertArraysEqual([1, 2, 3], [1, 2, 5]); // SHould pass as not equal
