let resultParagraph = document.getElementById("resultParagraph");
let randomNumber = generateRandomNumber();

function generateRandomNumber() {
    return Math.floor(Math.random() * 10) + 1;
}

function resetGame() {
    // Clear the paragraph content
    resultParagraph.textContent = "";
}

function checkGuess() {
    let input = document.getElementById("guessInput").value;

    if (input === "quit") {
        resultParagraph.textContent = "You just quit. The correct number was " + randomNumber;
    } else {
        let guess = parseInt(input);

        if (guess === randomNumber) {
            resultParagraph.textContent = "Congratulations! You guessed the correct number: " + randomNumber;
            // Generate a new random number for the next round
            randomNumber = generateRandomNumber();
        } else {
            resultParagraph.textContent = "Wrong answer. Try again!";
        }

        // Clear the input field for the next guess
        document.getElementById("guessInput").value = "";
    }
}
