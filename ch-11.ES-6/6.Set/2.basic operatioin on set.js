// Access Set Elements
// You can access Set elements using the values() method and check if there is an element inside Set using has() method.
//
//  example,

const numArray = new Set([1, 2, 3, 1, 2, 3, 4, 5, 6, 7, 8, 9]);

console.log("numArray values: ", numArray.values());

// using has() method

console.log("numArray has 1: ", numArray.has(1)); // wil return true

// adding New Elements
// You can add elements to a Set using the add() method.
numArray.add(24);

console.log("numArray after adding new element: ", numArray);

// Removing Elements
// You can use the clear() and the delete() method to remove elements from a Set.

// The delete() method removes a specific element from a Set.

// example

numArray.delete(1);

console.log("numArray after deleting 1: ", numArray);

// clear()

numArray.clear();

console.log("numArray after clearing all elements : ", numArray);

// iterate Sets
// You can iterate through the Set elements using the for...of loop or forEach() method. The elements are accessed in the insertion order. For example,

const numArray2 = new Set([1, 2, 3, 1, 2, 3, 4, 5, 6, 7, 8, 9]);

for (let num of numArray2) {
  console.log(num);
}
