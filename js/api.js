const pokemonApi = "https://api.pokemontcg.io/v2/cards/data/<id>";
const pokemonName = document.querySelector("test-container");
const testDisplay = document.querySelector("testBtn");

//this function grabs the pokemon data via the API
function getPokemon() {
	return fetch(pokemonApi, {
		method: "GET",
		headers: {
			"X-Api-Key": "ef72570ff371408f9668e414353b7b2e", // api key
		},
	})
		.then((response) => {
			response.json();
		})
		.then((pokemon) => {
			pokemon.card.find("base1-4");
		})
		.then((card) => {
			return card.name;
			console.log(card.name); // "Charizard"
		});
}

//ANCHOR I reworked this like 100 times but it keeps throwing a 404 error. i'll keep working it over though
