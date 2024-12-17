// methods with parameters

// we can use methods with parameter in class objects

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  job(jobName) {
    return jobName;
  }
}

const person1 = new Person("john", 30);

// person details

console.log(
  "person details :",
  "my name is ",
  person1.name +
    " " +
    "my age is " +
    person1.age +
    " " +
    "i am working as a " +
    person1.job("software Engineer")
);

// here job is  method in our Person class object

// and we are passing our parameters in method and accessing that
