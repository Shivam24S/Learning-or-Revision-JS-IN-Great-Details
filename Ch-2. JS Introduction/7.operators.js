/*
JavaScript operators are special symbols that perform operations on one or more operands (values). For example:

2 + 4;  // 6

Here, we used the `+` operator to add the operands 2 and 4.
*/

// There are a total of seven types of operators in JavaScript:

// 1. Arithmetic Operators
// 2. Assignment Operators
// 3. Comparison Operators
// 4. Logical Operators
// 5. Bitwise Operators
// 6. Unary Operators
// 7. Miscellaneous Operators

// ---------------------------------------------

// 1. Arithmetic Operators
// Used to perform mathematical operations.

let a = 10;
let b = 4;

console.log("Addition:", a + b); // 13
console.log("Subtraction:", a - b); // 7
console.log("Multiplication:", a * b); // 30
console.log("Division:", a / b); // 3.333...
console.log("Modulus:", a % b); // 1 (remainder)
console.log("Exponentiation:", a ** b); // 1000

// ---------------------------------------------

// 2. Assignment Operators
// Used to assign values to variables.

let x = 5;
x += 2; // Equivalent to x = x + 2
console.log("x after += 2:", x); // 7

x *= 3; // Equivalent to x = x * 3
console.log("x after *= 3:", x); // 21

// ---------------------------------------------

// 3. Comparison Operators
// Used to compare two values and return a boolean result.

console.log("Equal:", 5 == "5"); // true (loose equality, type coercion)
console.log("Strict Equal:", 5 === "5"); // false (strict equality, no type coercion)
console.log("Not Equal:", 10 != 5); // true
console.log("Greater Than:", 10 > 5); // true
console.log("Less Than:", 3 < 5); // true

// ---------------------------------------------

// 4. Logical Operators
// Used to combine multiple boolean expressions.

let isTrue = true;
let isFalse = false;

console.log("AND:", isTrue && isFalse); // false
console.log("OR:", isTrue || isFalse); // true
console.log("NOT:", !isTrue); // false

// ---------------------------------------------

// 5. Bitwise Operators
// Operate on binary representations of numbers.

let p = 5; // 0101 in binary
let q = 3; // 0011 in binary

console.log("Bitwise AND:", p & q); // 1 (0001)
console.log("Bitwise OR:", p | q); // 7 (0111)
console.log("Bitwise XOR:", p ^ q); // 6 (0110)

// ---------------------------------------------

// 6. Unary Operators
// Operators with a single operand.

let num = 10;
console.log("Unary Negation:", -num); // -10
console.log("Increment:", ++num); // 11 (pre-increment)
console.log("Decrement:", --num); // 10 (pre-decrement)

// ---------------------------------------------

// 7. Miscellaneous Operators

// Ternary Operator
let age = 18;
let canVote = age >= 18 ? "Yes" : "No";
console.log("Can vote?", canVote); // Yes

// Typeof Operator
console.log("Type of 42:", typeof 42); // "number"
console.log("Type of 'Hello':", typeof "Hello"); // "string"
