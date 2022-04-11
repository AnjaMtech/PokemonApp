//ANCHOR this Branch is for making the name/url object array && randomizer function
const apiCards = "https://api.pokemontcg.io/v2/cards?page=1&pageSize=32";
const apiSets = "https://api.pokemontcg.io/v2/sets";
const apiKey = "ef72570ff371408f9668e414353b7b2e";
let cardSets = [];
const pokeCards = []; //this is the array that has each pokemon

//ANCHOR creates pokemon object
function Pokemon(image, name) {
	this.pokemonImage = image;
	this.pokemonName = name;
}

//ANCHOR this function grabs the cards
function getCards() {
	return fetch(apiCards, {
		method: "GET",
		headers: {
			"X-Api-Key": apiKey,
		},
	})
		.then((response) => {
			return response.json();
		})
		.then((pokemon) => {
			let cards = pokemon;
			cards.data.forEach((data) => {
				let newPokemon = new Pokemon(data.images.large, data.name); // if you need a smaller image just change "large" to "small"
				pokeCards.push(newPokemon);
			});
			console.log(pokeCards);
		});
}

//ANCHOR this function grabs the sets ignore anything below this line, this is for page 3
function getSets() {
	return fetch(apiSets, {
		method: "GET",
		headers: {
			"X-Api-Key": apiKey,
		},
	})
		.then((res) => {
			return res.json();
		})
		.then((setInfo) => {
			cardSets = setInfo;
			console.log(setInfo);
		})
		.then(() => {
			selectSet();
		});
}

function selectSet() {
	let testSelectHtml = "";
	cardSets.data.forEach((data) => {
		console.log(data);
		testSelectHtml += `<option value="${data.id}">${data.name}</option>`;
	});

	document.getElementById("selectSet").innerHTML = testSelectHtml;
}

/* ------------------ ANCHOR this is just a render function ----------------- */
function render() {
	//getSets();
	getCards();
}

render();
