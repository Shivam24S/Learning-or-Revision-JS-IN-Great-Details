// spread operator

const person = {
  name: "abcd",
  age: 17,
};

const person2 = { ...person };

console.log("person2", person2);

// rest operator

function values(...values) {
  console.log(...values);
}

values("a", "b", "c", "d");

// destructing

const { name, age } = person;

console.log(person.name);

console.log(person["age"]);

console.log(name);

console.log(age);

// destructing with example

function total(...args) {
  const [a, b, c] = args;

  let total = a + b;

  let gst = c;

  let result = total + gst;

  console.log(result);
}

total(500, 600, 28);
