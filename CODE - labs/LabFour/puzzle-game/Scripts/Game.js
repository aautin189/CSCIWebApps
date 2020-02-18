//ALGORITHM

// 1. Set passcode to show some integer value
// 2. Prompt the player to enter a number and record it as the guess
// 3. If the guess is the passcode
	// 4. report that the player wins
// 5. Else
	// 6. Report that the player loses



let passcode = Math.floor(Math.random()*1000);
let tries = 10;
let guess;

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
}// END while loop


function giveClue(guess){
	if(guess > passcode){
		console.log(guess + " is too High!");
	}
	else{
		console.log(guess + " is too Low!");
	}
}// END giveClue function



