const BASE_URL = 'https://swapi.co/api/';

async function getPeoples(opt = "") {
	console.log("opt:" , opt);
	
	let result;
	await fetch((opt !== "" | null ? opt : BASE_URL + 'people'))
		.then(function (response) {
			return response.json();
		})
		.then(function (myJson) {
			result = myJson;
		//	console.log(myJson);
			
		});

	return result; 
}


async function getFilms(opt = "") {
	console.log("opt:" , opt);
	
	let result;
	await fetch((opt !== "" | null ? opt : BASE_URL + 'films'))
		.then(function (response) {
			return response.json();
		})
		.then(function (myJson) {
			result = myJson;
			console.log(myJson);
			
		});

	return result; 
}

