 
  const choices = document.querySelectorAll(".choice");
  choices.forEach(choice => choice.addEventListener("click", play));

  const scoreboard = {
    player: 0,
    computer: 0
  };

// Play game
function play(e) {
    let playerSelection = e.target.id;
    let computerSelection = computerPlay();
    let winner = playRound(playerSelection, computerSelection);
    showWinner(winner, computerSelection);
  }


function computerPlay() {
    let selection = ["rock", "paper", "scissors"];
    return selection[Math.floor(Math.random() * 3)];
}


function playRound(playerSelection, computerSelection) {
    
      if (playerSelection === computerSelection) {
        return "draw";
      } 

      if (playerSelection === "rock") {
          if (computerSelection === "paper") {
              return "computer";
          } else {
              return "player";
          }
      }

      if (playerSelection === "paper") {
          if (computerSelection === "rock") {
              return "player";
          } else {
              return "computer";
          }
      }


      if (playerSelection === "scissors") {
          if (computerSelection === "rock") {
            return "computer";
          } else {
            return "player";
          }
          
      }
}


const score = document.querySelector(".score");
let result = document.querySelector("#result");


function showWinner(winner, computerSelection) {
    if (winner === 'player') {
      scoreboard.player++;
      result.innerHTML = `
        <p class="text-win">You Win</p>
        <p>Computer Chose <strong>${computerSelection.charAt(0).toUpperCase() +
          computerSelection.slice(1)}</strong></p>
      `;
    } else if (winner === 'computer') {
      scoreboard.computer++;
      result.innerHTML = `
        <p class="text-lose">You Lose</p>
        <p>Computer Chose <strong>${computerSelection.charAt(0).toUpperCase() +
          computerSelection.slice(1)}</strong></p>
      `;
    } else {
      result.innerHTML = `
        <p class="text-draw">It's A Draw</p>
        <p>Computer Chose <strong>${computerSelection.charAt(0).toUpperCase() +
          computerSelection.slice(1)}</strong></p>
      `;
    }
    score.innerHTML = `
    <p>Player Score: ${scoreboard.player}</p>
    <p>Computer Score: ${scoreboard.computer}</p>
    `;
}
const restart = document.querySelector(".restart")
restart.addEventListener('click', restartGame);

function restartGame() {
    scoreboard.player = 0;
    scoreboard.computer = 0;
    score.innerHTML = `
      <p>Player: 0</p>
      <p>Computer: 0</p>
    `;
    result.innerHTML = null;
}