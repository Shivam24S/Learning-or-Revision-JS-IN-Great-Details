// WeakSet Methods
// WeakSets have methods add(), delete(), and has().
//
// example,

// Creating a WeakSet
const person = new WeakSet();

// Creating an object and storing it in a variable
const personData = {
  name: "shivam",
  surname: "shrivastav",
};

// Adding the object to the WeakSet
person.add(personData);

console.log("person Details", person);
// Checking if the object is present in the WeakSet
console.log(
  "checking if the object is present in the person WeakSet object:",
  person.has(personData)
);

// deleting the object from the WeakSet object

person.delete(personData);

console.log("person Details", person);

// WeakSets Are Not iterable
// Unlike Sets, WeakSets are not iterable. For example,

const game = new WeakSet();

let gameData = {
  game1: "cricket",
  game2: "hockey",
};

game.add(gameData);

for (let games of game) {
  console.log("game Details", games);
}

// will throw an error due to not iterable
