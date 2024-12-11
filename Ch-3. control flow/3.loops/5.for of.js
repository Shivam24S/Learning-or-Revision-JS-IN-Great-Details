// JavaScript for…of statement iterates over the values of an iterable object (like Array, Map, Set, arguments object, …,etc), executing statements for each value of the object.

// JavaScript for…of loop makes it easy to loop through the elements without needing to handle the index or iteration logic which makes the code short and easier to understand.

let numValue = [1, 2, 3, 4, 5];

for (let i of numValue) {
  console.log(i);
}

let str = "hello world";

for (let op of str) {
  console.log("str op", op);
}

// another example

let fruits = ["apple", "banana", "orange", "mango"];

for (let i of fruits) {
  console.log("fruits op =>", i);
}
