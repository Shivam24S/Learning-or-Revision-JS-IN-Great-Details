// JavaScript filter() Method
// This method is used to filter out the contents, as per the user-specified condition, in the form of a new array.

// Example: In this example, we will filter the even numbers from the array using the filter() method.

const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

console.log(number);

const evenNumber = number.filter((number) => number % 2 === 0);

console.log("even number: ", evenNumber);
