// Nested if...else statements contain one or more if...else statements within another if...else block.

// When we use an if...else statement inside another if...else statement, we create a nested if...else structure.

// example

let age = 17;

if (age < 18) {
  console.log("you are not eligible for voting");
} else if (age >= 18) {
  if (age >= 18) {
    console.log("if you have registered as a voter portal than you can vote");
  }
} else {
  console.log(" you can't give vote");
}
