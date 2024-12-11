// JavaScript break statement is used to terminate the execution of the loop or the switch statement when the condition is true.

// Example: We have an array of numbers and we want to find the number 5.
// Once we find it, we terminate the loop using the `break` statement.

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < numbers.length; i++) {
  console.log("Checking number: " + numbers[i]);

  // If the number is 5, break out of the loop
  if (numbers[i] === 5) {
    console.log("Found 5! Stopping the loop.");
    break; // Terminates the loop when 5 is found
  }
}

console.log("Loop has ended.");
