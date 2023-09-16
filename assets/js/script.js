const questions = [
    { // Question 1
        question : "The majority of fish are what kind of eaters?",
        answers : [
            "Carnivorous.",
            "Omnivorous",
            "Herbivorous.",
            "Both detritivorous and planktivorous."
        ],
        correctAnswer : 1 // "Omnivorous."
    },
    { // Question 2
        question : "Are all deep-sea fish blind?",
        answers : [
            "Yes.",
            "No.",
            "Mostly.",
            "Sometimes."
        ],
        correctAnswer : 3 // "Sometimes."
    },
    { // Question 3
        question : "Fish swim in groups called...",
        answers : [
            "Fishes.",
            "Fishies.",
            "Congregations.",
            "Schools."
        ],
        correctAnswer : 3, // "Schools.",
        anotherAnswer : "Fishies." // window.alert "That ain't it chief, but I'll let it slide..."
    },
    { // Question 4
        question : "How do toxic pufferfish spread their natural toxin?",
        answers : [
            "Rapidly inflating the venomous spikes all over their body.",
            "Biting their prey.",
            "Being consumed, touched, or punctured.",
            "Swimming away and leaving it behind."
        ],
        correctAnswer : 2 // "Being consumed, touched, or punctured."
    },
    { // Question 5
        question : "What is the largest known living fish?",
        answers : [
            "The giant squid.",
            "The megalodon.",
            "The leedsichthys.",
            "The whale shark."
        ],
        correctAnswer : 3 // "The whale shark."
    },
    { // Question 6
        question : "What is a small baby fish called?",
        answers : [
            "A fry or hatchling.",
            "An egg.",
            "Photocorynus Spiniceps.",
            "Something or another."
        ],
        correctAnswer : 0 // "A fray or hatchling."
    },
    { // Question 7
        question : "Which of these is not a real type of fish?",
        answers : [
            "The direfish.",
            "The lionfish.",
            "The dragonfish.",
            "The viperfish."
        ],
        correctAnswer : 0 // "The direfish."
    },
    { // Question 8
        question : "How can you make fish scales edible.",
        answers : [
            "By scraping off the 'crud' on the outside layer.",
            "By fully cooking and totally cleaning them.",
            "By roasting them at 375° Fahrenheit.",
            "By boiling them and completely removing them from the skin."
        ],
        correctAnswer : 1 // "By fully cooking and totally cleaning them."
    },
    { // Question 9
        question : "Which one is healthier:  fried fish or fried chicken?",
        answers : [
            "Fried fish is, and by a lot.",
            "Fried chicken is, and by a lot.",
            "Fried fish is, but only slightly.",
            "Fried chicken is, but only slightly."
        ],
        correctAnswer : 2 // "Fried fish is, but only slightly."
    },
    { // Question 10
        question : "What is the dorsal fin?",
        answers : [
            "The triangular fin on the back of a shark.",
            "The fin on the right side of a goldfish.",
            "The fin on the left side of a lionfish.",
            "Both fins on either side of a whale."
        ],
        correctAnswer : 0 // "The triangular fin on the back of a shark."
    },
    { // Secret Question 11
        question : "Do you own a fish?",
        answers : [
            "Yes.",
            "No.",
            "I don't like fish. (Bad answer, don't pick this).\n*cracks knuckles*",
            "I just don't see a reason why this would be a question."
        ],
        correctAnswer : [0, 1] // ["Yes.", "No."]
    },
];
const difference = 0;
var btn = document.getElementById("startQuiz");
var currentQuestion = document.getElementById("quizQuestion");
var answeredCorrectly = 0;
var answeredIncorrectly = 0;
// var correctAnswer = document.getElementById(correctAnswer);
// var answerChoices = document.getElementById(answers);
var questionIndex = 0;

console.log(questions[3].answers[2]);

function startQuiz() {
    // console.log("hit");
    document.getElementById("startQuiz").style.display = "none";

    var quizQuestion = document.getElementById("quizQuestion");
    quizQuestion.textContent = "The majority of fish are what kind of eaters?";

    var optionContainer = document.getElementById("optionContainer");

    defineAnswers(questionIndex);

    var nextQuestion0 = document.getElementById("nextAnswer0");
    nextQuestion0.addEventListener("click", followQuestion);
    var nextQuestion1 = document.getElementById("nextAnswer1");
    nextQuestion1.addEventListener("click", followQuestion);
    var nextQuestion2 = document.getElementById("nextAnswer2");
    nextQuestion2.addEventListener("click", followQuestion);
    var nextQuestion3 = document.getElementById("nextAnswer3");
    nextQuestion3.addEventListener("click", followQuestion);
}

function defineAnswers(question) {
    for(i=0; i < questions[question].answers.length; i++) {
        let answerChoice = document.createElement("button")
        // console.log(questions[question].answers[i])
        answerChoice.innerHTML = questions[question].answers[i];
        answerChoice.setAttribute('id', 'nextAnswer' + (difference + i));
        answerChoice.classList.add('btn', difference + i);
        optionContainer.appendChild(answerChoice);
    }
}

function followQuestion() {
    if (difference === questions.correctAnswer) {
        answeredCorrectly++;
    } else {
        answeredIncorrectly++;
    };

    console.log(answeredCorrectly);
    console.log(answeredIncorrectly);
    document.getElementById("nextAnswer0").style.display = "none";
    document.getElementById("nextAnswer1").style.display = "none";
    document.getElementById("nextAnswer2").style.display = "none";
    document.getElementById("nextAnswer3").style.display = "none";

    currentQuestion = document.getElementById("quizQuestion");
    currentQuestion.textContent = "Are all deep-sea fish blind?";
    questionIndex++;

    defineAnswers(questionIndex);
}


btn.addEventListener("click", startQuiz);

//  document.getElementById("register").style.display = "block";

// TODO: Do HTML first.
// TODO: startQuiz function = clears the start button and stuff in the first page to set up the questionnaire.
// TODO: startTimer and display the first question
// TODO: event listener to determine if the button was the correct answer
// TODO: incorrect answers subtract from the timer
// TODO: correct answers clear out the answer buttons and go to the next button
// TODO: go from one value to the next and increase the index of the variable by 1
// TODO: Create a function in order to end the game, stop the timer, clear out the last buttons and last questions, and display a user input form that is saved into local storage
