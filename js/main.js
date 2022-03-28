/*-----NOTES FOR PARTNER-----
WIP means Work in Progress. Please surround code you are modfiying with the label.


-----NOTES FOR PARTNER-----*/
let cardSize = 40;



//-----WIP-----
window.onload = function(){
  setBoard(5, 3);
}

function setBoard(x, y){
  //clears board of any leftover cards
  $("#card-board").empty();
  //Adds cards to board
  for(let i=0; i<x*y; i++){
    $("#card-board").append(
      `<div class="card"></div>`
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
}
//-----WIP-----
