var quizForm = document.querySelector(".quiz-form");
var submitAnswerbtn = document.querySelector("#submit");
var output1 = document.querySelector("#output");

const correctAnswers = [
    "90°",
    "right angled",
    "one right angle",
    "12,16,20",
    "Equilateral triangle",
    "100°",
    "30°",
    "a + b + c",
    "no",
    "45°",
];

function calculateScore() {
    var score = 0;
    var index = 0;
    var formresult = new FormData(quizForm)
    for (var value of formresult.values()) {
        console.log(value);
        if (value === correctAnswers[index]) {
            score = score + 1
            console.log(score);

        }
        index++
    }
    // console.log(score);
    output1.innerText = "Your score is " + score

}

submitAnswerbtn.addEventListener("click", calculateScore)