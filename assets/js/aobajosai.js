let aobajosaiData = [
    {
        question: "How is Aoba Jōsai ranked in the top teams of the prefecture?",
        choice1: "Top 6",
        choice2: "Top 2",
        choice3: "Top 4",
        answer: 3,
    },
    {
        question: "What was the score when Aoba Jōsai lost to Karasuno in the Spring High-Miyagi Prefecture Representative Playoffs?",
        choice1: "24 to 26",
        choice2: "26 to 28",
        choice3: "31 to 33",
        answer: 1,
    },
    {
        question: "Who officially wears the #2 jersey in Aoba Jōsai?",
        choice1: "Hanamaki Takahiro",
        choice2: "Iwaizumi Hajime",
        choice3: "Matsukawa Issei",
        answer: 3,
    },
    {
        question: "How many third-years do Aoba Jōsai have?",
        choice1: "7",
        choice2: "4",
        choice3: "5",
        answer: 1,
    },
    {
        question: "Who is Aoba Jōsai's Head Coach?",
        choice1: "Yuda Kaneo",
        choice2: "Irihata Nobuteru",
        choice3: "Mizoguchi Sadayuki",
        answer: 2,
    },
    {
        question: "What does Aoba Jōsai's banner read?",
        choice1: "Rule the court",
        choice2: "Fair and square",
        choice3: "Invincible",
        answer: 1,
    },
    {
        question: "Who is Aoba Jōsai's ace?",
        choice1: "Kyōtani Kentarō",
        choice2: "Iwaizumi Hajime",
        choice3: "Kindachi Yūtarō",
        answer: 2,
    },
    {
        question: "Why has Aoba Jōsai never gotten to nationals for a long time?",
        choice1: "They kept losing to Karasuno",
        choice2: "They never made it past the semifinals",
        choice3: "They kept losing to Shiratorizawa",
        answer: 3,
    },
    {
        question: "What is Aoba Jōsai's commonly used nickname?",
        choice1: "Miyagi",
        choice2: "Seijoh",
        choice3: "Daiichi",
        answer: 2,
    },
    {
        question: "What does Aoba Jōsai's captain Oikawa Tōru say to his teammates before each game?",
        choice1: "I believe in all of you",
        choice2: "The chance to let your talent blossom, perhaps it is today",
        choice3: "Six who are strong together, are stronger",
        answer: 1,
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
    availableQuestions = [...aobajosaiData];
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