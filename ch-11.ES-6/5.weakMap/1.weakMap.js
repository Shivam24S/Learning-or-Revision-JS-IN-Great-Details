// JavaScript WeakMap
// The WeakMap is similar to a Map. However, WeakMap can only contain objects as keys. For example,

const person = new WeakMap();

const key1 = {};
const key2 = {};

person.set(key1, "shivam");
person.set(key2, "shrivastav");

console.log(person.get(key1)); // "shivam"
console.log(person.get(key2)); // "shrivastav"

// if i try to assign key except object will throw an error

// example

const game = new WeakMap();

let GameKey1 = "";

let GameKey2 = "";

game.set(GameKey1, "GTA");
game.set(GameKey2, "COD");

console.log(game.get(GameKey1)); // will throw an error
console.log(game.get(GameKey2)); // will throw an error
