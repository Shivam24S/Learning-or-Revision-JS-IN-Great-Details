// The JavaScript if...else statement is used to execute/skip a block of code based on a condition.

// In computer programming, the if...else statement is a conditional statement that executes a block of code only when a specific condition is met

// example

let age = 18;

if (age >= 18) {
  console.log("you are eligible for driving a car");
} else {
  console.log("you are not eligible for driving a car");
}

// We can use the else if keyword to check for multiple conditions.

// example

let marks = 35;

if (marks >= 85) {
  console.log("congratulation you have passed this exam with A grade");
} else if (marks >= 65 && marks <= 85) {
  console.log("congratulation you have passed this exam with B grade");
} else if (marks >= 35 && marks <= 65) {
  console.log("congratulation you have passed this exam");
} else {
  console.log("sorry you have failed this exam");
}
