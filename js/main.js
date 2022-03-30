/*-----NOTES FOR PARTNER-----



-----NOTES FOR PARTNER-----*/
let cardSize = 40;
let screenMode = "start menu";

//-----TEMP-----

const pokemonTemp = [
  {
    name: "Pikachu",
    url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png"
  },
  {
    name: "Machamp",
    url: "https://static.wikia.nocookie.net/pokemon/images/6/60/Team_Rocket_Machamp.png/revision/latest?cb=20200112112729"
  },
  {
    name: "Electrike",
    url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/309.png"
  },
  {
    name: "Ditto",
    url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/132.png"
  },
  {
    name: "Dugtrio",
    url: "https://static.wikia.nocookie.net/pokemon/images/c/c7/Katie_Dugtrio.png/revision/latest?cb=20150819064319"
  },
  {
    name: "Torchic",
    url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/255.png"
  },
  {
    name: "Rattata",
    url: "https://spng.pngfind.com/pngs/s/686-6866018_pokemon-rattata-png-transparent-png.png"
  },
  {
    name: "Squirtle",
    url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png"
  }
];
//-----TEMP-----


//-----WIP-----
window.onload = function(){
  //temp
  setBoard(4,3);
  //temp
  $("main").append(`<button type="button" name="button" onclick="setBoard(4,3)">Start Game</button>`);
  $("main").append(``);
}

function setBoard(x, y){
  $("main").attr('id', 'card-board');
  screenMode = "play";
  let myCards =[];
  for(let i=0; i<x*y/2; i++){
    let currPokemon = Math.floor(Math.random()*pokemonTemp.length);
    for(let j=0; j<2; j++){
      myCards.splice(Math.floor(Math.random()*myCards.length), 0, currPokemon);
    }
  }

  //clears board of any leftover cards
  $("#card-board").empty();
  //Adds cards to board
  for(let i=0; i<x*y; i++){
    $("#card-board").append(
      `<div class="card" id="crd${i}">
        <div class="inner-card hidden" id="inr${i}">
          <h2 id="tit${i}">${pokemonTemp[myCards[i]].name}</h2>
          <img src="${pokemonTemp[myCards[i]].url}" alt="${pokemonTemp[myCards[i]].name}" id="img${i}">
        </div>
      </div>`
    );
  }
  //Makes card sizes all exact dimensions
  $(".card").css("width", `${2.5*cardSize}px`);
  $(".card").css("height", `${3.5*cardSize}px`);
  $(".card").css("border-radius", `${cardSize*0.2}px`);
  //Makes height of board based on how many cards wide and high
  // Card ratio * Card Size + Card Margin multiplied by how many cards plus BOARD padding
  $("main").css("width", `${(2.5*cardSize+20)*x+50}px`);
  $("main").css("height", `${(3.5*cardSize+20)*y+50}px`);

  $(".card").click(function(e){
    let myID = $(e.target).attr("id").charAt(3)+$(e.target).attr("id").charAt(4);
    flipCard(myID);



  });
}


function flipCard(index){
  $(`#inr${index}`).toggleClass("hidden");
}

//-----WIP-----
