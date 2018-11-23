/* Variables we need for the game */

var choices = ["rock", "paper", "scissors"];

var played = 0;
var won = 0;
var lost = 0;
var draw = 0;

$('.score').hide();

/* User click */
$('button').click(function(event){
  $('button').removeClass("active");
  $('#machine p').removeClass("active");
  
  var you = this.getAttribute("value");
  $(this).addClass("active");
  var machine = computer_move();
  var verdict = compare(you, machine);
  score(verdict);
});


/* Machine move */
function computer_move() {
  var machine = Math.floor(Math.random() * (3 - 0)) + 0;
  machine = choices[machine];
  $("p[data-move="+machine+"]").addClass("active");
  //$("#machine").text(machine);
  return machine;
}


/* Compare moves */
function compare(you, machine) {
  
  var verdict_word = 'lose';
  var verdict_symbol = '<';
  
  if (you == machine) {
    verdict_word = 'draw';
    verdict_symbol = '=';
	
  } else if ((you == "rock") && (machine == "scissors")) {
    verdict_word = 'win';
    verdict_symbol = '>';
	
  } else if ((you == "paper") && (machine == "rock")) {
    verdict_word = 'win';
    verdict_symbol = '>';
	
  } else if ((you == "scissors") && (machine == "paper")) {
    verdict_word = 'win';
    verdict_symbol = '>';
  }
  
  $("#verdict--symbol").text(verdict_symbol);
  $("#verdict--word").text(verdict_word);
  return verdict_word;
}


function score(verdict) {
  switch (verdict) {
    case 'win':
      won++;
      $("#won").text(won);
      break;
    case 'lose':
      lost++;
      $("#lost").text(lost);
      break;
    case 'draw':
      draw++;
      $("#draw").text(draw);
      break;
  }

  played++;
  $("#played").text(played);
  $('.score').show();
}
