var gamewon = function (game) {}

var score;

function submit(name, score) {
  $.post("/score?name=" + name + 'score=' + score, function(data, status) {
    alert("Your score was submitted");
  });
}

gamewon.prototype = {
  create: function () {
    score = 22 - this.game.score;
    var style = { font: "65px Arial", fill: "#ff0044", align: "center" };
    var gametext = this.game.add.text(this.game.world.centerX, this.game.world.centerY - 180, 'You Just Won', style);
    gametext.anchor.set(0.5);
    var scoretext = this.game.add.text(this.game.world.centerX, this.game.world.centerY - 60, "Score: " + score, style);
    scoretext.anchor.set(0.5);
    this.game.add.plugin(PhaserInput.Plugin);
    input = this.game.add.inputField(545, 300, {
        font: '18px Arial',
        fill: '#212121',
        fontWeight: 'bold',
        width: 150,
        padding: 8,
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 6,
        placeHolder: 'Enter Name',
        type: PhaserInput.InputType.text
      });
      input.blockInput = true;
      this.game.input.keyboard.onDownCallback = function() {
        if(this.game.input.keyboard.event.keyCode == 13)
          submit(input.text._text, score.toString());
      };
  }
}
