// using ES6 we can define variable in JS using let and const

// let

// using let we can define variable in JS

// let has a block scope which means variable define using let can only be accessed in block it's not accessible outside of block

// let example

function checkBlockScope() {
  let message = "Hello from the function!";

  if (true) {
    let blockMessage = "Hello from the block!";
    console.log(blockMessage); // Accessible here
  }

  console.log(message); // Accessible here

  // Trying to access blockMessage outside the block will cause an error
  //   console.log(blockMessage); // ReferenceError: blockMessage is not defined
}

checkBlockScope();

// using let we can declare variable and assign it later
// example ( to check this you have to comment  reference error code )

// variable declaration
let person;

// assigning value to the variable

person = "Shivam shrivastav";

console.log("here variable value will be =>", person);
// we can variable value

person = "another person";

console.log("here variable value will be changed =>", person);
