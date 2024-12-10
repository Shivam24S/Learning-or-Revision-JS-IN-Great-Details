// The ternary operator (also known as the conditional operator) is a shorthand way to write simple if...else statements. It has the following syntax:

// examples

// examples with if else

let marks = 80;

if (marks < 35) {
  console.log("you have failed this exam");
} else {
  console.log("you have passed this exam");
}

// now  this same example with ternary operator

let message = "";

marks < 35
  ? (message = "you have failed this exam")
  : (message = "you have passed this exam");

console.log(message);
