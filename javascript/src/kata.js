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
    else if(n+this.previousRollScore === 10) this.numberOfRollsWithBonus = 1;
    else this.numberOfRollsWithBonus--;
    this.previousRollScore = n;
  }

  score() {
    return this.currentScore;
  }
}

module.exports = { Game };
