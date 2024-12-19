// Iterate Through a Map
// You can iterate through the Map elements using the for...of loop or forEach() method. The elements are accessed in the insertion order.
//
//
// For example,

const person = new Map();

person.set("name", "shivam");
person.set("email", "example@gmail.com");
person.set("age", 22);

// using for...of loop

for (const [key, value] of person) {
  console.log(key, value);
}

// using forEach() method

person.forEach((key, value) => {
  console.log(key, value);
});

// iterating through keys of map objects

for (const key of person.keys()) {
  console.log(key);
}
