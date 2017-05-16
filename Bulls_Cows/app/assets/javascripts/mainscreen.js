var mainscreen = function(game) {};

var count = 3;
var select_number;
var start_button;

mainscreen.prototype = {
  create: function() {
    var style = { font: "65px Arial", fill: "#ff0044", align: "center" };

    select_number = this.game.add.text(this.game.world.centerX,
              this.game.world.centerY - 200, "3", style);
    select_number.anchor.set(0.5);

    var left_arrow = this.game.add.text(this.game.world.centerX - 65,
              this.game.world.centerY - 200, '<', style);
    left_arrow.anchor.set(0.5);

    var right_arrow = this.game.add.text(this.game.world.centerX + 65,
              this.game.world.centerY - 200, '>', style);
    right_arrow.anchor.set(0.5);

    left_arrow.inputEnabled = true;
    right_arrow.inputEnabled = true;

    left_arrow.events.onInputDown.add(this.left_down, this);
    right_arrow.events.onInputDown.add(this.right_down, this);

    start_button = this.game.add.button(this.game.world.centerX,
                this.game.world.centerY, 'start_button', this.start_game, this);
    start_button.anchor.set(0.5);
  },

  left_down: function(item) {
    if(count > 3) {
      count--;
      select_number.text = count;
    }
  },

  right_down: function(item) {
    if (count < 10){
      count++;
      select_number.text = count;
    }
  },

  start_game: function() {
    this.game.game_number = select_number.text;
    console.log(this.game.game_number);
    this.game.state.start("GameScreen");
  }
}
