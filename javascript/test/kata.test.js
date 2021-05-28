const {Game} = require('../src/kata');

describe('Test for Game', function() {
  let game;
  beforeEach(() => {
    game = new Game();
  });
  it('If you knock one pin the roll score is one', function() {
    game.roll(1);

    expect(game.score()).toBe(1);
  });

  it('If you knock two pins the roll score is two', function() {
    game.roll(2);

    expect(game.score()).toBe(2);
  });
});
