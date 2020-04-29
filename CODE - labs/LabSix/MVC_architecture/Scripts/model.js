
// FILE: data and functions that manage the game logic 


let passcode = Math.floor(Math.random()*1000);	// generate random number as the answer
let tries = 10;	// how many attempts to guess the correct number?
let guess = new Guess();	// create an instance of Guess


function guessNumber(guess){
	tries--;

	if(guess == passcode){
		printGameOver('WIN');
	}
	else if(tries <= 0){
		printGameOver('LOSE');
	}
	else{
		printAttemptsRemaining(tries);
		giveClue(guess);
	}
}//END guessNumber function



function giveClue(status, guess){
	if(guess > passcode){
		printClue('HI', guess);
		
	}
	else{
		printClue('LO', guess);
		
	}
}// END giveClue function



