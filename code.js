
function playGame(numRounds) {
    let humanScore = 0;
    let computerScore = 0;

    function playRound() {
        humanChoice = getHumanChoice();
        computerChoice = getComputerChoice();

        console.log("You: " + humanChoice);
        console.log("Computer: " + computerChoice);

        switch(humanChoice) {
            case "rock":
                switch(computerChoice) {
                    case "rock":
                        console.log("Tie!");
                        break;
                    case "paper":
                        console.log("You lose!")
                        computerScore++;
                        break;
                    case "scissors":
                        console.log("You win!")
                        humanScore++;
                        break;
                    default:
                        console.log("Something went wrong with the computer's choice.");
                }
                break;
            case "paper":
                switch(computerChoice) {
                    case "rock":
                        console.log("You win!")
                        humanScore++;
                        break;
                    case "paper":
                        console.log("Tie!");
                        break;
                    case "scissors":
                        console.log("You lose!")
                        computerScore++;
                        break;
                    default:
                        console.log("Something went wrong with the computer's choice.");
                }
                break;
            case "scissors":
                switch(computerChoice) {
                    case "rock":
                        console.log("You lose!")
                        computerScore++;
                        break;
                    case "paper":
                        console.log("You win!")
                        humanScore++;
                        break;
                    case "scissors":
                        console.log("Tie!");
                        break;
                    default:
                        console.log("Something went wrong with the computer's choice.");
                }
                break;
            default:
                console.log("Something went wrong with the player's choice.");
        }

        console.log("Current score: " + humanScore + " (player), " + computerScore + " (computer)")
    }

    for(let i = 0; i < numRounds; i++) {
        console.log("Round " + (i+1) + ", start!");
        playRound();
    }

    console.log("Game Over! Final Scores: " + humanScore + " (player), " + computerScore + " (computer)")
    if(humanScore > computerScore) {
        console.log("You win the game!");
    }
    else if(humanScore === computerScore) {
        console.log("It was a complete tie!");
    }
    else {
        console.log("You lost the game!");
    }

}

playGame(5);



function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    // generates 0, 1, or 2
    let i = Math.floor(Math.random() * 3);
    return choices[i];
}

function getHumanChoice() {
    const choices = ["rock", "paper", "scissors"];
    let i = -1;

    // loop until a valid input occurrs
    let validChoice = false;
    while(validChoice === false) {
        let temp = parseInt(prompt("Please enter [1] for rock, [2] for paper, or [3] for scissors."));

        // valid choice made
        if(temp === 1 || temp === 2 | temp === 3) {
            // convert inputed choice to choices[] index
            i = temp - 1;
            // exit loop
            validChoice = true;
        }
        // invalid choice made
        else {
            console.log("Invalid input, please try again.");
        }
    }

    return choices[i];
}