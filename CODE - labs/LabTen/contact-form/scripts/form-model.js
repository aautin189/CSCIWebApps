

const formId= "1FAIpQLSd6UMu8gS7EVECoeuqAsBUXJU_W1eGQxOXD04jjB9jHUrZhxg";
const entry1 = "entry.465874413";
const entry2 = "entry.1364032123";
const entry3 = "entry.1343896050";

const getPath = formId => `https://docs.google.com/forms/d/e/${ formId }/formResponse`;



/*
Use the form id to get path, use path & data to get URL with Query String.
Use URL and 'POST' (HTTP verb) to initialize a HTTP request.
Requies 3 helper functions
*/
const postToGoogleDB = function(data){
	const path = getPath(formId);
	const url = getURL( path, data );
	initRequest('POST', url);
}


/*
Helper function, instantiate URL object & set data to its searchParams attribute
*/
const getURL = function(path, params){
	const url = new URL(path);
	for(let key in params){
		url.seachParams.set(key, params[key]);
	}
	return url;
}


/*
Helper function, initializes a request.
Uses the form to do so.
Sets form action with URL string & sets form method with the HTTP verb.
Both passed in as parameters
*/
const initRequest = function(verb, url){
	const contactForm = document.getElementById('contact-form');
	contactForm.action = url.toString();
	contactForm.method = verb;
}