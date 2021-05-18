let datekogyoData = [
    {
        question: "What was the score when Datekōgyō lost to Karasuno?",
        choice1:"24 to 26",
        choice2: "23 to 25",
        choice3: "22 to 25",
        answer: 3,
    },
    {
        question: "Who did Datekōgyō lose to in the Spring High-Miyagi Prefecture Representative Playoffs?",
        choice1:"Aoba Jōsai",
        choice2: "Karasuno",
        choice3: "Shiratorizawa",
        answer: 1,
    },
    {
        question: "What was the name of Datekōgyō's third year captain?",
        choice1:"Onagawa Tarō",
        choice2: "Futakuchi Kenji",
        choice3: "Moniwa Kamasaki",
        answer: 3,
    },
    {
        question: "What is Datekōgyō's team famous for?",
        choice1:"Jump serves",
        choice2: "Read blocking",
        choice3: "Synchronized attacks",
        answer: 2,
    },
    {
        question: "Who is Datekōgyō's new setter?",
        choice1:"Aone Takanobu",
        choice2: "Koganegawa Kanji",
        choice3: "Futakuchi Kenji",
        answer: 2,
    },
    {
        question: "What does Datekōgyō's banner read?",
        choice1:"Steel Wall of Date",
        choice2: "Metal Wall of Date",
        choice3: "Iron Wall of Date",
        answer: 3,
    },
    {
        question: "What are the colors of Datekōgyō's jersey?",
        choice1:"white with teal",
        choice2: "black and cyan",
        choice3: "white with turquoise",
        answer: 1,
    },
    {
        question: "How many known Datekōgyō third-years retired before the Spring High Tournament?",
        choice1:"2",
        choice2: "3",
        choice3: "4",
        answer: 2,
    },
    {
        question: "Who wears the #13 jersey in Datekōgyō?",
        choice1:"Sakunami Kōsuke",
        choice2: "Sasaya Takehito",
        choice3: "Koganegawa Kanji",
        answer: 1,
    },
    {
        question: "How do the middle blockers of Datekōgyō make using the 'bunch-shift' easier for themselves?",
        choice1:"dedicate blocking",
        choice2: "guess blocking",
        choice3: "read blocking",
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
    availableQuestions = [...datekogyoData];
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