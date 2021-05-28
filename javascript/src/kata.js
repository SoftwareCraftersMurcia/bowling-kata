class Game {
  constructor() {
    this.currentScore = 0;
    this.previousRollWasStrike = false;
  }

  roll(n) {
    if (this.previousRollWasStrike) {
      this.currentScore += 2 * n;
    } else {
      this.currentScore += n;
    }
    if (n === 10) this.previousRollWasStrike = true;
  }

  score() {
    return this.currentScore;
  }
}

module.exports = { Game };
