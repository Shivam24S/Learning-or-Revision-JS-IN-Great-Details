// Creating object using functions constructor

const student1 = {
  name: "xyz",
  age: 1,
  class: 1,
  rollNo: 1,
};

console.log(student1.name);

// destructuring
const { name } = student1;

console.log("student name", name);

const student2 = {
  name: "xyz",
  age: 1,
  class: 1,
  rollNo: 1,
};

const student3 = {
  name: "xyz",
  age: 1,
  class: 1,
  rollNo: 1,
};

function Student(name, age, std, rollNo) {
  (this.name = name),
    (this.age = age),
    (this.std = std),
    (this.rollNo = rollNo);
}

const student4 = new Student("xyz", 1, 2, 3);

const student5 = new Student("abcd", 1, 2, 3);

const student6 = new Student("pqrs", 1, 2, 3);

console.log("student 1", student1);

console.log("student 2", student2);

console.log("student4", student4);

console.log("student5", student5);

function PersonDetails(name, age, job) {
  this.name = name;
  this.age = age;
  this.job = job;
}

const person = new PersonDetails("shivam", 22, "software Developer");

const person2 = new PersonDetails("xyz", 22, "software Developer");

console.log("person object created", person);

console.log("person2 object created", person2);

// adding properties to object

PersonDetails.prototype.email = "email@gmail.com";

console.log("person  object with new email property added", person.email);

// Removing Properties from an Object

delete person.job;

console.log("person object after job has been deleted", person);

console.log("checking if a property exists", person.hasOwnProperty("job")); // because job property we have deleted in above code

console.log("checking if a property exists", person.hasOwnProperty("name")); // op will return true

// Iterating Through Object Properties

for (let key in person) {
  console.log("person details", key + ":" + person[key]);
}
