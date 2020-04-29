

let passcode = Math.floor(Math.random()*1000);	// setting the passcode
let tries = 10;	// user has 10 attempts
let guess;	// the user's attempted value


/*
GAME LOOP: 
let's run the game as long as the user has tries left and 
hasn't yet guessed correctly.
*/
while(tries > 0 && guess != passcode){
	console.log("You have "+ tries + " guesses left.");
	guess = prompt("Enter a number: ");
	tries--;

	if (guess == passcode){
		console.log("You Win! You got it in " + (10-tries) + " guesses.");
	}
	else if (tries == 0){
		console.log("You lose! The number was " + passcode);
	}

	else{
		giveClue(guess);
	}
}




/*
FUNCTION:
tells the user where they are relative to the correct answer
*/

function giveClue(guess){
	if(guess > passcode){
		console.log(guess + " is too High!");
	}
	else{
		console.log(guess + " is too Low!");
	}
}



