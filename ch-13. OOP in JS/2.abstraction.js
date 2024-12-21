// **Abstraction** => Abstraction means hiding certain details that don't matter to the user and only showing essential features or functions.
// Example of this:
// FrontCamOn(), FrontCamOff() => front Camera

// Class representing a Car
class Car {
  // Private property (not directly accessible)
  #engineStatus = "off";

  // Method to turn the engine on
  startEngine() {
    this.#engineStatus = "on";
    console.log("Engine started");
  }

  // Method to turn the engine off
  stopEngine() {
    this.#engineStatus = "off";
    console.log("Engine stopped");
  }

  // Public method to get engine status (Abstraction: hides internal details)
  getEngineStatus() {
    return this.#engineStatus;
  }
}

// Creating a car object
const myCar = new Car();

// Using abstraction to interact with the car without worrying about the engine's internal details
myCar.startEngine();
console.log(myCar.getEngineStatus()); // "on"
myCar.stopEngine();
console.log(myCar.getEngineStatus()); // "off"

// another example  light on off

class TubeLight {
  #lightStatus = "on";

  startLight() {
    this.#lightStatus = "on";
    console.log("Light is on");
  }

  turnOffLight() {
    this.#lightStatus = "off";
    console.log("Light is off");
  }

  getLightStatus() {
    return this.#lightStatus;
  }
}

const light = new TubeLight();

light.startLight();
light.turnOffLight();
