let fukurodaniData = [
    {
        question: "What does Fukurōdani's banner read?",
        choice1: "One ball, heart and soul",
        choice2: "We don't need memories",
        choice3: "Irresistible force",
        answer: 1,
    },
    {
        question: "What is Fukurōdani's official representative animal?",
        choice1: "Fox",
        choice2: "Eagle",
        choice3: "Owl",
        answer: 3,
    },
    {
        question: "Who is Fukurōdani's vice captain?",
        choice1: "Akaashi Keiji",
        choice2: "Bokuto Kōtarō",
        choice3: "Washio Tatsuki",
        answer: 1,
    },
    {
        question: "How many managers does Fukurōdani have?",
        choice1: "4",
        choice2: "3",
        choice3: "2",
        answer: 3,
    },
    {
        question: "What number jersey does the captain of Fukurōdani wear?",
        choice1: "1",
        choice2: "4",
        choice3: "7",
        answer: 2,
    },
    {
        question: "What are the colors of the Fukurōdani jersey?",
        choice1: "black, orange, yellow",
        choice2: "blue, turquoise, white",
        choice3: "black, gold, white",
        answer: 3,
    },
    {
        question: "How did Fukurōdani qualify for the Spring High Tournament?",
        choice1: "First Seed",
        choice2: "Second Representative",
        choice3: "Host Representative",
        answer: 2,
    },
    {
        question: "Who wears the #7 jersey in Fukurōdani?",
        choice1: "Konoha Akinori",
        choice2: "Komi Haruki",
        choice3: "Sarukui Yamato",
        answer: 1,
    },
    {
        question: "What was the score when Fukurōdani won against Karasuno during the last game of the training camp?",
        choice1: "25 to 23",
        choice2: "26 to 24",
        choice3: "28 to 26",
        answer: 1,
    },
    {
        question: "Who did Fukurōdani lose to during the Spring High-Tokyo Representative Playoffs?",
        choice1: "Nekoma",
        choice2: "Itachiyama",
        choice3: "Ichibayashi",
        answer: 2,
    },
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
    availableQuestions = [...fukurodaniData];
    getNewQuestion();
};

getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter >= maxQuestions) {
        footer.innerHTML= `<a href="index.html" class="home-btn"><i class="fas fa-home"></i></a>`;
        return quiz.innerHTML = `<h2 class="score_message fukuquiz">You answered ${score}/${maxQuestions} questions correctly!<br>To play again, click the Reload Quiz button.
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