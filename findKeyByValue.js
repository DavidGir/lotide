// Function implementation.
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.error(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

// ----------------------------------------------------------------------------

// Implement the function findKeyByValue which takes in an object and a value. It should scan the object and return the first key which contains the given value. If no key with that given value is found, then it should return undefined.

const findKeyByValue = function(object, value) {
  
  // Get an array of keys from the object param:
  const keys = Object.keys(object);
  // for loop through each key of object:
  for (const key of keys) {
    // Check if the value associated with the key matches the target value:
    if (object[key] === value) {
      return key;
    }
  }
  // If the function has checked all keys and hasn't returned yet, return undefined:
  return undefined;
};

// Test cases assertions:

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, ""), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), "comedy");