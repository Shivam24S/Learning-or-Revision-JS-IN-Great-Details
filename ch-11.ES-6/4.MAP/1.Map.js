// The JavaScript ES6 has introduced two new data structures, i.e Map and WeakMap.

// Map is similar to objects in JavaScript that allows us to store elements in a key/value pair.

// The elements in a Map are inserted in an insertion order. However, unlike an object, a map can contain objects, functions and other data types as key.

// creating a new Map object
const map = new Map();

console.log("type of ", typeof map); // will return "object"

// adding elements to the map
map.set("name", "shivam");

console.log(map); // will return Map(1) { 'name' => 'shivam' }

map.set("surname", "shrivastav");

console.log(map);

// i can do this like
let obj = {};

map.set(obj, { name: "shivam", surname: "shrivastav" });

console.log(map);

const person = new Map();

// now i am storing function as key of map object
function MapObjectKey() {
  let key = 1;
  return key;
}

person.set(MapObjectKey, "shivam");

console.log("person Map object:", person);

// to get details of the key and values
for (const [key, value] of person.entries()) {
  console.log("Key:", key, ", Value:", value);
}

// or we can use get() method to access the person map object

console.log(person.get(MapObjectKey));

// another example of creating map object

const personDetails = new Map([
  ["name", "shivam"],
  ["surname", "shrivastav"],
]);

console.log("personDetails:", personDetails);
