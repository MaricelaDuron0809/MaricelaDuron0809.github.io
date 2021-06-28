let r = $(".rock");
let p = $(".paper");
let s = $(".scissor");
//console.log(r);
//console.log(p);
//console.log(s);


//event listener for clicked button
$( ".rock" ).click(function() {
    playerChoice = "rock";
   //if player clicks rock give an argument of "rock".
   game("rock")
  });
  $( ".paper" ).click(function() {
      playerChoice = "paper";
    //if player clicks rock give an argument of "paper".
    game("paper")
  });
  $( ".scissor" ).click(function() {
      playerChoice = "scissor";
    //if player clicks rock give an argument of "scissor".
    game("scissor")
  });
  
  //computer random choice
 //math.random returns num between 0-1
 //math.floor will round up number
function compChoices() {
  const choices = ["rock", "paper", "scissor"];
  let randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
  //console.log(compChoices());
  }
  
  //define game function
  function game(playerChoice) {
   //console.log(playerChoice);
  let computerChoice = compChoices();
  console.log("player--" + playerChoice);
  console.log("computer--" + computerChoice);

//if and else statements for winning, losing and tie
const winner = function(playerChoice, computerChoice) {
  if (playerChoice === "r"  ||  compChoice === "s"){
  console.log(r);
  }
}








}
  
