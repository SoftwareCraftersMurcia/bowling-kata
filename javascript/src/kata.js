class Game {
  constructor() {
    this.currentScore = 0;
  }

  roll(n) {
    if(this.currentScore === 10) {
      this.currentScore += 2*n;
      return;
    }
    this.currentScore += n;
  }

  score() {
    return this.currentScore;
  }
}

module.exports = { Game };
