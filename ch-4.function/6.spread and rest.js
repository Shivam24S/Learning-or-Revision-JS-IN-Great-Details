// Spread and Rest are shorthand syntax for working with array elements in JS.
// They have different use cases and methods of use.

// Spread Operator
// The spread operator is used to expand or spread elements of an array or object.

// Example of spread operator:

let numArray = [1, 2, 3, 4, 5];
console.log(...numArray); // It will print all the elements of the array

// Another example of the spread operator:

function fruitsName(fruits) {
  console.log("Available fruits are:", ...fruits);
}

let availableFruits = ["apple", "banana", "orange", "cherry", "guava"];
fruitsName(availableFruits); // It will print all the fruits

// Rest Operator
// The rest parameter (...) allows a function to treat a variable number of arguments as an array:

// Example of rest operator:

function totalGames(...games) {
  console.log("You can play:", ...games); // It will print all the games
}

totalGames(
  "GTA 5",
  "Forza Horizon 5",
  "God of War",
  "Flight Simulator",
  "Snow Runner",
  "Red Dead Redemption",
  "Cyberpunk"
);
