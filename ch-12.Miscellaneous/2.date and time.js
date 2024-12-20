// JavaScript Date and Time
// In JavaScript, date and time are represented by the Date object. The Date object provides the date and time information and also provides various methods.

// A JavaScript date defines the EcmaScript epoch that represents milliseconds since 1 January 1970 UTC. This date and time is the same as the UNIX epoch (predominant base value for computer-recorded date and time values).

// Creating Date Objects
// There are four ways to create a date object.

// new Date()
// new Date(milliseconds)
// new Date(Date string)
// new Date(year, month, day, hours, minutes, seconds, milliseconds)

// example

const date = new Date();

console.log(date); // current date and time

// Creating Date Objects using different constructors

// new Date(milliseconds)
const dateFromMilliseconds = new Date(1609459200000); // January 1, 2021
console.log("Date from milliseconds:", dateFromMilliseconds);

// new Date(Date string)
const dateFromString = new Date("2021-01-01T00:00:00Z");
console.log("Date from string:", dateFromString);

// new Date(year, month, day, hours, minutes, seconds, milliseconds)
const dateFromComponents = new Date(2021, 0, 1, 0, 0, 0, 0); // Note: month is 0-indexed
console.log("Date from components:", dateFromComponents);

// Formatting Dates
const options = { year: "numeric", month: "long", day: "numeric" };
console.log("Formatted date:", date.toLocaleDateString("en-US", options)); // e.g., January 1, 2021

// Getting individual date components
console.log("Year:", date.getFullYear());
console.log("Month:", date.getMonth() + 1); // Month is 0-indexed
console.log("Day:", date.getDate());
console.log("Hours:", date.getHours());
console.log("Minutes:", date.getMinutes());
console.log("Seconds:", date.getSeconds());
console.log("Milliseconds:", date.getMilliseconds());

// current date

const currentDate = new Date().toLocaleDateString();
console.log(currentDate);

//current time

const currentTime = new Date().toLocaleTimeString();
console.log(currentTime);
