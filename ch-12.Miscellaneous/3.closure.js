// In JavaScript, closure provides access to the outer scope of a function from inside the inner function, even after the outer function has closed.

const outerFunction = (num) => {
  const innerFunction = () => {
    console.log(num * 2);
  };
  return innerFunction;
};

const result = outerFunction(24);
result();

// In the above example, the innerFunction has access to the num variable of the outerFunction even after the outerFunction has closed. This is an example of a closure in JavaScript.

// another example

function Multiply(num) {
  const Multiply2 = () => {
    console.log(num * 2);
  };
  const Multiply3 = () => {
    console.log(num * 3);
  };

  return { Multiply2, Multiply3 };
}

const multiplication = Multiply(2);
multiplication.Multiply2();
multiplication.Multiply3();

// Data Privacy
// JavaScript closure helps in the data privacy of the program. It allows the creation of private variables and functions that are inaccessible from the outside scope. ,

let a = 0;
function sum() {
  let a = 0;
  function incrementSum() {
    return (a = a + 1);
  }
  return incrementSum;
}

let sumOfNumber = sum();

console.log(sumOfNumber()); // 1
console.log(sumOfNumber()); // 2
console.log(sumOfNumber()); // 3

console.log(a); // 0

// as you can see in above example outside of variables has no impact on the inner function variables
// if i not declare variable inside the function then it will take the value of outside variable and the value of a will be the last op of inner function
