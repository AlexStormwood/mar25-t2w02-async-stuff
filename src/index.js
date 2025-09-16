

// (() => {

// })

// someArray.forEach(() => {})

// someArray.forEach(someFunctionThatHandlesArrayStuff())


let favouritePokemon = [
	"haunter",
	"tyranitar",
	"gengar",
	"snorlax",
	"jigglypuff",
	"bulbasaur",
	"hitmonlee",
	"blastoise",
	"pikachu"
];

favouritePokemon.forEach((individualName) => {
	console.log("This is a super cool Pokemon: " + individualName)
});


// setTimeout(() => {})

setTimeout(() => {
	console.log("Subscribe to the newsletter!");
}, 1000 * 5);


console.log("Page loaded!");



// Make API requests to this endpoint to get Pokemon data:
// https://pokeapi.co/api/v2/pokemon/

async function asyncGetPokemonData(targetPokemon){
	let response = await fetch("https://pokeapi.co/api/v2/pokemon/" + targetPokemon);
	let data = await response.json();
	console.log(data);
	return data;
}

// asyncGetPokemonData("pikachu").then((pikachuData) => {
// 	console.log("pikachuData is: \n" + JSON.stringify(pikachuData, null, 4));
// });



function getPokemonData(targetPokemon){
	let result = fetch("https://pokeapi.co/api/v2/pokemon/" + targetPokemon).then((response) => {
		console.log(response);
		// If the response body contains JSON data, return that as a valid JSON object
		return response.json();
	}).then((jsonResponse) => {
		// Logging the object with a string requires us to convert the object into a string manually:
		console.log("jsonResponse is: \n" + JSON.stringify(jsonResponse, null, 4));
		// Logging the object directly shows the object in full:
		// console.log(jsonResponse);
		return jsonResponse;
	});


	console.log(result);
	setTimeout(() => {
		console.log(result);
	}, 2000);

}

async function asyncGetMultiplePokemon(){
	
	// Parallel fetch requests:
	// let allResult = await Promise.all(
	// 	favouritePokemon.map((individualName) => {
	// 		return fetch("https://pokeapi.co/api/v2/pokemon/" + individualName).then((response) => response.json())
	// 	})
	// );
	// console.log(allResult);

	// Sequential fetch requests:
	let allResultSequential = [];

	favouritePokemon.forEach(async (individualName) => {
		let response = await fetch("https://pokeapi.co/api/v2/pokemon/" + individualName);
		let data = await response.json();
		allResultSequential.push(data);
		console.log("Adding this Pokemon to the allResultSequential now: " + data.name);
		console.log(allResultSequential.length);

	});

	console.log(allResultSequential);
	console.log(allResultSequential.length);
}

asyncGetMultiplePokemon();

function getMultiplePokemon(){
	Promise.all(
		favouritePokemon.map((individualName) => {
			return fetch("https://pokeapi.co/api/v2/pokemon/" + individualName).then((response) => response.json())
		})
	).then((allResult) => {
		console.log(allResult);
	});


	// Promise.all([
	// 	fetch("https://pokeapi.co/api/v2/pokemon/" + "pikachu").then((response) => response.json()),
	// 	fetch("https://pokeapi.co/api/v2/pokemon/" + "squirtle").then((response) => response.json()),
	// 	fetch("https://pokeapi.co/api/v2/pokemon/" + "blastoise").then((response) => response.json()),
	// ]).then((allResult) => {
	// 	console.log(allResult);
	// });
}

// getMultiplePokemon();

// function add(num1, num2){
// 	return num1 + num2;
// }

// getPokemonData("pikachu");