// **Inheritance** => Inheritance allows us to access parent class properties and methods in a child class.

// example

class College {
  constructor(name, university, location) {
    this.name = name;
    this.university = university;
    this.location = location;
  }

  collegeFullDetails() {
    return `Name: ${this.name}, University: ${this.university}, Location: ${this.location}`;
  }
}

const collegeDetails = new College("ABC", "XYZ", "Downtown Area");

// now i want to create student class and want to inherit  properties from parent class School

class Student extends College {
  constructor(name, university, location, studentName, studentCourse) {
    super(name, university, location);
    this.studentName = studentName;
    this.studentCourse = studentCourse;
  }

  studentFullDetails() {
    return `Student Name is: ${this.studentName}, Student Course is: ${
      this.studentCourse
    },and they studying in  ${this.collegeFullDetails()}`;
  }
}

const studentDetails = new Student(
  "ABC",
  "XYZ",
  "Downtown Area",
  "John",
  "B.Tech"
);

console.log(studentDetails.studentFullDetails());
