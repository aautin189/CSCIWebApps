let button = document.getElementById("guess-button");
button.addEventListener("click", buttonEvent);

function buttonEvent(){
	let hundreds = document.getElementById("digit-100s");
	let tens = document.getElementById("digit-10s");
	let ones = document.getElementById("digit-1s");
	let number = "" + hundreds.value + tens.value + ones.value;
	guessNumber(number);
}