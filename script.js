// Generate random number
let randomNumber = Math.floor(Math.random() * 100) + 1;

// Game settings
let attemptsLeft = 7;

function checkGuess() {
    const userGuess = Number(document.getElementById("guessInput").value);
    const message = document.getElementById("message");
    const attempts = document.getElementById("attempts");

    if (!userGuess) {
        message.textContent = "⚠️ Please enter a number!";
        return;
    }

    attemptsLeft--;

    if (userGuess === randomNumber) {
        message.textContent = "🎉 Correct! You guessed the number!";
        endGame();
    } else if (userGuess > randomNumber) {
        message.textContent = "📉 Too High!";
    } else {
        message.textContent = "📈 Too Low!";
    }

    attempts.textContent = "Attempts left: " + attemptsLeft;

    if (attemptsLeft === 0 && userGuess !== randomNumber) {
        message.textContent = "❌ Game Over! The number was " + randomNumber;
        endGame();
    }
}

function endGame() {
    document.getElementById("restartBtn").style.display = "inline-block";
    document.getElementById("guessInput").disabled = true;
}

function restartGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attemptsLeft = 7;

    document.getElementById("message").textContent = "";
    document.getElementById("attempts").textContent = "";
    document.getElementById("guessInput").value = "";
    document.getElementById("guessInput").disabled = false;
    document.getElementById("restartBtn").style.display = "none";
}
