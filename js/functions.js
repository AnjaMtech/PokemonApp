let screenMode;
let game = {
  players: 2,
  player: 1,
  dimensions: [],
  fMatch: [""],
  sMatch: [""],
  scores: [],
  cards:[
    {
      name: "pikachu",
      index: 0,
      url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png",
      active: true
    },
    {
      name: "pikachu",
      index: 0,
      url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png",
      active: true
    }
  ]
}

function startMenu(){
  $("main").empty();
  $("main").append(`<button type="button" name="button" onclick="setBoard(4,3)">Start Game</button>`);
  screenMode = "start menu";
}
function setBoard(x,y,players){
  score = 0;
  game.dimensions = [x,y];
  game.players = players;
  pokemonList = pokemonTemp;
  $("main").attr('id', 'game-board');
  screenMode = "play";

  for(let i=0; i<players; i++){
    game.scores[i] = 0;
  }

  let myCards =[[]];
  for(let i=0; i<x*y/2; i++){
    let currPokemon = Math.floor(Math.random()*pokemonList.length);
    for(let j=0; j<2; j++){
      myCards.splice(Math.floor(Math.random()*myCards.length), 0, {name: pokemonList[currPokemon].name, index: currPokemon, url: pokemonList[currPokemon].url, active: true});
    }
  }
  game.cards = myCards;
  printCards(game.cards);

  setTimeout(flipAll, 3000);
}




function flipCardOld(index, type){
  $(`#inr${index}`).toggleClass("hidden");
  if(type === "all"){
    return;
  }
  if(game.fMatch[0] !== "" && game.sMatch[0] !== ""){
    $(`#inr${game.fMatch[1]}`).toggleClass("hidden");
    $(`#inr${game.sMatch[1]}`).toggleClass("hidden");
    game.fMatch = [""];
    game.sMatch = [""];
    return;
  }
  if(game.fMatch[0] == ""){
    game.fMatch[0] = $(`#inr${index}`).attr("data-name");
    game.fMatch[1] = index;
    purr(`pokemon ${$(`#inr${index}`).attr("data-name")}`);
  }else if(game.sMatch[0] == ""){
    game.sMatch[0] = $(`#inr${index}`).attr("data-name");
    game.sMatch[1] = index;
    if(game.fMatch[0] == game.sMatch[0]){
      purr(`score goes up`);
      game.scores[game.player-1]++;
      setTimeout(flipCardOld, 1000);
    }else{
      purr(`no match, flipping card ${game.fMatch[1]} and ${game.sMatch[1]}`)
      setTimeout(flipCardOld, 1000);
    }
    nextPlayer();
  }
}
function flipCard(index){
  // purr(game.cards[index].name, "o");
  // game.cards[index].active = false;
  update();
}
function nextPlayer(){
  if(game.player != game.players){
    game.player++
  }else{
    game.player = 1;
  }
}
function removeCard(index){
  game.cards[index].active = false;
  update();
}

function flipAll(){
  for(let  i=0; i<game.dimensions[0] * game.dimensions[1]; i++){
    flipCardOld(i, "all");
  }
  game.fMatch = [""];
  game.sMatch = [""];
}
function update(){
  printCards(game.cards);
}
