var express = require('express');							//import module: express
var router = express.Router();								//initialize Router
const {resetGame, guess, getGame, newGame, test} = require('../controllers/game.controllers');	//import test funtion


router.get('/test', test);									//endpoint for test()
router.get('/new', newGame);
router.get('/:id', getGame);								
router.get('/:id/guess', guess);
router.get('/:id/reset', resetGame);						//define variable route with colon(:)
															//Note: variable routes go after defined routes														
	


module.exports = router;									//export router as module