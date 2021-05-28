class Game {
  constructor() {}

  roll(n) {
    this.currentScore = n;
  }

  score() {
    return this.currentScore;
  }
}

module.exports = { Game };
