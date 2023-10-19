// Function assertEqual is used to output assertion tests results:

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.error(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

// -------------------------------------------------------------------------

// Create function should take in a sentence (as a string) and then return a count of each of the letters in that sentence.
// For example, countLetters('LHL') should return results indicating that L appears twice, and H once.

// Declare countLetters function that takes a sentence (string):
const countLetters = function(string) {
//Initialize variable as an empty object:
  const count = {};
  // For..of loop to go through string:
  for (let char of string) {
    //Check if space between characters; if not, continues with count:
    if (char !== " ") {
      // If character is in count=>increment; else initialize to 1:
      if (count[char]) {
        count[char]++;
      } else {
        count[char] = 1;
      }
    }
  }
  return count;
};

//Assertion tests:

console.log(countLetters("I love chicken")); // => { I: 1, l: 1, o: 1, v: 1, e: 2, c: 2, h: 1, i: 1, k: 1, n: 1 }




