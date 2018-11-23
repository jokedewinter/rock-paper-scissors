/* Variables we need for the game */

var choices = ["rock", "paper", "scissors"];

var played = 0;
var won = 0;
var lost = 0;
var draw = 0;


/* Listen for the button clicks */
$("#rock").click(function(event) {
  var play_you = 'rock';
  $("#play_you").text(play_you);

  
});

$("#paper").click(function(event) {
  var play_you = 'paper';
  $("#play_you").text(play_you);
  var play_machine = computer_move();
  compare(play_you, play_machine);
});

$("#scissors").click(function(event) {
  var play_you = 'scissors';
  $("#play_you").text(play_you);
  var play_machine = computer_move();
  compare(play_you, play_machine);
});


function computer_move() {
  var play_machine = Math.floor(Math.random() * (3 - 0)) + 0;

  play_machine = choices[play_machine];
  $("#play_machine").text(play_machine);
  return play_machine;
}

function compare(you, machine) {
  var verdict = 'lose';

  if (you == machine) {
    verdict = 'draw';
  } else if ((you == "rock") && (machine == "scissors")) {
    verdict = 'win';
  } else if ((you == "paper") && (machine == "rock")) {
    verdict = 'win';
  } else if ((you == "scissors") && (machine == "paper")) {
    verdict = 'win';
  }

  if (verdict == 'win') {
    won++;
    $("#game_won").text(won);
  } else if (verdict == 'lose') {
    lost++;
    $("#game_lost").text(lost);
  } else if (verdict == 'draw') {
    draw++;
    $("#game_draw").text(draw);
  }

  $("#verdict").text(verdict);

  played++;
  $("#game_played").text(played);
}
