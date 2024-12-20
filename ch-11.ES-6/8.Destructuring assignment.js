// JavaScript Destructuring
// The destructuring assignment introduced in ES6 makes it easy to assign array values and object properties to distinct variables. For example,

// example

// traditional method

const person = {
  name: "shivam",
  surName: "shrivastav",
  age: 22,
  email: "example@email.com",
};

// now if i want to access properties of person object

console.log(person.name);
console.log(person.surName);
console.log(person.email);

// using the destructuring assignment

let { name, surName, email } = person;

console.log("using destructuring assignment OP");

console.log(name);
console.log(surName);
console.log(email);

// Array Destructuring
const numbers = [1, 2, 3, 4, 5];
const [first, second, , fourth] = numbers;

console.log("Array Destructuring:");
console.log(first); // 1
console.log(second); // 2
console.log(fourth); // 4

// Nested Object Destructuring
const user = {
  id: 101,
  name: "John Doe",
  address: {
    city: "New York",
    zip: "10001",
  },
};

const {
  name: userName,
  address: { city, zip },
} = user;

console.log("Nested Object Destructuring:");
console.log(userName); // John Doe
console.log(city); // New York
console.log(zip); // 10001

// Default Values
const { phone = "N/A" } = user;
console.log("Default Values:");
console.log(phone); // N/A

// Renaming Variables
const { name: fullName } = person;
console.log("Renaming Variables:");
console.log(fullName); // shivam
