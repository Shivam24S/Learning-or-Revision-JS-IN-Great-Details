// A JavaScript variable is a container for storing data. For example,

let name = "shivam";

// here name is variable  and shivam is variable data

// we can define a variable in js using 3 types

// 1. var

// 2. let

// 3. const

// var  has  functional scope which means it accessible in function body outside its not accessible if we try to access it we will get an reference error

// example

function sayName() {
  var person = "shivam shrivastav";
  console.log("person ->", person);
}

// function invocation

sayName();

// console.log("person variable not accessible here ->", person);

// comment first upper syntax to check output of below code

// its better to use let and const instead of var for variable declaration it has some pros and cons which will know along this code explanation

// variable declaration

let num;

// variable assignment

num = 24;

console.log(num);
