


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
 // console.log("player--" + playerChoice);
  //console.log("Saturn--" + computerChoice);

//nested if and else statements for winning, losing and tie
const score = function(playerChoice, computerChoice) {
  //rock scores
  if(playerChoice === "rock") {
    if(computerChoice === "scissor"){
      alert('YOU WIN');
    }else if(playerChoice === "rock"){
      if(computerChoice === "paper"){
        alert('SATURN WINS');
      }else if(playerChoice === computerChoice){
        alert('TIE');
      }
    }
  }

//paper scores
if(playerChoice === "paper") {
  if(computerChoice === "rock"){
    alert('YOU WIN');
  }else if(playerChoice === "paper"){
    if(computerChoice === "scissor"){
      alert('SATURN WINS');
    }else if(playerChoice === computerChoice){
      alert('TIE');
    }
  }
}

//scissors scores
if(playerChoice === "scissor") {
  if(computerChoice === "paper"){
    alert('YOU WIN');
  }else if(playerChoice === "scissor"){
    if(computerChoice === "rock"){
      alert('SATURN WINS');
    }else if(playerChoice === computerChoice){
      alert('TIE');
    }
  }
}


}
console.log("Player " + playerChoice);
console.log("Saturn " + computerChoice);
score(playerChoice, computerChoice)

  }
