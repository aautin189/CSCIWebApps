

let passcode = Math.floor(Math.random()*1000);	// generate random number as the answer
let tries = 10;									// how many attempts to guess the correct number?


let attemptsText = document.getElementById("attempts");			//CONNECT to player prompt message
attemptsText.innerHTML = "Number of attempts left: " + tries;	//override prompt message
let clueText = document.getElementById("clue");					//CONNECT to feedback area




let button = document.getElementById("guess-button");	//CONNECT to submit button
let number = document.getElementById("guess-text");		//CONNECT to input text box
button.addEventListener("click", guessNumber);			//now listening for a click on submit button; triggers call to guessNumber() function





/*
FUNCTION: triggered anytime user clicks on the submit button of webpage

*/
function guessNumber(){
	
	let guess = number.value;	//assign user input to variable
	tries--;	//decrement rounds available


	// PICK ONE - override existing content on webpage
	if(guess == passcode){
		document.body.innerHTML = "<h1>You Win!</h1>" + "<p>Got it in " + (10-tries) + " tries.</p>";	
	}
	else if(tries <= 0){
		document.body.innerHTML = "<h1>You Lose!</h1>" + "<p>The number was: " + passcode + "</p>";
	}
	else{
		attemptsText.innerHTML = "Number of attempts left: " + tries;
		giveClue(guess);
	}
}


/*
FUNCTION: triggered when user submits incorrect value

*/
function giveClue(guess){
	if(guess > passcode){
		clueText.innerHTML += "<li>" + guess + " is too high! </li>";
		
	}
	else{
		clueText.innerHTML += "<li>" + guess + " is too Low! </li>";
		
	}
}



