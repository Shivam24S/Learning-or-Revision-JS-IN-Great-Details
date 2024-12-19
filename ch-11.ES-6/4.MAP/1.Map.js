// The JavaScript ES6 has introduced two new data structures, i.e Map and WeakMap.

// Map is similar to objects in JavaScript that allows us to store elements in a key/value pair.

// The elements in a Map are inserted in an insertion order. However, unlike an object, a map can contain objects, functions and other data types as key.

// creating a new Map object
const map = new Map();

console.log("type of ", typeof map); // will return object

// adding elements to the map

map.set("name", "shivam");

console.log(map); // will return Map(1) { 'name' => 'shivam'}

map.set("surname", "shrivastav");

console.log(map);

// i can do this like

let obj = {};

map.set(obj, { name: "shivam", surname: "shrivastav" });

console.log(map);
