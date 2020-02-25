

let passcode = Math.floor(Math.random()*1000);
let guess = new Guess();
let then = Date.now();
let timeleft = 30;
let gameover = false;


function guessNumber(guess){
	timeleft--;
	timeleft-=(Date.now()-then)/1000;

	if(guess == passcode){
		gameover = true;
		printGameOver('WIN');
	}
	else if(timeleft <= 0 && gameover == false){
		printGameOver('LOSE');
	}
	else{
		printAttemptsRemaining(timeleft);
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










