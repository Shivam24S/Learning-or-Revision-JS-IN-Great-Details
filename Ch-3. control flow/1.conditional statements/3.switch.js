// The JavaScript switch...case statement executes different blocks of code based on the value of a given expression.

// example

let light = "green";

switch (light) {
  case "green":
    {
      console.log("you can go ");
    }
    break;

  case "red":
    {
      console.log("you have to stop");
    }
    break;

  case "yellow":
    {
      console.log("you have to be prepared for stop");
    }
    break;

  default: {
    console.log("invalid traffic light indication");
  }
}
