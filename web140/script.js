let score = 0;

function checkAnswer(isCorrect) {
    let feedback = document.getElementById("feedback");

    if (isCorrect) {
        feedback.textContent = "Correct!";
        score++;
    } else {
        feedback.textContent = "Incorrect. Try again!";
    }
}

let scoreButton = document.getElementById("scoreButton");

scoreButton.addEventListener("click", function() {
    let scoreDisplay = document.getElementById("score");
    scoreDisplay.textContent = "Your Score: " + score + " out of 5";
});
