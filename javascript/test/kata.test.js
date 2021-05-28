const { Game } = require("../src/kata");

describe("Test for Game", function () {
  it("If you strike one bawl the roll score is one", function () {
    const game = new Game();

    game.roll(1);

    expect(game.score()).toBe(1);
  });

  it("If you strike two bawl the roll score is two", function () {
    const game = new Game();

    game.roll(2);

    expect(game.score()).toBe(2);
  });
});
