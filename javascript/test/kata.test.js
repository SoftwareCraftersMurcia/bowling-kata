const {Game} = require('../src/kata');

describe('Test for Game', () => {
  let game;

  beforeEach(() => {
    game = new Game();
  });

  describe('with one single roll',  () =>{
    it('If you knock one pin the roll score is one', () => {
      game.roll(1);

      expect(game.score()).toBe(1);
    });

    it('If you knock two pins the roll score is two', () => {
      game.roll(2);

      expect(game.score()).toBe(2);
    });
  });

  describe('with several rolls',  () => {
    it('should sum up both rolls',  () => {
      game.roll(1);
      game.roll(1);

      expect(game.score()).toBe(2)
    });
  });

});
