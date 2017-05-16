var gamescreen = function(game) {}

var digits_count;
var select_number;
var the_number = "";
var style = { font: "65px Arial", fill: "#ff0044", align: "center" };
var prev_style = { font: "32px Arial", fill: "#ff0044", align: "center" };
var prev;
var guess_counter = 0;

gamescreen.prototype = {
  create: function() {
    digits_count = parseInt(this.game.game_number);
    this.genNumber();

    prev = this.game.add.text(0, this.game.world.centerY - 10, '', prev_style);
    // prev.anchor.set(0.5);

    var text = this.game.add.text(this.game.world.centerX, this.game.world.centerY - 100, 'Type Your Guess:', style);
    text.anchor.set(0.5);

    select_number = this.game.add.text(this.game.world.centerX, this.game.world.centerY, '', style);

    var key0 = this.game.input.keyboard.addKey(Phaser.Keyboard.ZERO);
    key0.onDown.add(this.putZero, this);

    var key1 = this.game.input.keyboard.addKey(Phaser.Keyboard.ONE);
    key1.onDown.add(this.putOne, this);

    var key2 = this.game.input.keyboard.addKey(Phaser.Keyboard.TWO);
    key2.onDown.add(this.putTwo, this);

    var key3 = this.game.input.keyboard.addKey(Phaser.Keyboard.THREE);
    key3.onDown.add(this.putThree, this);

    var key4 = this.game.input.keyboard.addKey(Phaser.Keyboard.FOUR);
    key4.onDown.add(this.putFour, this);

    var key5 = this.game.input.keyboard.addKey(Phaser.Keyboard.FIVE);
    key5.onDown.add(this.putFive, this);

    var key6 = this.game.input.keyboard.addKey(Phaser.Keyboard.SIX);
    key6.onDown.add(this.putSix, this);

    var key7 = this.game.input.keyboard.addKey(Phaser.Keyboard.SEVEN);
    key7.onDown.add(this.putSeven, this);

    var key8 = this.game.input.keyboard.addKey(Phaser.Keyboard.EIGHT);
    key8.onDown.add(this.putEight, this);

    var key9 = this.game.input.keyboard.addKey(Phaser.Keyboard.NINE);
    key9.onDown.add(this.putNine, this);

    var backspace = this.game.input.keyboard.addKey(Phaser.Keyboard.BACKSPACE);
    backspace.onDown.add(this.backspace, this);

    var enter = this.game.input.keyboard.addKey(Phaser.Keyboard.ENTER);
    enter.onDown.add(this.enter, this);
  },

  update: function() {
    select_number.position.x = this.game.world.centerX;
    select_number.anchor.set(0.5);
  },

  putZero: function() {
    if(select_number.text.length < digits_count && select_number.text.length > 0
        && !select_number.text.match("0")) {
      select_number.text += "0";
    }
  },

  putOne: function() {
    if(select_number.text.length < digits_count && !select_number.text.match("1")) {
      select_number.text += "1";
    }
  },

  putTwo: function() {
    if(select_number.text.length < digits_count && !select_number.text.match("2")) {
      select_number.text += "2";
    }
  },

  putThree: function() {
    if(select_number.text.length < digits_count && !select_number.text.match("3")) {
      select_number.text += "3";
    }
  },

  putFour: function() {
    if(select_number.text.length < digits_count && !select_number.text.match("4")) {
      select_number.text += "4";
    }
  },

  putFive: function() {
    if(select_number.text.length < digits_count && !select_number.text.match("5")) {
      select_number.text += "5";
    }
  },

  putSix: function() {
    if(select_number.text.length < digits_count && !select_number.text.match("6")) {
      select_number.text += "6";
    }
  },

  putSeven: function() {
    if(select_number.text.length < digits_count && !select_number.text.match("7")) {
      select_number.text += "7";
    }
  },

  putEight: function() {
    if(select_number.text.length < digits_count && !select_number.text.match("8")) {
      select_number.text += "8";
    }
  },

  putNine: function() {
    if(select_number.text.length < digits_count && !select_number.text.match("9")) {
      select_number.text += "9";
    }
  },

  backspace: function() {
    if(select_number.text.length > 0) {
      select_number.text = select_number.text.slice(0, -1);
    }
  },

  enter: function() {
    if(select_number.text.length == digits_count) {
      this.submit();
    }
  },

  genNumber: function() {
    var items = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    for (i = 0; i < digits_count; i++) {
      var rand = Math.floor(Math.random() * items.length);
      if (i == 0 && rand == 0) {
          rand = Math.floor(Math.random() * items.length - 1) + 1;
      }
      var item = items[rand];
      items.splice(rand, 1);
      the_number += item;
    }
    console.log(the_number);
    this.game.the_number = the_number;
  },

  submit: function () {
    var num = select_number.text;
    select_number.text = '';
    var bulls_count = 0;
    var cows_count = 0;
    guess_counter += 1;

    for (i = 0; i < num.length; i++) {
      if (the_number[i] === num[i]) {
        bulls_count += 1;
      }
      else if (the_number.match(num[i])){
        cows_count += 1;
      }
    }

    if (bulls_count == num.length) {
      this.game.score = guess_counter - 1;
      this.game.state.start("GameWon");
      return;
    }

    if (guess_counter == 22) {
      this.game.state.start("GameLost");
    }
    this.addText(bulls_count, cows_count);
  },

  addText: function(bulls_count, cows_count) {
    var str = guess_counter % 3 == 0 ? " |\n" : " | "
    prev.text += ('Guess: ' + guess_counter + ' Bulls: ' + bulls_count + ' Cows: ' + cows_count + str);
  }
}
