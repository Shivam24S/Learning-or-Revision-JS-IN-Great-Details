// **Polymorphism** => Polymorphism means having many different forms. We can overwrite a method inherited from a parent class.

class Game {
  constructor(name) {
    this.name = name;
  }

  play() {
    return `I am playing ${this.name} game`;
  }
}

const game = new Game("GTA-5");
console.log(game.play()); // Output: I am playing GTA-5 game

class MultiPlayer extends Game {
  constructor(name) {
    super(name);
  }
  play() {
    return `I am playing ${this.name} game with my friends`;
  }
}

const multiplayerGame = new MultiPlayer("COD");
console.log(multiplayerGame.play()); // Output: I am playing COD game with my friends

// In the above example, we have a Game class with a play method. We have another class MultiPlayer that extends the Game class and overwrites the play method. When we call the play method on the MultiPlayer class object, it returns a different message than the Game class object. This is polymorphism in action.
