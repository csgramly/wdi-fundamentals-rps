////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    return move || getInput();
}

function getComputerMove(move) {
    return move || randomPlay();
}

function getWinner(playerMove,computerMove) {
    var winner;
    if (playerMove === computerMove) {
    	winner = "tie";
    } else if (playerMove === "scissors" && computerMove === "paper") {
    	winner = "player";
    } else if (playerMove === "rock" && computerMove === "scissors") {
    	winner = "player";
    } else if (playerMove === "paper" && computerMove === "rock") {
    	winner = "player";
    } else {
    	winner = "computer";
    }
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    while (playerWins < 5 && computerWins < 5) {
    	var playerMove = getPlayerMove();
    	var computerMove = getComputerMove();
    	var winner = getWinner(playerMove, computerMove);
    }
}
	if (winner === "tie"); {
		console.log("You have tied");
	}
	else if (winner === "player"); {
		playerWins += 1;
	}
	else (winner === "computer"); {
		computerWins += 1;
	}
	console.log ("Current player score is" + playerWins + "Current computer score is" + computerWins + ".");
	if (playerWins === 5) {
		console.log("You are the first to 5 wins");
	}
	else {
		console.log("Computer is first to 5 wins");
	}
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
    return [playerWins, computerWins];
}


