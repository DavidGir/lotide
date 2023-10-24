# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @davidgir/lotide`

**Require it:**

`const _ = require('@davidgir/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

## Function Descriptions

* `head(array)`: Takes an array as an argument and returns the first element.
* `tail(array)`: Takes an array and returns a new array with all elements except the first.
* `middle(array)`: Returns the middle element of an array; if the array has an even number of elements, it returns an array containing the two middle elements.
* `assertArraysEqual(arr1, arr2)`: Compares two arrays and prints an assertion message indicating if they are equal or not.
* `assertEqual(val1, val2)`: Compares two values (can be of any type) and prints an assertion message indicating if they are equal or not.
* `assertObjectsEqual(obj1, obj2)`: Compares two objects and prints an assertion message indicating if they are deeply equal or not.
* `countLetters(string)`: Takes a string and returns an object that counts the occurrence of each letter in the string.
* `countOnly(array, itemsToCount)`: Takes an array and an object specifying what to count. Returns an object representing the counts of each specified element.
* `eqArrays(arr1, arr2)`: Takes two arrays and returns `true` if they are deeply equal or `false` otherwise.
* `eqObjects(obj1, obj2)`: Takes two objects and returns `true` if they are deeply equal or `false` otherwise.
* `findKey(object, callback)`: Takes an object and a callback function, returns the first key for which the callback returns a truthy value.
* `findKeyByValue(object, value)`: Searches for a key in an object where the key's value matches the provided value.
* `flatten(array)`: Takes a nested array and returns a new flat array.
* `letterPositions(sentence)`: Takes a string and returns an object with the indices of each letter in the string.
* `map(array, callback)`: Takes an array and a callback function, returns a new array with each element being the result of the callback function.
* `takeUntil(array, callback)`: Takes an array and a callback function, returns a new array with elements from the beginning of the original array until the callback function returns a truthy value.
* `without(array, itemsToRemove)`: Takes an array and an array of items to remove, returns a new array with all elements except those specified in `itemsToRemove`.

