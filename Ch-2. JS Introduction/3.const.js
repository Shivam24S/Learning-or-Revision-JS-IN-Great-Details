// A constant is a type of variable whose value cannot be changed.

// In JavaScript, we use the const keyword to create constants.

// A const variable has block scope, which means it is only accessible within that block.

// When declaring a variable using const, we must assign a value immediately; otherwise, it will generate an error.

// Example:
const name = "shivam";

// Const block scope example
function personDetail() {
  const person = "shivam shrivastav";

  console.log("person details =>", person);

  function personAge() {
    const age = 22;

    console.log("person age =>", age);
  }
  personAge();

  // This will generate a ReferenceError because age is not accessible here
  console.log("person age will not be accessible here =>", age);
}

personDetail();

// Re-declaring or changing a const variable is not allowed
const num = 24;
// const num = 10; // This will generate a SyntaxError

// We must initialize a const variable during declaration; otherwise, it will generate an error
// const student; // SyntaxError: Missing initializer in const declaration
// student = "evan";  // Not possible
