const { Game } = require("../src/kata");

describe("Test for Game", () => {
  let game;

  beforeEach(() => {
    game = new Game();
  });

  describe("with one single roll", () => {
    it("If you knock one pin the roll score is one", () => {
      game.roll(1);

      expect(game.score()).toBe(1);
    });

    it("If you knock two pins the roll score is two", () => {
      game.roll(2);

      expect(game.score()).toBe(2);
    });
  });

  describe("with several rolls", () => {
    it("should sum up both rolls", () => {
      game.roll(1);
      game.roll(1);
      expect(game.score()).toBe(2);
    });

    it("should sum up all rolls", () => {
      game.roll(3);
      game.roll(3);
      game.roll(4);
      game.roll(1);
      expect(game.score()).toBe(11);
    });
  });

  describe("after strike", () => {
    beforeEach(() => {
      game.roll(10);
    });

    it("next roll should score double", () => {
      game.roll(1);
      expect(game.score()).toBe(12);
    });

    it("next two rolls should score double", () => {
      game.roll(1);
      game.roll(1);
      expect(game.score()).toBe(14);
    });

    it("the third roll should score as normal", () => {
      game.roll(1);
      game.roll(1);
      game.roll(1);
      expect(game.score()).toBe(15);
    });
  });
});
