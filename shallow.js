// let number = 1;

// let number2 = number;

// console.log(number2);

// number2 = 20;

// console.log(number);

// console.log(number2);

const number = [1, 2, 2, 3, 4, 5, 3, 4, 5, 6, 6];

console.log([...new Set(number)]);

function findOdd(number) {
  let num = {};

  for (let i = 0; i < number.length; i++) {
    if (num[number[i]]) {
      num[number[i]] += 1;
    } else {
      num[number[i]] = 1;
    }
  }
  console.log(num);
}

findOdd(number);
