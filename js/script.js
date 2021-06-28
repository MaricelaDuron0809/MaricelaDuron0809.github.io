


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
const winner = function(playerChoice, computerChoice) {
  if(playerChoice === computerChoice) {
    alert('ITS A TIE!');
  }
}
if(playerChoice === "rock") {
  if(computerChoice === "scissors"){
    alert('YOU WIN!');
  } else {
    alert("SATURN WINS");
  }
}
if(playerChoice === "paper") {
  if(computerChoice === "rock"){
    alert('YOU WIN!');
  } else {
    alert('SATURN WINS!');
  }
}
if(playerChoice === "scissor") {
  if(computerChoice === "paper"){
    alert('YOU WIN');
  } else{
    alert('SATURN WINS!')
  }
}
console.log("player:" + playerChoice);
console.log("Saturn:" + computerChoice);

}
