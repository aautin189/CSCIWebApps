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