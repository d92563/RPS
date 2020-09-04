
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





function computerPlay() {
    let selection = ["rock", "paper", "scissors"];
    return selection[Math.floor(Math.random() * 3)];
}


function playRound(playerSelection, computerSelection) {
    let ps = playerSelection.toLowerCase();
    let outcome = [" Paper beats Rock.", " Rock beats Scissors.", " Scissors beats paper."];
    let result = ["You win!", "You lose!"];
      if (ps === computerSelection) {
        return "It's a tie.";
      } 

      if (ps === "rock") {
          if (computerSelection === "paper") {
              return result[1] + outcome[0];
          } else {
              return result[0] + outcome[1];
          }
      }

 
      if (ps === "paper") {
          if (computerSelection === "rock") {
              return result[0] + outcome[0];
          } else {
              return result[1] + outcome[2];
          }
      }


      if (ps === "scissors") {
          if (computerSelection === "rock") {
            return result[1] + outcome[1];
          } else {
            return result[0] + outcome[2];
          }
          
      }
}

//const playerSelection = 'rock'
//const computerSelection = computerPlay()
//console.log(playRound(playerSelection, computerSelection))
game()