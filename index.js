/*
function game() {
    let win = 0;
    let lose = 0;
    
    for (let i = 1; i <= 5; i++) {
        
        let playerSelection = prompt("Enter your selection: rock, paper or scissors?");
        let computerSelection = computerPlay();
        let round = playRound(playerSelection, computerSelection);
        if (round.includes("win")) {
            win += 1;
        } else if (round.includes("lose")) {
            lose += 1;
        }
        console.log(round);
    }     
   if (win === lose) {
       return console.log("Game: Tie!");
   } else if (win > lose) {
       return console.log ("Game: You won!");
   } else {
       return console.log("Game: You lost!");
     }
  }

  */


  
  const choices = document.querySelectorAll('.choice');
  


//let playerSelection = prompt("Enter your selection: rock, paper or scissors?");


function computerPlay() {
    let selection = ["rock", "paper", "scissors"];
    return selection[Math.floor(Math.random() * 3)];
}


function playRound(e) {
    let playerSelection = e.target.id;
    console.log('Player selection: ' + playerSelection);
    let computerSelection = computerPlay();
    console.log('Computer selection: ' + computerSelection);
    let outcome = [" Paper beats Rock.", " Rock beats Scissors.", " Scissors beats paper."];
    let result = ["You win!", "You lose!"];
      if (playerSelection === computerSelection) {
        
        return console.log("It's a tie.");
      } 

      if (playerSelection === "rock") {
          if (computerSelection === "paper") {
              return console.log(result[1] + outcome[0]);
          } else {
              return console.log(result[0] + outcome[1]);
          }
      }

 
      if (playerSelection === "paper") {
          if (computerSelection === "rock") {
              return console.log(result[0] + outcome[0]);
          } else {
              return console.log(result[1] + outcome[2]);
          }
      }


      if (playerSelection === "scissors") {
          if (computerSelection === "rock") {
            return console.log(result[1] + outcome[1]);
          } else {
            return console.log(result[0] + outcome[2]);
          }
          
      }
}

choices.forEach(choice => choice.addEventListener('click', playRound));
