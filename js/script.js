//player & computer choice
let playerChoice = null;
let computerChoice = null;

//define choices
let choices = $('.choices')
 console.log(choices);

//event listener for clicked button
$( ".rock" ).click(function() {
    playerChoice = "rock";
   //alert( "player chose rock!" );
  $('.rock').fadeIn('slow');
  });
  $( ".paper" ).click(function() {
      playerChoice = "paper";
   // alert( "player chose paper!" );
  });
  $( ".scissor" ).click(function() {
      playerChoice = "scissor";
   // alert( "player chose scissor!" );
  });
  
  //computer random choice
  //math.random returns num between 0-1
  //math.floor will round up number
function compChoice() {
 let randomNumber = Math.floor(Math.random() * 3)
 return choices[randomNumber];
 console.log(compChoice());
}

  //function
