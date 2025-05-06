// Arrow functions: A new and shorthand method to create functions in JavaScript

// Example of a normal function declaration
function normalFunction() {
  console.log("normal function");
}

// Function invocation
normalFunction();

// Arrow function
const arrowFunction = () => {
  console.log("arrow function");
};

// Arrow function invocation
arrowFunction();

// We can omit curly braces if there is a single line of code.

const arrowFunction2 = () => console.log("omitting curly braces");

arrowFunction2();
