//  Iterating Through Array Elements

const fruits = [
  "apple",
  "banana",
  "cheery",
  "mango",
  "watermelon",
  "grapes",
  "strawberry",
];

//   using for loop

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// using for of loop

for (let i of fruits) {
  console.log("for of loop", i);
}

// using for each

fruits.forEach((fruit, index) => {
  console.log("fruits using for Each OP", index, fruit);
});

// this for each function will execute for each time for the all element of an array

// Array Concatenation

// concatenation means joining two item into one

let vegetables = ["potato", "tomato", "ginger", "chilli"];

let shopItems = fruits.concat(vegetables);

console.log("all available shop items :", shopItems);

// Conversion of an Array to String

console.log("converting an Array to String", fruits.toString());
