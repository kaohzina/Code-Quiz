const timerEl = document.getElementById("timer");
const answerEl = document.getElementById("answers");
const quizEl = document.getElementById("quiz");
const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const answer1 = document.getElementById("answers1");
const answer2 = document.getElementById("answers2");
const answer3 = document.getElementById("answers3");
const answer4 = document.getElementById("answers4");

//Access the <body> element in html

var body = document.body;
var count = 101;
var counter;

const timer = function () {
  counter = setInterval(function () {
    count = count - 1;
    if (count <= 0) {
      clearInterval(counter);
    }
    timerEl.innerHTML = "Time: " + count;
  }, 1000);
};

const questions = [
  {
    question: "The code used to program this project is?",
    answers: ["Javascript", "C", "Python", "Java"],
    correctAnswer: "Javascript",
  },
  {
    question: "What is the tool used to see the code in your browser?",
    answers: ["Search", "DevTools", "Find", "Locate"],
    correctAnswer: "DevTools",
  },
  {
    question: "What method would you use to create a list?",
    answers: ["Stack", "List", "Order list", "Arrays"],
    correctAnswer: "Arrays",
  },
  {
    question: "What color is the sky",
    answers: ["red", "yellow", "green", "blue"],
    correctAnswer: "blue",
  },
];

//Starting the game with a score of 0.
var score = 0;

//Loop through every question until finished with the quiz.
// for (var i = 0; i < questions.length; i++){

//   //Display current question to user.
//   var displayQuestion = (questions[i].question);
//   var displayAnswer = (questions[i].answers);

const displayQuestion =function() {
  for (var i = 0; i < questions.length; i++){
    questionEl.innerHTML = questions[i].question;
    answer1.innerHTML = questions[1].answers[1];
    answer2.innerHTML = questions[i].answers[2];
    answer3.innerHTML = questions[i].answers[3];
    answer4.innerHTML = questions[i].answers[4];
  }
}



  


const startQuiz = function () {
  timer();
  quizEl.remove();
  displayQuestion();
};

const getScore = function () {};

quizEl.addEventListener("click", startQuiz);
