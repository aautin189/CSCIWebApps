
//Function: maps callbacks to button IDs
const getCallbacks = function(){
	const callbacks = {};
	callbacks['new-game-button'] = newGameMenu;
	callbacks['start-game-button'] = startGame;
	callbacks['join-game-button'] = joinGameMenu;
	callbacks['find-game-button'] = findGame;
	callbacks['submit-guess-button'] = submitGuess;
	callbacks['reset-game-button'] = resetGame;
	callbacks['quit-game-button'] = mainMenu;
	return callbacks;
}


//Function: get the user's guess value from HTML input
const getGuess = () => document.getElementById('guess-input').value;


//Function: get existing game's ID value from html input
const getGameID = () => document.getElementById('room-code').value;


//Function: takes variable number of button IDs & sets their event listeners
const addController = function(...buttonIDs){
	const callbacks = getCallbacks();
	for(let id of buttonIDs){
		const button = document.getElementById(id);
		 button.addEventListener('click', callbacks[id]);

	}
}


//Functions: to get the min & max values from inputs
const getMin = () => document.getElementById('min-value').value;
const getMax = () => document.getElementById('max-value').value;
