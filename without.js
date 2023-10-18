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

// Create function that takes in a source array and a itemsToRemove array. It should return a new array with only those elements from source that are not present in the itemsToRemove array.

const without = function(sourceArray, itemsToRemoveArray) {
  // Initialize variable containing empty array list:
  let newArray = [];
  // for loop to iterate through arguments:
  for (let element of sourceArray) {
    // If element does not exist in itemsToRemoveArray:
    if (!itemsToRemoveArray.includes(element)) {
      // Add to newArray:
      newArray.push(element);
    }
  }
  //Return new array
  return newArray;
};

const words = ["hello", "world", "lighthouse"];
const newWords = without(words, ["lighthouse"]); // Capture return value to check both the new array and the original array
console.log(newWords); // Should output: ["hello", "world"]

// Test to ensure the original array is not modified
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

// Other test cases
console.log(without([1, 2, 3], [1])); // Should output: [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])); // Should output: ["1", "2"]
console.log(without([1, "2", 3], ["2"])); // Should output: [1, 3]
console.log(without([], [1,2,3])); // Should output: []
console.log(without([1,2,3], [])); // Should output: [1,2,3]