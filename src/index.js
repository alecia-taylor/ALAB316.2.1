// Generate a random number between 1 and 100
let randomNumber = Math.floor(Math.random() * 100) + 1;
let attemptsLeft = 5;

// Select DOM elements
const guessInput = document.getElementById("userGuess");
const guessBtn = document.getElementById("guessBtn");
const restartBtn = document.getElementById("restartBtn");
const messageEl = document.getElementById("message");
const attemptsEl = document.getElementById("attempts");

// Function to check the guess
function checkGuess() {
  let userGuess = parseInt(guessInput.value);

  if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
    messageEl.textContent = "Please enter a number between 1 and 100!";
    messageEl.style.color = "red";
    return;
  }

  attemptsLeft--;
  attemptsEl.textContent = attemptsLeft;

  if (userGuess === randomNumber) {
    messageEl.textContent = "Congratulations! You guessed the right number!";
    messageEl.style.color = "green";
    endGame();
  } else if (userGuess > randomNumber) {
    messageEl.textContent = "Too high! Try a smaller number.";
    messageEl.style.color = "blue";
  } else {
    messageEl.textContent = "Too low! Try a bigger number.";
    messageEl.style.color = "blue";
  }

  if (attemptsLeft === 0) {
    messageEl.textContent = `Game Over! The correct number was ${randomNumber}.`;
    messageEl.style.color = "black";
    endGame();
  }

  guessInput.value = "";
}

// Function to end the game
function endGame() {
  guessBtn.disabled = true;
  guessInput.disabled = true;
  restartBtn.style.display = "inline-block";
}

// Function to restart the game
function restartGame() {
  randomNumber = Math.floor(Math.random() * 100) + 1;
  attemptsLeft = 5;
  attemptsEl.textContent = attemptsLeft;
  messageEl.textContent = "";
  guessInput.value = "";
  guessBtn.disabled = false;
  guessInput.disabled = false;
  restartBtn.style.display = "none";
}

// Event Listeners
guessBtn.addEventListener("click", checkGuess);
restartBtn.addEventListener("click", restartGame);
