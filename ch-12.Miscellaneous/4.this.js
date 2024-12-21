// JavaScript `this` Keyword
// The `this` keyword in JavaScript refers to the object it belongs to. It has different values depending on where it is used.

// Example in a method
const person = {
  name: "Alice",
  greet: function () {
    console.log("Hello, my name is " + this.name);
  },
};

person.greet(); // Hello, my name is Alice

// Example in a function (non-strict mode)
function show() {
  console.log(this);
}

show(); // In a browser, this will refer to the window object

// Example in a function (strict mode)
("use strict");
function showStrict() {
  console.log(this);
}

showStrict(); // undefined

// Example in an event handler
const button = document.createElement("button");
button.textContent = "Click me";
button.onclick = function () {
  console.log(this); // this refers to the button element
};
document.body.appendChild(button);

// Example with call, apply, and bind
const person2 = {
  name: "Bob",
};

function greet() {
  console.log("Hello, my name is " + this.name);
}

greet.call(person2); // Hello, my name is Bob
greet.apply(person2); // Hello, my name is Bob

const boundGreet = greet.bind(person2);
boundGreet(); // Hello, my name is Bob
