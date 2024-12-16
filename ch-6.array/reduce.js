// JavaScript reduce() Method
// This method uses a reducer function that reduces the results into a single output.

// Example: In this example, we will add all the values of the array and return a single output using the reduce() function.

let numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log("number array : " + numberArray);

const sumOfNumbers = numberArray.reduce((accumulator, element) => {
  return accumulator + element;
});

console.log("sumOfNumbers : " + sumOfNumbers);
