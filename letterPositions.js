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

// ---------------------------------------------------------------------------

// Create a new function letterPositions which will return all the indices (zero-based positions) in the string where each character is found.
// For each letter, instead of returning just one number to represent its number of occurrences, multiple numbers may be needed to represent all the places in the string that it shows up.

//Resulting object would map each letter in the string to an array of indices where the letter appears. Spaces should be ignored.


const letterPositions = function(sentence) {
  // Initialize variable to empty object:
  const results = {};
  // For loop to iterate through string:
  for (let i = 0; i < sentence.length; i++) {
    const letter = sentence[i];
    // Ignore spaces:
    if (letter !== " ") {
      // Check if this letter is already in the results object
      if (results[letter]) {
        // If it is push the current index to the array
        results[letter].push(i);
      } else {
        // If it's not, add a new array with the current index
        results[letter] = [i];
      }
    }
  }
  return results;
};

// Test code:
assertArraysEqual(letterPositions("hello").e, [1]); // should pass
assertArraysEqual(letterPositions("hello").l, [2, 3]); // should pass