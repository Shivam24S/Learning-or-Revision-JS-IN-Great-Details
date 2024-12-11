// Recursion is a process of calling itself. A function that calls itself is called a recursive function.
// A recursive function must have a condition to stop calling itself. Otherwise, the function is called indefinitely.
// To prevent infinite recursion, you can use if...else statement (or similar approach) where one branch makes the recursive call, and the other doesn't.

// example of recursion function

// find factorial number

function factorial(num) {
  if (num < 0) {
    return "factorial is not defined for negative numbers";
  } else if (num === 0 || num === 1) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
}

console.log(factorial(5));
