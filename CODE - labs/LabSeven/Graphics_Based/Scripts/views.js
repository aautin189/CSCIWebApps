

// countdown clock
function printAttemptsRemaining(){
	let attemptsText = document.getElementById("attempts");
	attemptsText.innerHTML = `Time Left: ${timeleft}`;
}



// will tell you if your guess was too high or too low
function printClue(status, guess){
	let [digit100,digit10,digit1] = status=='HI' ? ['H','I','-'] : ['L','O','-'];
	document.getElementById("digit-100s").src = `./images/${digit100}.png`;
	document.getElementById("digit-10s").src = `./images/${digit10}.png`;
	document.getElementById("digit-1s").src = `./images/${digit1}.png`;
	then = Date.now();
}



// this message ends the game whether if you guessed it correctly or you ran out of time
function printGameOver(status){
	if (status === 'WIN'){
		var message = `<h1>You Win! </h1> <p>Got it in ${30-timeleft} seconds. </p>`;
	}
	else{
		var message = `<h1>You Lose!</h1> <p>The number was: ${passcode}</p>`;
	}
	document.body.innerHTML = message;
}




function printDigits(){
	document.getElementById("digit-100s").src = `./images/${guess.hundreds}.png`;
	document.getElementById("digit-10s").src = `./images/${guess.tens}.png`;
	document.getElementById("digit-1s").src = `./images/${guess.ones}.png`;
	
}



function refresh(){
	let now = Date.now();
	if(now - then > 1000){
		printAttemptsRemaining();
		printDigits();
	}
	requestAnimationFrame(refresh);
}