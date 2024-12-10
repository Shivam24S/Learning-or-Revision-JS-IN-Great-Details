// JavaScript continue statement is used to skip the current iteration of the loop and proceed with the next iteration.

// Example: We will print only odd numbers from an array

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < numbers.length; i++) {
  // If the number is even, skip this iteration and go to the next iteration
  if (numbers[i] % 2 === 0) {
    continue; // Skips the current iteration and moves to the next one
  }

  console.log(numbers[i]); // This will print only odd numbers
}

console.log("Loop has finished.");
