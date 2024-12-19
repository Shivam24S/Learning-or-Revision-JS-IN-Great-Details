// typeof weakMap is object

const weakMapType = new WeakMap();

console.log("type of :", typeof weakMapType);

//WeakMap Methods

// WeakMaps have methods get(), set(), delete(), and has().

// example of all methods

const person = new WeakMap();

// setting properties to weakMap object

let key1 = {};

let key2 = {};

person.set(key1, ["name", "shivam"]);

person.set(key2, ["SurName", "shrivastav"]);

// now getting the values of weakMap object

console.log(person.get(key1)); // ["name", "shivam"]
console.log(person.get(key2)); // ["SurName", "shrivastav"]

// checking if key is present in weakMap object

console.log("checking properties", person.has(key1)); // will return true if key is present in weakMap object otherwise false

// deleting the key and their value from weakMap object

console.log("deleting key", person.delete(key1)); //will return true if key 1 deleted

// WeakMaps Are Not iterable
// Unlike Maps, WeakMaps are not iterable.
//
//  example,

for (let key of person) {
  console.log("values", key);
}

// will throw an error due to not iterable
