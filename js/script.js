//dsplay player and Saturn(computer) choice
const saturnChoiceDisplay = document.getElementById("computer-choice");
const playerChoiceDisplay = document.getElementById("player-choice");
const resultDisplay = document.getElementById("result");
let result
//console.log(saturnChoiceDisplay);
//console.log(playerChoiceDisplay);
//console.log(result);

//round count
let round = 0;
const roundNumber = document.getElementById("rounds");
//console.log(roundNumber);



//event listener for clicked button
$( ".rock" ).click(function() {
    playerChoice = "Rock";
//if player clicks rock give an argument of "rock".
   game("rock")
  });
  $( ".paper" ).click(function() {
      playerChoice = "Paper";
    //if player clicks rock give an argument of "paper".
    game("paper")
  });
  $( ".scissors" ).click(function() {
      playerChoice = "Scissors";
    //if player clicks rock give an argument of "scissors".
    game("scissors")
  });

//define computer random choice
 //math.random returns num between 0-1
 //math.floor will round up number
function saturnChoice() {
  const choices = ["rock", "paper", "scissors"];
  let randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
//console.log(saturnChoice());
 
  }
  
  //define game function
  function game(playerChoice) {
   //console.log(playerChoice);
  let computerChoice = saturnChoice();
 // console.log("player--" + playerChoice);
  //console.log("Saturn--" + computerChoice);
  
//nested if and else statements for winning, losing and tie
const score = function(playerChoice, computerChoice) {
 
  //rock scores
  if(playerChoice === "rock") {
    if(computerChoice === "scissors"){
      result = 'you win!';
    }else if(playerChoice === "rock"){
      if(computerChoice === "paper"){
        result = 'you lose!';
      }else if(playerChoice === computerChoice){
        result = 'TIE!';
      }
    }
  }

//paper scores
if(playerChoice === "paper") {
  if(computerChoice === "rock"){
    result = 'you win!';
  }else if(playerChoice === "paper"){
    if(computerChoice === "scissors"){
      result = 'you lose!';
    }else if(playerChoice === computerChoice){
      result = 'TIE!';
    }
  }
}
//scissors scores
if(playerChoice === "scissors") {
  if(computerChoice === "paper"){
    result = 'you win!';
  }else if(playerChoice === "scissors"){
    if(computerChoice === "rock"){
      result = 'you lose!';
    }else if(playerChoice === computerChoice){
      result = 'TIE!';
    }
  }
}
}
console.log("Player " + playerChoice);
console.log("Saturn " + computerChoice)
//start score function
score(playerChoice, computerChoice)

//display player and saturns choice & results 
playerChoiceDisplay.innerHTML = playerChoice
saturnChoiceDisplay.innerHTML = computerChoice
resultDisplay.innerHTML = result
//round count 
round++;
roundNumber.innerHTML = round
  


  }