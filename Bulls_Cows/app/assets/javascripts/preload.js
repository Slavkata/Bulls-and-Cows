var preload = function(game) {};


preload.prototype = {
  preload: function() {
    this.game.stage.backgroundColor = "#aaaaaa"
    this.game.load.spritesheet('start_button', '/assets/start_button.png', 315, 149);
    this.game.load.spritesheet('new_game', '/assets/new_game.png');
  },

  create: function() {
    this.game.state.start("MainScreen");
  }
}
