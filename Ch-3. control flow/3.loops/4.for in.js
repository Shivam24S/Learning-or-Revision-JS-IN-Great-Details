// for/in loop: There is another advanced loop called for/in loop which runs through all the properties of an object. The loop will be executed once for each property of the object. The for/in loop can also be used over the properties of arrays. However, it is not advised to use for/in loop over arrays.  for/of and Array.forEach() loops are suggested to be used while working with arrays.

// example iterating through object using for in loop

let person = {
  name: "Shivam",
  surname: "shrivastav",
  age: 22,
};

let personDetails = "";

let value = "";

for (value in person) {
  console.log(person[value]);
}
