

//-----WIP-----
window.onload = function(){
  setBoard(4,3, 2);
  // printCards(game.cards);
}

function printCards(array){
  $("main").empty()
  $("main").append(`<div id="game-board"></div>`)
  $("main").append(`<div id="scoreboard">scores</div>`)
  $("#game-board").attr('class', 'container');
  $("#game-board").empty();

  let boxCurrent = 0;
  for(let i=0; i<game.dimensions[1]; i++){
    $("#game-board").append(`<div class="row green" id="editing"></div>`);
    for(let j=0; j<game.dimensions[0]; j++){
      $("#editing").append(`<div class="red card-box" id="box${boxCurrent}"></div>`);
      boxCurrent++;
    }
    $("#editing").removeAttr('id');
  }

  //Prints cards
  for(let i=0; i<array.length; i++){
    $(`#box${i}`).append(
      `<div class="card card-active" id="crd${i}">
        <div class="inner-card" data-name="${array[i].name}" id="inr${i}">
          <h2 id="tit${i}">${array[i].name}</h2>
        </div>
      </div>`
    );
    if(array[i].url === undefined){
      $(`#inr${i}`).append(
        `<img src="images/blank-sq.jpg" alt="${array[i].name}" id="img${i}">`
      );
    }else{
      $(`#inr${i}`).append(
        `<img src="${array[i].url}" alt="${array[i].name}" id="img${i}">`
      )
    }
    if(array[i].visible === false){
      $(`#inr${i}`).addClass("hidden");
    }
    if(array[i].active === true){
      $(`#crd${i}`).addClass("card-active");
    }else{
      $(`#crd${i}`).removeClass("card-active");
      $(`#inr${i}`).addClass("hidden");

    }
  }

  let cardSize = 40;
  let x = game.dimensions[0];
  let y = game.dimensions[1];
  //Makes card sizes all exact dimensions
  $(".card").css("width", `${2.5*cardSize}px`);
  $(".card").css("height", `${3.5*cardSize}px`);
  $(".card").css("border-radius", `${cardSize*0.2}px`);
  //Makes height of board based on how many cards wide and high
  // Card ratio * Card Size + Card Margin multiplied by how many cards plus BOARD padding
  $("#game-board").css("width", `${(2.5*cardSize+20)*x+50}px`);
  $("#game-board").css("height", `${(3.5*cardSize+20)*y+50}px`);

  $(".card-active").click(function(e){

    let myID = $(e.target).attr("id").charAt(3)+$(e.target).attr("id").charAt(4);
    seeIfMatch(myID);
    purr(`does ${game.fMatch[1]} not equal ${game.sMatch[1]}`, "o")
    if(game.fMatch[1] !== game.sMatch[1] && game.fMatch[1] !== undefined){
      flipCard(myID);
    }
  });

}
//-----WIP-----
