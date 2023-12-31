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

// ----------------------------------------------------------------------------

// Function implementation for assertion tests:
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.error(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};


// ----------------------------------------------------------------------------

// Implement the definition for function eqObjects which will take in two objects and returns true or false, based on a perfect match.

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!

//Function to check equality of objects:
const eqObjects = function(object1, object2) {
  
  // Get the keys from both objects:
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);

  // Determine if both have same number of keys:
  if (keys1.length !== keys2.length) {
    return false;
  }

  // Loop through keys of first object:
  for (const key of keys1) {
    // Check if value of the current key in both objects is an array:
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      // If it is array uses eqArrays (call function) to compare arrays:
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
      // Check if values for the same key in both objects match:
    } else if (object1[key] !== object2[key]) {
      return false;
    }
  }
  // Return true if all passed:
  return true;
};

// Assertion test code:

const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
eqObjects(multiColorShirtObject, anotherMultiColorShirtObject); // => true
assertEqual(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject), true);

const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject); // => false
assertEqual(eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject), false);

