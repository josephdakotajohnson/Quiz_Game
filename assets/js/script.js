const questions = [
    { // Question 1
        question : "The majority of fish are what kind of eaters?",
        answers : [
            "Carnivorous.",
            "Omnivorous",
            "Herbivorous.",
            "Both detritivorous and planktivorous."
        ],
        correctAnswer : "Omnivorous."
    },
    { // Question 2
        question : "Are all deep-sea fish blind?",
        answers : [
            "Yes.",
            "No.",
            "Mostly.",
            "Sometimes."
        ],
        correctAnswer : "Sometimes."
    },
    { // Question 3
        question : "Fish swim in groups called...",
        answers : [
            "Fishes.",
            "Fishies.",
            "Congregations.",
            "Schools."
        ],
        correctAnswer : "Schools.",
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
        correctAnswer : "Being consumed, touched, or punctured."
    },
    { // Question 5
        question : "What is the largest known living fish?",
        answers : [
            "The giant squid.",
            "The megalodon.",
            "The leedsichthys.",
            "The whale shark."
        ],
        correctAnswer : "The whale shark."
    },
    { // Question 6
        question : "What is a small baby fish called?",
        answers : [
            "A fry or hatchling.",
            "An egg.",
            "Photocorynus Spiniceps.",
            "Something or another."
        ],
        correctAnswer : "A fray or hatchling."
    },
    { // Question 7
        question : "Which of these is not a real type of fish?",
        answers : [
            "The direfish.",
            "The lionfish.",
            "The dragonfish.",
            "The viperfish."
        ],
        correctAnswer : "The direfish."
    },
    { // Question 8
        question : "How can you make fish scales edible.",
        answers : [
            "By scraping off the 'crud' on the outside layer.",
            "By fully cooking and totally cleaning them.",
            "By roasting them at 375° Fahrenheit.",
            "By boiling them and completely removing them from the skin."
        ],
        correctAnswer : "By fully cooking and totally cleaning them."
    },
    { // Question 9
        question : "Which one is healthier:  fried fish or fried chicken?",
        answers : [
            "Fried fish is, and by a lot.",
            "Fried chicken is, and by a lot.",
            "Fried fish is, but only slightly.",
            "Fried chicken is, but only slightly."
        ],
        correctAnswer : "Fried fish is, but only slightly."
    },
    { // Question 10
        question : "What is the dorsal fin?",
        answers : [
            "The triangular fin on the back of a shark.",
            "The fin on the right side of a goldfish.",
            "The fin on the left side of a lionfish.",
            "Both fins on either side of a whale."
        ],
        correctAnswer : "The triangular fin on the back of a shark."
    },
    { // Secret Question 11
        question : "Do you own a fish?",
        answers : [
            "Yes.",
            "No.",
            "I don't like fish. (Bad answer, don't pick this).\n*cracks knuckles*",
            "I just don't see a reason why this would be a question."
        ],
        correctAnswer : [
            "Yes.",
            "No."]
    },
];
var questionIndex = 

console.log(questions[3].answers[2]);

function startQuiz() {
    console.log("hit");
    document.getElementById("startQuiz").style.display = "none";

    var quizQuestion = document.getElementById("quizQuestion");
    quizQuestion.textContent = "The majority of fish are what kind of eaters?";

    var optionContainer = document.getElementById("optionContainer");

    defineAnswers(0);
}

function defineAnswers(question) {
    for(i=0; i < questions[question].answers.length; i++) {
        let answerChoice = document.createElement("button")
        // console.log(questions[question].answers[i])
        answerChoice.innerHTML = questions[question].answers[i];
        answerChoice.classList.add('btn');
        optionContainer.appendChild(answerChoice);
    }
}

var btn = document.getElementById("startQuiz");

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
