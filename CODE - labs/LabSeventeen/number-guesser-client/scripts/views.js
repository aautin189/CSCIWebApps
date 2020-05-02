
//Function: overwrites the HTML view div
const joinGameMenu = function(){
	const view = document.getElementById('view');
	const html = 	`<section>
						Game ID: <input id = 'room-code' type=text value='GameID'>
						<button id='find-game-button'>Join</button>
					</section>`
	view.innerHTML = html;
	addController('find-game-button');
}


//Function: adds a clue to the game view's clue list
const viewClue = function(clue,guess){
	clueList = document.getElementById('clues-list');
	clueList.innerHTML += `<li>${guess} is ${clue}</li>`
}



//Function: the main menu
const mainMenu = function(){
	const view = document.getElementById('view');
	const html = 			`<section>
								<button id = 'new-game-button'>New Game</button>
								<button id = 'join-game-button'>Join Game</button>
							</section>`;
	view.innerHTML = html;
	addController('new-game-button', 'join-game-button');

}


//Function: new game
const newGameMenu = function(){
	const view = document.getElementById('view');
	const html = 			`<section>
								Start: <input id = 'min-value' type=number value=0>
								End:   <input id = 'max-value' type=number value=1000>
								<button id = 'start-game-button'>Start</button>
							</section>`
	view.innerHTML = html;
	addController('start-game-button');
}

//Function: view game
const viewGame = function(){
	const view = document.getElementById('view');
	const html = 	`<section>
						<h3>Game ID: ${gameID}</h3>
						<p> Min: ${min} Max: ${max} </p>
						<input type=number id='guess-input'>
						<button id='submit-guess-button'>Submit</button>
						<ul id='clues-list'></ul>
				     </section>`
	view.innerHTML = html;
	addController('submit-guess-button');
}

