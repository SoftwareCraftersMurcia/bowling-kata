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
    if (this.isRollAStrike(n)) this.numberOfRollsWithBonus = 2;
    else if(this.areRollsASpare(n)) this.numberOfRollsWithBonus = 1;
    else this.numberOfRollsWithBonus--;
    this.previousRollScore = n;
  }

  isRollAStrike(n) {
    return n === 10;
  }

  areRollsASpare(n) {
    return n + this.previousRollScore === 10;
  }

  score() {
    return this.currentScore;
  }
}

module.exports = { Game };
