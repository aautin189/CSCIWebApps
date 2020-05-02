window.onload = mainMenu;


//Function: send request for new game to the backend API && display game view to console
async function startGame(){
	min = getMin();
	max = getMax();
	const url = `http://localhost:3000/api/game/new?start=${min}&end=${max}`;
	const response = await fetch(url);
	const data = await response.json();
	gameID = data.gameID;
	viewGame();
}



//Function: requests to reset game and then update game view
async function resetGame(){
	const url = `http://localhost:3000/api/game/${gameID}/reset`;
	const response = await fetch(url);
	await response.json().then(viewGame);
}


//Function: request backend to submit a guess
async function submitGuess(){
	const guess = getGuess();
	const url = `http://localhost:3000/api/game/${gameID}/guess?guess=${guess}`;
	const response = await fetch(url);
	const data = await response.json();

	if(data.success){
		switch(data.guess){
			case "correct": gameOverMenu("You Win!"); break;
			case "gameover": gameOverMenu("You Lose!"); break;
			default: viewClue(data.guess, guess);
		}
	}
}



//Function: request backend to get game data
async function findGame(){
	gameID = getGameID();
	const response = await fetch(`http://localhost:3000/api/game/${gameID}`);
	const data = await response.json();
	if(data.success){
		min = data.start;
		max = data.end;
		gameover = data.gameover;
		viewGame();
	}
	else{
		mainMenu();
	}
}