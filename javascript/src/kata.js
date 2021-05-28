class Game {
  constructor() {
    this.currentScore = 0;
    this.numberOfRollsWithBonus = 0;
  }

  roll(n) {
    if (this.numberOfRollsWithBonus > 0) {
      this.currentScore += 2 * n;
    } else {
      this.currentScore += n;
    }
    if (n === 10) this.numberOfRollsWithBonus = 2;
    else this.numberOfRollsWithBonus--;
  }

  score() {
    return this.currentScore;
  }
}

module.exports = { Game };
