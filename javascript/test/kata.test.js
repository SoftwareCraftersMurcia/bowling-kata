const { Game } = require("../src/kata");

describe("Test for Game", function () {
  it("If you strike one bawl the roll score is one", function () {
    const game = new Game();
    game.roll(1);
    expect(game.score()).toBe(1);
  });
});
