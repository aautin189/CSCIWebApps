


// initializes all controllers
const initControllers = function(){
	const contactForm = document.getElementById('contact-form');
	contactForm.addEventListener('submit', submitEvent);
}



const submitEvent = function(){
	const formData = new Object();
	formData[entry1] = document.getElementById('name').value;
	formData[entry2] = document.getElementById('email').value;
	formData[entry3] = document.getElementById('message').value;

	postToGoogleDB(formData);
}



initControllers();	// must be last line of code


