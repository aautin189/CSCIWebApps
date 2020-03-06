
/*
Step 2 => Controller Logic: Add 'submit' listener to the HTML form via the DOM
*/


// initializes all controllers
const initControllers = function(){
	const contactForm = document.getElementById('contact-form');
	contactForm.addEventListener('submit', submitEvent);
}


// submit event -- set HTTP attributes for the contact form
const submitEvent = function(){
	document.getElementById('name').name = entry1;
	document.getElementById('email').name = entry2;
	document.getElementById('message').name = entry3;

	const contactForm = document.getElementById('contact-form');
	contactForm.action = getPath(formId);
	contactForm.method = "POST";
}



initControllers();	// must be last line of code


