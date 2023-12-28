let resultParagraph = document.getElementById("resultParagraph");
let randomNumber = generateRandomNumber();

function generateRandomNumber() {
    return Math.floor(Math.random() * 10) + 1;
}

function resetGame() {
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
            randomNumber = generateRandomNumber();
        } else {
            resultParagraph.textContent = "Wrong answer. Try again!";
        }
        document.getElementById("guessInput").value = "";
    }
}
