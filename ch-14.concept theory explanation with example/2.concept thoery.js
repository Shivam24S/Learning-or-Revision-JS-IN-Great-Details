// JavaScript Revision

// ⚡ JavaScript Execution Context (Global Execution Context - GEC)
// All JavaScript code executes inside the Global Execution Context (GEC).
// The GEC has two phases:

// Memory Creation Phase: Variables and functions are allocated memory.
// var variables are initialized with undefined.
// Functions are stored as a whole.

// Execution Phase: Code runs line by line.
// JavaScript is a single-threaded, synchronous language, executing one line at a time.
// The Call Stack handles all the execution of code.

// How the Call Stack Works:
// Every function or code block creates a new execution context added to the Call Stack.
// Once execution is complete, it is popped off from the stack.

// Example:
function first() {
  console.log("First function");
  second();
}

function second() {
  console.log("Second function");
}

first();
// Output:
// First function
// Second function

// 🚀 Hoisting
// Hoisting is JavaScript's behavior of moving declarations to the top of the scope.
// Variables declared with var are hoisted but initialized as undefined.
// Function declarations are hoisted with their entire body.
// Arrow functions and variables declared with let and const are hoisted but not initialized.

// Difference between undefined and not defined:
// Undefined: Variable is declared but not assigned a value.
// Not Defined: Variable is neither declared nor defined in the code.

// Example:
console.log(hoistedVar); // undefined
var hoistedVar = "I am hoisted";

// null:
// null means the value has been intentionally reset or cleared.

// 🌐 Window Object & this Keyword
// The window object is the global object in browsers.
// Variables declared globally become properties of the window object.
// Access global variables using:

// Example:
var a = 10;
console.log(window.a); // 10
console.log(this.a); // 10
console.log(a); // 10
// All three refer to the same value in the global context.

// 📌 Scope, Scope Chain, and Lexical Scope
// Lexical Scope: Refers to the hierarchy of scopes where a function is defined.
// Scope Chain: When a variable is accessed, JavaScript:
// Looks in the local scope.
// Moves up to the parent scope if not found.
// Finally checks the global scope.

// Example:
function outer() {
  var outerVar = "I am outside!";
  function inner() {
    console.log(outerVar); // I am outside!
  }
  inner();
}
outer();

// 🔗 Closures
// A closure is a function bundled with its lexical scope.
// Closures allow functions to remember their lexical environment even after the outer function has executed.
// Closures are often used for:
// Data hiding
// Private variables

// Example:
function makeCounter() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}
const counter = makeCounter();
console.log(counter()); // 1
console.log(counter()); // 2

// 🛠️ Functions
// 1. Function Statement vs Function Declaration
// Both are the same; they declare a function explicitly.

// 2. Function Expression:
// A function assigned to a variable:

// Example:
var a = function () {
  console.log("Function Expression");
};
// Hoisting Difference: Function expressions are not hoisted.

// 3. Anonymous Function:
// A function without a name.
// Cannot be used in function statements, but can be used in function expressions.

// 4. Named Function Expression:
// A function expression where the function has a name.

// 5. Parameters vs Arguments:
// Parameters: Placeholders in function definition.
// Arguments: Actual values passed when invoking a function.

// 6. First-Class Functions:
// Functions can be:
// Passed as arguments.
// Returned from other functions.
// Assigned to variables.

// Example:
function greet(name) {
  return "Hello " + name;
}
function greetUser(greetFunction, userName) {
  console.log(greetFunction(userName));
}
greetUser(greet, "Alice"); // Hello Alice

// 🧠 JavaScript Engine
// First JavaScript Engine: SpiderMonkey by Brendan Eich.
// Popular Modern Engines:
// V8 Engine: Chrome
// Bun: Fastest engine for Mac and Linux

// Interpreter vs Compiler:
// Interpreter: Executes code line by line.
// Compiler: Compiles and optimizes code before execution.
// JIT (Just-In-Time Compiler): Combines both interpreter and compiler for efficiency.

// ⏳ Concurrency and setTimeout
// JavaScript uses a Concurrency Model.
// setTimeout waits for the Call Stack to clear before executing the callback.

// Example:
console.log("Start");
setTimeout(() => {
  console.log("Callback");
}, 0);
console.log("End");
// Output:
// Start
// End
// Callback

// 🏗️ Higher-Order Functions (HOF)
// A function that takes another function as an argument or returns a function.

// Callback Functions:
// Functions passed as arguments to other functions.

// Problems with Callbacks:
// Callback Hell: Nested callbacks become hard to read.
// Inversion of Control: Loss of control over code execution order.

// Example:
function fetchData(callback) {
  setTimeout(() => {
    callback("Data received");
  }, 1000);
}
fetchData((data) => {
  console.log(data); // Data received
});

// 🤝 Promises
// Promises solve callback problems.
// A Promise is an object representing the eventual success or failure of an asynchronous operation.

// States of Promises:
// Pending
// Fulfilled
// Rejected

// Syntax:
// Example:
fetchData()
  .then((response) => console.log(response))
  .catch((error) => console.error(error));

// Promise Chaining: Avoids Callback Hell by chaining .then.

// ⚡ Async/Await
// async functions always return a promise.
// await pauses the function execution until the promise resolves.
// Use try...catch for error handling:

// Example:
async function fetchData() {
  try {
    let data = await getData();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// 🛡️ Object-Oriented Programming (OOP) in JavaScript
// 1. Constructor Function:
// Used to initialize object properties.

// 2. Prototype:
// Avoid memory duplication by defining methods on the prototype.

// Example:
function Person(name) {
  this.name = name;
}
Person.prototype.greet = function () {
  console.log("Hello, " + this.name);
};
const person1 = new Person("John");
person1.greet(); // Hello, John

// 3. Classes:
// Syntactic sugar for constructor functions.
// Use constructor to initialize properties.

// 4. Inheritance:
// Allows child classes to inherit properties and methods from parent classes.

// Example:
class Parent {
  constructor() {
    this.property = "value";
  }
}

class Child extends Parent {
  constructor() {
    super();
  }
}

// ✅ Conclusion:
// You've covered key JavaScript concepts including:

// Execution Context
// Hoisting
// Scope Chain
// Closures
// Functions & HOF
// Promises & Async/Await
// OOP Principles
