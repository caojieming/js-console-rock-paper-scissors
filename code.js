let humanScore = 0;
let computerScore = 0;

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const score = document.querySelector("#score");
const comments = document.querySelector("#comments");
const selections = document.querySelector("#selections");
const body = document.querySelector("body");

rock.addEventListener("click", playRock);
paper.addEventListener("click", playPaper);
scissors.addEventListener("click", playScissors);
function playRock() { playRound("rock"); }
function playPaper() { playRound("paper"); }
function playScissors() { playRound("scissors"); }


function playRound(selected) {
    // don't run if one side has won 5 times
    if(humanScore === 5 || computerScore === 5) {
        return;
    }

    humanChoice = selected;
    computerChoice = getComputerChoice();

    selections.textContent = "You: " + humanChoice + ", Computer: " + computerChoice;

    switch(humanChoice) {
        case "rock":
            switch(computerChoice) {
                case "rock":
                    comments.textContent = "Tie!";
                    break;
                case "paper":
                    comments.textContent = "You lose!";
                    computerScore++;
                    break;
                case "scissors":
                    comments.textContent = "You win!";
                    humanScore++;
                    break;
                default:
                    comments.textContent = "Something went wrong with the computer's choice."
            }
            break;
        case "paper":
            switch(computerChoice) {
                case "rock":
                    comments.textContent = "You win!";
                    humanScore++;
                    break;
                case "paper":
                    comments.textContent = "Tie!";
                    break;
                case "scissors":
                    comments.textContent = "You lose!";
                    computerScore++;
                    break;
                default:
                    comments.textContent = "Something went wrong with the computer's choice.";
            }
            break;
        case "scissors":
            switch(computerChoice) {
                case "rock":
                    comments.textContent = "You lose!";
                    computerScore++;
                    break;
                case "paper":
                    comments.textContent = "You win!";
                    humanScore++;
                    break;
                case "scissors":
                    comments.textContent = "Tie!";
                    break;
                default:
                    comments.textContent = "Something went wrong with the computer's choice.";
            }
            break;
        default:
            comments.textContent = "Something went wrong with the computer's choice.";
    }

    score.textContent = "Current score: " + humanScore + " (player), " + computerScore + " (computer)";

    if(humanScore === 5 || computerScore === 5) {
        const gameOverMsg = document.createElement("div");
        gameOverMsg.textContent = (humanScore === 5 ? "You win the game!" : "You lost the game!");
        body.appendChild(gameOverMsg);
    }
}

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