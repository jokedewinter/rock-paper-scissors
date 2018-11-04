
/*
 * Initialise variables
 * ------------------------------------------ */
var played = 0;
var you_won = 0;
var you_draw = 0;

$("#played").append(played);
$("#won").append(you_won);
$("#draw").append(you_draw);

var choices = ["rock", "paper", "scissors"];


/*
 * Check you move with button clicked
 * ------------------------------------------ */

$("#rock").click(function(event) {
	$("#you").text('rock');
	var computer = computer_move();
	compare('rock', computer);
});
	
$("#paper").click(function(event) {
	$("#you").text('paper');
	var computer = computer_move();
	compare('paper', computer);
});

$("#scissors").click(function(event) {
	$("#you").text('scissors');
	var computer = computer_move();
	compare('scissors', computer);
});

/*
 * Computer counter move
 * ------------------------------------------ */
function computer_move() {
	/*
	The first item in an array is 0.
	
	The function to generate a random value between two digits:
	Math.floor(Math.random() * (max - min)) + min
	The maximum is exclusive and the minimum is inclusive.
	The Math.foor function makes sure the result is a round number.
	*/
	var computer = Math.floor(Math.random() * (3 - 0)) + 0; 
	computer = choices[computer];
	$("#computer").empty();
	$("#computer").append(computer);
	return computer;
}

/*
 * Compare the result
 * ------------------------------------------ */
function compare(you, computer) {

	/* 
	The verdict variable tracks the result. 
	Set to 'lose' initially to change value in case of a win or draw.
	*/
	var verdict = 'lose';
	
	if (( you == 'rock' ) && ( computer == 'scissors' )) { verdict = 'win'; }
	if (( you == 'paper' ) && ( computer == 'rock' )) { verdict = 'win'; }
	if (( you == 'scissors' ) && ( computer == 'paper' )) { verdict = 'win'; }
	
	if ( you == computer ) { verdict = 'draw'; }

	$("#verdict").text('you ' + verdict);
	
	if ( verdict == 'win' ) { 
		you_won++; 
		$("#won").text(you_won); 
	}
	
	if ( verdict == 'draw' ) { 
		you_draw++; 
		$("#draw").text(you_draw); 
	}

	played++;
	$("#played").text(played);
	
	return;
}
