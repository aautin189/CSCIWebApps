

let passcode = Math.floor(Math.random()*1000);
let tries = 10;
let guess = new Guess();
let then = Date.now();


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


function main(){
	let now = Date.now();
	if(now - then > 1000){
		printDigits();
	}
	requestAnimationFrame(main);
}

main();










