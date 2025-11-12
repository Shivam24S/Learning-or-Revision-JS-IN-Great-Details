// In JavaScript, there are a total of 8 data types:

// 1. String
// 2. BigInt
// 3. Number
// 4. Boolean
// 5. Object
// 6. Null
// 7. Undefined
// 8. Symbol

/*

Data Type     Description                                          Example
String        Textual data.                                        'hello', "hello world!", etc.
Number        An integer or a floating-point number.               3, 3.234, 3e-2, etc.
BigInt        An integer with arbitrary precision.                 900719925124740999n, 1n, etc.
Boolean       Any of two values: true or false.                    true, false
Undefined     A variable that has not been initialized.            let a;
Null          Represents a null value.                             let a = null;
Symbol        Unique and immutable identifiers.                    let value = Symbol('hello');
Object        A collection of key-value pairs.                     let student = { name: "John" };

*/

// 📌 Primitive  Types: Stored in stack, immutable, passed by value.
// Example: String, Number, Boolean, Null, Undefined, Symbol, BigInt.

let a = "hello";
let b = a; // Copying the value
b = "world";

console.log(a); // "hello"
console.log(b); // "world"

// 📌 Non-Primitive  Types: Stored in heap, mutable, passed by reference.
// Example: Object, Array, Function.

// let obj1 = { name: "Shivam" };
// let obj2 = obj1; // Reference is copied

// obj2.name = "Rishiraj";

// console.log(obj1.name); // "Rishiraj" (affected due to reference)
// console.log(obj2.name); // "Rishiraj"

// Example with types

// We can check the data type using the `typeof` operator.

// 1. String Example
let greetings = "Hello";
console.log("greetings: " + greetings);

// Check type
let greetingType = typeof greetings;
console.log("Type of greetings:", greetingType);

// 2. Number Example
let age = 25;
console.log("age: ", age);
console.log("Type of age:", typeof age);

// 3. BigInt Example
let bigNumber = 900719925124740999n;
console.log("bigNumber: " + bigNumber);
console.log("Type of bigNumber:", typeof bigNumber);

// 4. Boolean Example
let isStudent = true;
console.log("isStudent: " + isStudent);
console.log("Type of isStudent:", typeof isStudent);

// 5. Undefined Example
let uninitialized;
console.log("uninitialized: " + uninitialized);
console.log("Type of uninitialized:", typeof uninitialized);

// 6. Null Example
let emptyValue = null;
console.log("emptyValue: " + emptyValue);
console.log("Type of emptyValue:", typeof emptyValue);

// 7. Symbol Example
let uniqueID = Symbol("id");
console.log("uniqueID: " + uniqueID.toString());
console.log("Type of uniqueID:", typeof uniqueID);

// 8. Object Example
let student = { name: "John", age: 22 };
console.log("student: ", student);
console.log("Type of student:", typeof student);

// Additional Notes

// Arrays in JavaScript are of type "object".
let numbers = [1, 2, 3];
console.log("numbers:", numbers);
console.log("Type of numbers:", typeof numbers); // Outputs "object"

// In JavaScript, `null` is of type "object" due to a historical mistake in the language design.
console.log("Type of null:", typeof null); // Outputs "object"
