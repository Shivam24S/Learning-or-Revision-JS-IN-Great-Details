// JavaScript Revision

// All code executes in the global execution context (GEC).
// The GEC has two parts: memory and code.

// In the memory phase, variables and functions are stored.
// Variables are initially set to undefined, while functions are stored as-it-is.

var exampleVar;
function exampleFunc() {
  console.log("exampleFunc output:", "This is an example function.");
}

// JavaScript is a single-threaded synchronous language, meaning it executes one line at a time.

// All operations are performed in the call stack.
// The GEC contains many smaller execution contexts based on our code.
// When a task is completed, it is popped off the call stack.

// Hoisting
// Variables declared with var are hoisted and initialized with undefined.
// Functions are hoisted with their definitions.

console.log("hoistedVar output:", hoistedVar); // undefined
var hoistedVar = "I am hoisted";

console.log("hoistedFunc output:", hoistedFunc()); // "I am hoisted"
function hoistedFunc() {
  return "I am hoisted";
}

// Variables declared with let and const are not hoisted in the same way.

console.log("notHoistedVar output:", notHoistedVar); // ReferenceError
let notHoistedVar = "I am not hoisted";

// Undefined vs. Not Defined
// Undefined means a variable is declared but not assigned a value.
// Not defined means a variable is not declared in the code.

var declaredVar;
console.log("declaredVar output:", declaredVar); // undefined
console.log("notDeclaredVar output:", notDeclaredVar); // ReferenceError

// Null means a variable is explicitly set to have no value.

var nullVar = null;
console.log("nullVar output:", nullVar); // null

// Window Object & This
// The shortest JavaScript program is an empty program, but the JS engine still works.
// The global object in browsers is the window object.

console.log("window output:", window); // Window object
console.log("this output:", this); // Window object

// Scope & Scope Chain & Lexical Environment
// Lexical environment means the hierarchy of scopes.

function outerFunc() {
  var outerVar = "I am outside!";
  function innerFunc() {
    var innerVar = "I am inside!";
    console.log("innerFunc output:", outerVar); // "I am outside!"
  }
  innerFunc();
}
outerFunc();

// Closure
// A closure is a function bundled with its lexical scope.

function closureExample() {
  var closureVar = "I am a closure!";
  return function () {
    console.log("closureExample output:", closureVar);
  };
}
var myClosure = closureExample();
myClosure(); // "I am a closure!"

// Function Declarations and Expressions
// Function declarations are hoisted.

function declaredFunc() {
  console.log("declaredFunc output:", "I am a declared function.");
}

// Function expressions are not hoisted.

var expressedFunc = function () {
  console.log("expressedFunc output:", "I am an expressed function.");
};

// First-Class Functions
// Functions can be passed as arguments and returned from other functions.

function firstClassExample(callback) {
  callback();
}
firstClassExample(function () {
  console.log("firstClassExample output:", "I am a first-class function.");
});

// Higher-Order Functions (HOC)
// A function that takes another function as an argument or returns a function.

function higherOrderExample(callback) {
  return function () {
    callback();
  };
}
var hoc = higherOrderExample(function () {
  console.log("higherOrderExample output:", "I am a higher-order function.");
});
hoc();

// Promises
// Promises are used to handle asynchronous operations.

var promise = new Promise(function (resolve, reject) {
  // Asynchronous operation
  if (true) {
    resolve("Operation successful.");
  } else {
    reject("Operation failed.");
  }
});

promise
  .then(function (result) {
    console.log("promise then output:", result); // "Operation successful."
  })
  .catch(function (error) {
    console.log("promise catch output:", error);
  });

// Async/Await
// Async functions return a promise, and await is used to wait for the promise to resolve.

async function asyncExample() {
  try {
    var result = await promise;
    console.log("asyncExample output:", result); // "Operation successful."
  } catch (error) {
    console.log("asyncExample catch output:", error);
  }
}
asyncExample();

// Object-Oriented Programming (OOP) in JavaScript

// Constructor Function
function BankAccount(accountNumber, accountHolder) {
  this.accountNumber = accountNumber;
  this.accountHolder = accountHolder;
}

// Prototype
BankAccount.prototype.getDetails = function () {
  return `${this.accountHolder} - ${this.accountNumber}`;
};

// Classes
class BankAccountClass {
  constructor(accountNumber, accountHolder) {
    this.accountNumber = accountNumber;
    this.accountHolder = accountHolder;
  }

  getDetails() {
    return `${this.accountHolder} - ${this.accountNumber}`;
  }
}

// Inheritance
class SavingsAccount extends BankAccountClass {
  constructor(accountNumber, accountHolder, interestRate) {
    super(accountNumber, accountHolder);
    this.interestRate = interestRate;
  }

  getInterestRate() {
    return this.interestRate;
  }
}
