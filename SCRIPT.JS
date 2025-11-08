const quizData = [
    {
        question: "Which language is used for web page styling?",
        options: ["HTML", "CSS", "Python", "C"],
        answer: "CSS"
    },
    {
        question: "Which HTML tag is used to display a picture?",
        options: ["photo", "img", "pic", "image"],
        answer: "img"
    },
    {
        question: "JavaScript is used for?",
        options: ["Styling", "Structure", "Functionality", "Database"],
        answer: "Functionality"
    }
];

let index = 0;
let score = 0;
let selectedAnswer = "";

function loadQuestion(){
    document.getElementById("question").innerHTML = quizData[index].question;

    let optionsHtml = "";
    quizData[index].options.forEach(option => {
        optionsHtml += `<div class="option" onclick="selectOption(this)">${option}</div>`;
    });

    document.getElementById("options").innerHTML = optionsHtml;
}

function selectOption(option){
    selectedAnswer = option.innerText;

    let allOptions = document.querySelectorAll(".option");
    allOptions.forEach(opt => opt.style.background = "#ececec");

    option.style.background = "#90EE90";
}

function nextQuestion(){
    if(selectedAnswer === quizData[index].answer){
        score++;
    }

    index++;
    selectedAnswer = "";

    if(index < quizData.length){
        loadQuestion();
    } 
    else {
        document.getElementById("question").style.display = "none";
        document.getElementById("options").style.display = "none";
        document.querySelector(".btn").style.display = "none";
        document.getElementById("result").innerHTML =
        `Quiz Completed! Your Score: ${score} / ${quizData.length}`;
    }
}

loadQuestion();
