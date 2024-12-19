// JavaScript WeakSet
// The WeakSet is similar to a Set. However, WeakSet can only contain objects (including arrays and functions).

// Creating a weakSet object
const person = new WeakSet();

// Type of WeakSet
console.log("type of weakSet:", typeof person); // Output: "object"

// Creating another WeakSet object
const personDetails = new WeakSet();

// Creating an object
const personData = {
  name: "shivam",
  surname: "shrivastav",
};

// Adding object to WeakSet
personDetails.add(personData);
console.log(
  "personDetails contains personData:",
  personDetails.has(personData)
); // Output: true

// Adding an array to WeakSet (this will not throw an error)
let game = new WeakSet();
let gameName = "cricket";
game.add(gameName); // will throw an error
