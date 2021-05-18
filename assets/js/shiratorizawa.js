let shiratorizawaData = [
    {
        question: "What is Shiratorizawa's unofficial representative animal?",
        choice1: "eagle",
        choice2: "swan",
        choice3: "owl",
        answer: 1,
    },
    {
        question: "Which number jersey does the player known as the 'Guess Monster' wear?",
        choice1: "2",
        choice2: "5",
        choice3: "7",
        answer: 2,
    },
    {
        question: "What is the name of Shiratorizawa's oldest coach?",
        choice1: "Saito Akira",
        choice2: "Washijō Tanji",
        choice3: "Shirabu Kenjirō",
        answer: 2,
    },
    {
        question: "What position does Shiratorizawa's #3 play?",
        choice1: "setter/pinch server",
        choice2: "wing spiker/outside hitter",
        choice3: "middle blocker/pinch server",
        answer: 1,
    },
    {
        question: "Who plays setter in Shiratorizawa's starting lineup?",
        choice1: "Semi Eita",
        choice2: "Kawanishi Taichi",
        choice3: "Shirabu Kenjirō",
        answer: 3,
    },
    {
        question: "What are the colors of the Shiratorizawa jersey?",
        choice1: "white and pink",
        choice2: "black and pink",
        choice3: "white and purple",
        answer: 3,
    },
    {
        question: "What does Shiratorizawa's banner read?",
        choice1: "Irresistible Force",
        choice2: "Invincible",
        choice3: "Rule the Court",
        answer: 1,
    },
    {
        question: "Who is Shiratorizawa's vice captain?",
        choice1: "Ōhira Reon",
        choice2: "Soekawa Jin",
        choice3: "Goshiki Tsutomu",
        answer: 2,
    },
    {
        question: "How is Shiratorizawa ranked among all the teams in Japan?",
        choice1: "Top 8",
        choice2: "Top 5",
        choice3: "Top 3",
        answer: 1,
    },
    {
        question: "What is Shiratorizawa's main strategy?",
        choice1: "a strong defense",
        choice2: "serve and block",
        choice3: "support the ace",
        answer: 3,
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
    availableQuestions = [...shiratorizawaData];
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