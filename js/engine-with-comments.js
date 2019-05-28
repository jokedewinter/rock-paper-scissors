/* ------------------------------------------------
 * Variables we need for the game
 * ------------------------------------------------ */

/* The list of options for the computer move */
var choices = ["rock", "paper", "scissors"];

/* The variables you need to keep track of the score */
var played = 0;
var won = 0;
var lost = 0;
var draw = 0;



/* -----------------------------------------------------------------------------------
 * Listen for the button click of the user.
 *
 * $('button')
 * Selects any HTML element that is a <button>.
 *
 * .click(function(event){...}
 * If a button is clicked then the jQuery click function will start doing it's thing.
 * ----------------------------------------------------------------------------------- */

$('button').click(function(event){
  /* 
  Create a variable called "play_you". 
  Give it the value attribute of "this" button (the one that was clicked). 
  */
  var play_you = this.getAttribute("value");

  /* 
  Display which button was clicked in the HTML.
  
  $("#play_you")
  This selects an HTML element that has the id of "#play_you".
  
  .text(play_you)
  The jQuery function "text" is applied on this HTML element.
  It will replace all content between the HTML tags of this element.
  The replacement value will be the value of the play_you variable. 
  */
  $("#play_you").text(play_you);

  /* 
  Create a variable called "play_machine".
  Assign it the value of whatever happens in the function "computer_move()". 
  To get that value, the programme will now jump to that function 
  and come back when it is done. 
  When it's done it will bring back a value to assign to "play_machine". 
  */
  var play_machine = computer_move();

  /* 
  Create a variable called "verdict".
  Assign it the value of whatever happens in the function "compare()". 
  The programme will jump to that function and take the values 
  of "play_you" and "play_machine" with it. 
  When it's done it will bring back a value to assign to "verdict". 
  */
  var verdict = compare(play_you, play_machine);

  /* 
  This is a call to the "score" function. 
  It takes the value of the "verdict" variable to use that to display the score. 
  Once this function call is done, all the things that need to happen 
  for the button click are done. 
  If another button is clicked, all the stuff here will be done again. 
  */
  score(verdict);
});



/* -----------------------------------------------------------------------------------
 * Function
 * Create a counter move by the computer. 
 * Once completed it will return to where it was called in the first place.
 * ----------------------------------------------------------------------------------- */

function computer_move() {
  /* 
  Create a variable "play_machine".
  Assign it a random number between 0 and 2.
  */
  var play_machine = Math.floor(Math.random() * (3 - 0)) + 0;

  /* 
  Convert the random number to the corresponding value in the list of options
  created at the top of the programme. 
  The first item in a list in computer programmes is always 0. 
  */
  play_machine = choices[play_machine];

  /* 
  Update the HTML with the value of the computer move. 
  */
  $("#play_machine").text(play_machine);

  /* 
  This function is done and returns to where it was called.
  The value of "play_machine" is returned to assign to the "play_machine" variable 
  in the button click function. 
  */
  return play_machine;
}



/* -----------------------------------------------------------------------------------
 * Function
 * Compare the move of the user with that of the computer. 
 * It also updates the value of the verdict in the HTML.
 * It receives the values of the user move and the computer move to do the comparing.
 * ----------------------------------------------------------------------------------- */

function compare(you, machine) {
  /* 
   Create a variable called "verdict".
   Assign it the value of "lose" as a default. 
   Once we start comparing both moves, we will only update this variable 
   if the verdict is no longer "lose". 
   */
  var verdict = 'lose';

  /* 
   Compare the two moves. 
   First check if they are the same.
   If they are, change "verdict" from "lose" to "draw". 
   */
  if (you == machine) {
    verdict = 'draw';

  } else if ((you == "rock") && (machine == "scissors")) {
	/* 
	 Check if the user move was "rock" AND the computer move was "scissors". 
	 If true (both need to be true), then change "verdict" from "lose" to "win". 
	 */
    verdict = 'win';

  } else if ((you == "paper") && (machine == "rock")) {
  	/* 
  	 Check if the user move was "paper" AND the computer move was "rock". 
  	 If true (both need to be true), then change "verdict" from "lose" to "win". 
  	 */
    verdict = 'win';

  } else if ((you == "scissors") && (machine == "paper")) {
	/* 
	 Check if the user move was "scissors" AND the computer move was "paper". 
	 If true (both need to be true), then change "verdict" from "lose" to "win". 
	 */
    verdict = 'win';
  }

  /* 
   In the event that none of the if statements were true,
   the verdict value will still be "lose".
   */

  /* 
   Update the HTML to show the value of our "verdict" variable. 
   */
  $("#verdict").text(verdict);

  /* 
   End of this function and return to the button click function. 
   The value of "verdict" is returned to assign to the "verdict" variable 
   in the button click function. 
   */
  return verdict;
}



/* ------------------------------------------------
 * Function 
 * Update the score values in the HTML. 
 * It receives the value of the "verdict" variable.
 * Use that to update all the possible tallies.
 * ------------------------------------------------ */

function score(verdict) {
  /* 
   The switch statement is like an if statement, but easier to read. 
   It's used when you want to check the value of a single variable against possible options. 
   You give the switch statement the variable you want to check. 
   */
  switch (verdict) {
    
	/* 
	 In case that the value of "verdict" is equal to "win".
	 All the instructions up (and including the "break" statement are executed.
	 The "break" statement will quit the "switch" statement.
	 */
    case 'win':
      /* 
	   First increase the "win" counter with 1.
	   Then update the HTML element that keeps track of the number of wins.
	   Finally "break out" of the switch statement. 
	   There is nothing else in this switch statement left to do.
	   */
      won++;
      $("#game_won").text(won);
      break;
      
	/* 
	 In case that the value of "verdict" is equal to "lose". 
	 */
	case 'lose':
      lost++;
      $("#game_lost").text(lost);
      break;
      
	/* 
	 In case that the value of "verdict" is equal to "draw". 
	 */ 
    case 'draw':
      draw++;
      $("#game_draw").text(draw);
      break;
  }

  /* 
  After the switch statement is complete, update the number of games we have played.
  Increase the "played" variable by 1. 
  */
  played++;

  /* 
  Finally update the HTML value of "played". 
  */
  $("#game_played").text(played);

}

/*
THE END.
EVERYONE LIVED HAPPILY EVER AFTER.
*/
