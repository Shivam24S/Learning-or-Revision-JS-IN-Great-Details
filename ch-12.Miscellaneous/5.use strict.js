/*
Understanding "use strict":
1. Eliminates some JavaScript silent errors by changing them to throw errors.
2. Fixes mistakes that make it difficult for JavaScript engines to perform optimizations.
3. Prohibits some syntax likely to be defined in future versions of ECMAScript.
*/

"use strict";

// Example function to demonstrate "use strict"
function exampleFunction() {
  // Without "use strict", this would create a global variable
  // myVariable = 10; // This would throw an error in strict mode

  // Correct way to declare a variable in strict mode
  let myVariable = 10;
  console.log(myVariable);
}

exampleFunction();

// Things Not Allowed in Strict Mode
// 1. Undeclared variable is not allowed.

a = "hello"; // throws an error

// 2.Undeclared objects are not allowed.

person = { name: "Carla", age: 25 }; // throws an error

// 3. Deleting an object is not allowed.

let person = { name: "Carla" };

// delete person; // throws an error

// 4. Duplicating a parameter name is not allowed.

function hello(p1, p1) {
  console.log("hello");
} // throws an error

hello();

// 5. Assigning to a non-writable property is not allowed.

let obj1 = {};

Object.defineProperty(obj1, "x", { value: 42, writable: false });

// assignment to a non-writable property
obj1.x = 9; // throws an error

// 6. Assigning to a getter-only property is not allowed.

let obj2 = {
  get x() {
    return 17;
  },
};

// assignment to a getter-only property
obj2.x = 5; // throws an error

// 7. Assigning to a new property on a non-extensible object is not allowed.

let obj = {};
Object.preventExtensions(obj);

// Assignment to a new property on a non-extensible object
obj.newValue = "new value"; // throws an error

// 8. Octal syntax is not allowed.

// let a = 010; // throws an error

// 9. The variable name arguments and eval are not allowed.

// let arguments = 'hello'; // throws an error

// let eval = 44;

// 10.You cannot also use these reserved keywords in strict mode.

// implements interface let package private protected public static yield

// Benefits of Strict Mode
// The use of strict mode:

// helps to write a cleaner code
// changes previously accepted silent errors (bad syntax) into real errors and throws an error message
// makes it easier to write "secure" JavaScript
