const karasunoData = [
    {
        question: "What was the score when Karasuno won against Shiratorizawa?",
        choice1: "19 to 21",
        choice2: "16 to 18",
        choice3: "20 to 22",
        answer: 1,
    },
    {
        question: "What is the name of Karasuno's oldest manager?",
        choice1: "Yachi Hitoka",
        choice2: "Michimiya Yui",
        choice3: "Shimizu Kiyoko",
        answer: 3,
    },
    {
        question: "How many players does Karasuno have?",
        choice1: "12",
        choice2: "10",
        choice3: "11",
        answer: 1,
    },
    {
        question: "Who is chosen to be Karasuno's next captain after Sawamura Daichi?",
        choice1: "Narita Kazuhio",
        choice2: "Ennoshita Chikara",
        choice3: "Tanaka Ryūnosuke",
        answer: 2,
    },
    {
        question: "What is Karasuno's nickname animal?",
        choice1: "Crows",
        choice2: "Owls",
        choice3: "Monkeys",
        answer: 1,
    },
    {
        question: "How many middle blockers does Karasuno have?",
        choice1: "5",
        choice2: "4",
        choice3: "3",
        answer: 2,
    },
    {
        question: "Who is Karasuno's coach?",
        choice1: "Ukai Keishin",
        choice2: "Takeda Ittetsu",
        choice3: "Ukai Ikkei",
        answer: 1,
    },
    {
        question: "What is the name that Karasuno's written name is offen mistaken for?",
        choice1: "Makoto",
        choice2: "Bakemono",
        choice3: "Torino",
        answer: 3,
    },
    {
        question: "What does Karasuno's banner read?",
        choice1: "Rule the court",
        choice2: "Crow",
        choice3: "Fly",
        answer: 3
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
    availableQuestions = [...karasunoData];
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