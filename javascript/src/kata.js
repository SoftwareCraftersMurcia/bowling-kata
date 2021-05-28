class Game {
  constructor() {
    this.currentScore = 0;
  }

  roll(n) {
    this.currentScore += n;
  }

  score() {
    return this.currentScore;
  }
}

module.exports = { Game };
