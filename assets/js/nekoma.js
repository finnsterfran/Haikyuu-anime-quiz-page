const nekomaData = [
    {
        question: "Who is Nekoma's vice captain?",
        choice1: "Kai Nobuyuki",
        choice2: "Kozume Kenma",
        choice3: "Morisuke Yaku",
        answer: 1,
    },
    {
        question: "What is Nekoma's nickname animal?",
        choice1: "Tigers",
        choice2: "Owls",
        choice3: "Cats",
        answer: 3,
    },
    {
        question: "How did Nekoma qualify for the Spring High Tournament?",
        choice1: "First seed",
        choice2: "Host representative",
        choice3: "Second representative",
        answer: 2,
    },
    {
        question: "How many first-years does Nekoma have?",
        choice1: "2",
        choice2: "3",
        choice3: "4",
        answer: 3,
    },
    {
        question: "Who did Nekoma play against in the finals of the Spring High-Tokyo Representative Playoffs?",
        choice1: "Fukurōdani Academy",
        choice2: "Kiyokawa Academy",
        choice3: "Nohebi Acadmey",
        answer: 3,
    },
    {
        question: "Who is Nekoma's oldest coach?",
        choice1: "Nekomata Yasufumi",
        choice2: "Kuroo Tetsurō",
        choice3: "Naoi Manabu",
        answer: 1,
    },
    {
        question: "How many times has Nekoma won against Karasuno in any kind of match?",
        choice1: "every time",
        choice2: "never",
        choice3: "never, it was always a draw",
        answer: 1,
    },
    {
        question: "What is the first sentence of Nekoma's chant before their matches?",
        choice1: "He who climbs the ladder must begin at the bottom",
        choice2: "We're like blood in our veins",
        choice3: "Opportunities present themsevles to those who have prepared for it",
        answer: 2,
    },
    {
        question: "Who is Nekoma's ace?",
        choice1: "Yamamoto Taketora",
        choice2: "Haiba Lev",
        choice3: "Inuoka Sō",
        answer: 1,
    },
    {
        question: "What does Nekoma's banner read?",
        choice1: "Simplicity and Fortitude",
        choice2: "Show us your tenacity!",
        choice3: "Connect",
        answer: 3,
    }
];

const quiz = document.querySelector('.quiz-box');
const question = document.getElementById('question');
const choices = Array.from(document.getElementsByClassName('choice'));
const questionCounterText = document.getElementById("question-counter");
const scoreText = document.getElementById('score');
const footer = document.querySelector("footer");

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

const maxQuestions = 10;
const correctBonus = 1;

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...nekomaData];
    getNewQuestion();
};

getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter >= maxQuestions) {
        footer.innerHTML= `<a href="index.html" class="home-btn"><i class="fas fa-home"></i></a>`;
        return quiz.innerHTML = `<h2 class="score_message">You answered ${score}/${maxQuestions} questions correctly!<br>To play again, click the Reload Quiz button.
        <br>To return to homepage, click the icon at the bottom of the page</h2>
        <button class="submitBtn" onclick="location.reload()">Reload Quiz</button>`;
    }
    questionCounter++;
    questionCounterText.innerText = `${questionCounter}/${maxQuestions}`;

    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach(choice => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number];
    });
    availableQuestions.splice(questionIndex, 1);
    acceptingAnswer =true;
};

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if(!acceptingAnswers) return;

        acceptingAnswer = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset['number'];

        const classToApply = 
        selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";

        if (classToApply === "correct") {
            incrementScore(correctBonus);
        }

        selectedChoice.parentElement.classList.add(classToApply);

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply);
            getNewQuestion();
        }, 1000);
    });
});

incrementScore = num => {
    score += num;
    scoreText.innerText = score;
};

startGame();