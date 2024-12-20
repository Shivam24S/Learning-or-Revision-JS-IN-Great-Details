// JSON stands for Javascript Object Notation. JSON is a text-based data format that is used to store and transfer data. For example,

// In JSON, the data are in key/value pairs separated by a comma ,.

// JSON was derived from JavaScript. So, the JSON syntax resembles JavaScript object literal syntax. However, the JSON format can be accessed and be created by other programming languages too.

// Use of JSON
// JSON is the most commonly used format for transmitting data (data interchange) from a server to a client and vice-versa. JSON data are very easy to parse and use. It is fast to access and manipulate JSON data as they only contain texts.

// JSON is language independent. You can create and use JSON in other programming languages too.

// example

// converting object to string or json

const person = {
  name: "John",
  surname: "doe",
  age: 22,
};

console.log("type of person", typeof person);

const personJson = JSON.stringify(person);

console.log("type of personJson", typeof personJson);

// converting json to object

const game = {
  game1: "cricket",
  game2: "football",
};

const gameJson = JSON.stringify(game); // Convert object to JSON string first
console.log("type of gameJson", typeof gameJson); // string
const gameObject = JSON.parse(gameJson); // Then parse the JSON string back to object

console.log("type of gameObject", typeof gameObject); // object
