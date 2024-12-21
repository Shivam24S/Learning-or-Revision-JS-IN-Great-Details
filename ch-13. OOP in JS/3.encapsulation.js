// **Encapsulation** => Encapsulation means keeping properties and methods private inside a class, so that they are not accessible from outside that class.

// Example:

class Student {
  // Private fields (Encapsulation)
  #name;
  #standard;
  #school;

  constructor(name, standard, school) {
    this.#name = name;
    this.#standard = standard;
    this.#school = school;
  }

  // Getter for name
  getName() {
    return this.#name;
  }

  // Setter for name
  setName(newName) {
    this.#name = newName;
  }

  // Method to display student details
  getDetails() {
    return `Name: ${this.#name}, Standard: ${this.#standard}, School: ${
      this.#school
    }`;
  }
}

// Creating an object of the Student class
const studentDetails = new Student("John", 10, "XYZ School");

// Accessing name via getter
console.log(studentDetails.getName()); // Output: John

// Trying to access private field directly (will throw undefined)
console.log(studentDetails.name); // Output: undefined

// Modifying the name using setter
studentDetails.setName("Shivam");

// Accessing updated name
console.log(studentDetails.getName()); // Output: Shivam

// Display full details
console.log(studentDetails.getDetails());
// Output: Name: Shivam, Standard: 10, School: XYZ School
