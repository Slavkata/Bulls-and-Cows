$(document).ready(function() {
  Paloma.start();
});
var HomesController = Paloma.controller('Homes', {
  index: function() {
    var game = new Phaser.Game(1235, 570, Phaser.CANVAS, 'game');
    game.state.add("Preload", preload);
    game.state.add("MainScreen", mainscreen);
    game.state.add("GameScreen", gamescreen);
    game.state.add("GameWon", gamewon);
    game.state.add("GameLost", gamelost);
    game.state.start("Preload");
  }
});
