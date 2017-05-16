var gamelost = function (game) {}


gamelost.prototype = {
    create: function() {
      var style = { font: "120px Arial", fill: "#ff0044", align: "center" };

      var gameover = this.game.add.text(this.game.world.centerX,
                      this.game.world.centerY, "Game Over", style);
      gameover.anchor.set(0.5);

      var restart = this.game.add.button(this.game.world.centerX,
                    this.game.world.centerY + 120, 'new_game', this.newgame, this);
      restart.anchor.set(0.5);

      var number = this.game.add.text(this.game.world.centerX,
                    this.game.world.centerY - 120, this.game.the_number, style);
      number.anchor.set(0.5);
    },

    newgame: function() {
      this.game.state.start("MainScreen");
    }
}
