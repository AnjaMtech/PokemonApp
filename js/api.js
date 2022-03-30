//created items
const pokemonApi = "https://api.pokemontcg.io/v2/cards/data/<id>";
const pokemonName = document.querySelector("test-container");
const testDisplay = document.querySelector("testBtn");

//Event listners
// test for data response testDisplay.addEventListener("click", getPokemon);

//this function grabs the pokemon data via the API
function getPokemon() {
	return fetch(pokemonApi, {
		//method: "GET",
		headers: {
			"X-Api-Key": "ef72570ff371408f9668e414353b7b2e",
		},
	})
		.then((response) => {
			//returns api data in json format
			return response.json();
		})
		.then((pokemon) => {
			pokemon.card.find("base1-4");
		})
		.then((card) => {
			return card.name;
			console.log(card.name); // "Charizard"
		});
}
