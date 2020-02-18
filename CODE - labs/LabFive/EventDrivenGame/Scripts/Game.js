//ALGORITHM

// 1. Set passcode to show some integer value
// 2. Prompt the player to enter a number and record it as the guess
// 3. If the guess is the passcode
	// 4. report that the player wins
// 5. Else
	// 6. Report that the player loses



let passcode = Math.floor(Math.random()*1000);
let tries = 10;



/*HUD elements (player output data)*/
let attemptsText = document.getElementById("attempts");
attemptsText.innerHTML = "Number of attempts left: " + tries;

let clueText = document.getElementById("clue");

/*Event Listeners (player input controls) */
let button = document.getElementById("guess-button");
let number = document.getElementById("guess-text");
button.addEventListener("click", guessNumber);


function guessNumber(){
	
	let guess = number.value;
	tries--;


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
}//END guessNumber function



function giveClue(guess){
	if(guess > passcode){
		clueText.innerHTML += "<li>" + guess + " is too high! </li>";
		
	}
	else{
		clueText.innerHTML += "<li>" + guess + " is too Low! </li>";
		
	}
}// END giveClue function



