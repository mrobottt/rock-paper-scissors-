
let playerScore = 0;
let computerScore = 0;

function playGame(player) { 
    let choices = ["rock", "paper", "scissors"];
    let computer = choices[Math.floor(Math.random() * 3)];
    
    let result;

    if (player === computer) {
        result = "Draw!";
    }
    else if (
        (player === "rock" && computer === "scissors") ||
        (player === "scissors" && computer === "paper") ||
        (player === "paper" && computer === "rock")
    ) {
        result = "You win";
    } else {
        result = "You lose";
    }

    return { result, computer };
}

function updateGame(playerChoice) {
    let game = playGame(playerChoice);

    let resultBox = document.getElementById("result");

    resultBox.textContent =
        `Computer chose ${game.computer} — ${game.result}`;

    document.getElementById("playerChoice").textContent =
        `You chose: ${playerChoice}`;

    // reset color
    resultBox.style.color = "white";

    // update score
    if (game.result === "You win") {
        playerScore++;
        resultBox.style.color = "green";
    } 
    else if (game.result === "You lose") {
        computerScore++;
        resultBox.style.color = "red";
    }

    // update score display
    document.getElementById("score").textContent =
        `Player: ${playerScore} | Computer: ${computerScore}`;

    // animation restart
    resultBox.classList.remove("animate-result");
    void resultBox.offsetWidth;
    resultBox.classList.add("animate-result");
}

// buttons
document.getElementById("rock").onclick = () => updateGame("rock");
document.getElementById("paper").onclick = () => updateGame("paper");
document.getElementById("scissors").onclick = () => updateGame("scissors");