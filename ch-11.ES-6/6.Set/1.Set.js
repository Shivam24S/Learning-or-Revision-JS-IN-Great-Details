// The JavaScript ES6 has introduced two new data structures, i.e Set and WeakSet.

// Set is similar to an array that allows us to store multiple items like numbers, strings, objects, etc. However, unlike an array, a set cannot contain duplicate values.

// example

const numArray = new Set([1, 2, 3, 1, 2, 3, 4, 5, 6, 7, 8, 9]);

// type of set is  an object

console.log("type of set: ", typeof numArray);

// now numArray has multiple similar Array  elements but it's not repeat in OP

console.log("numArray :", numArray);
