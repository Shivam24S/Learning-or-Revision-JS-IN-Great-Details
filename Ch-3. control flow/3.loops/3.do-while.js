// The do…while loop can be used to execute a specific block of code at least once.

// Entry-Controlled Loops: In this type of loop, the test condition is checked before entering the loop body.
// Examples: 'for' loop and 'while' loop.

// Exit-Controlled Loops: In this type of loop, the test condition is checked at the end of the loop body.
// Therefore, the loop body will execute at least once, regardless of whether the condition is true or false.
// Example: 'do...while' loop.

// Example 1:

let num = 5;

do {
  console.log("this will print"); // This executes at least once
} while (num < 4);

// This code will not execute because the condition is false
if (num < 4) {
  console.log("this will not print");
}

// Example 2:

let test = 1;

do {
  test++;
  console.log("this will execute once");
} while (test >= 10); // Condition is false after the first iteration
