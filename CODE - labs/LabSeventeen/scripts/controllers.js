
//Function: maps callbacks to button IDs
const getCallbacks = function(){
	const callbacks = {};
	callbacks['new-game-button'] = newGameMenu;
	callbacks['start-game-button'] = startGame;
	return callbacks;
}


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
