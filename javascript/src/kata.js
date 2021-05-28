class Game {
  constructor() {}

  roll(n) {
    this.currentScore = 1;
  }

  score() {
    return this.currentScore;
  }
}

module.exports = { Game };
