// we can pas default parameter in our function

// example

function game(gameName = "kabbaddid") {
  console.log(`I am playing ${gameName}`);
}

game();

// in above function i passed default parameter gameName as kabbaddid

// another Example

function game2(gameName = "badminton") {
  console.log(`I am playing ${gameName}`);
}

game2("cricket");

// if we provided a argument and also provided default parameter then it will take argument instead of default parameter value

// another example

function game3(gameName1, gameName2 = "football") {
  console.log(
    `Right now i am  playing ${gameName1} then we will play ${gameName2}`
  );
}

game3("volleyball");

// it will take argument values as first parameter and second value as default parameter

// example with multiple default parameters
function greet(name = "Guest", greeting = "Hello") {
  console.log(`${greeting}, ${name}!`);
}

greet();
greet("Alice");
greet("Bob", "Hi");

// example with default parameter as a function
function getDefaultGame() {
  return "chess";
}

function game4(gameName = getDefaultGame()) {
  console.log(`I am playing ${gameName}`);
}

game4();
game4("tennis");

// example with default parameter as an object
function displayPlayer(player = { name: "Unknown", age: 0 }) {
  console.log(`Player: ${player.name}, Age: ${player.age}`);
}

displayPlayer();
displayPlayer({ name: "John", age: 25 });
