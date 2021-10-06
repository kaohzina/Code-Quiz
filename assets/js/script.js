const timerEl = document.getElementById("timer");
const answerEl = document.getElementById("answers");
const quizEl = document.getElementById("quiz");
const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");


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
    correctAnswer: 1,
  },
  {
    question: "What is the tool used to see the code in your browser?",
    answers: ["Search", "DevTools", "Find", "Locate"],
    correctAnswer: 2,
  },
  {
    question: "What method would you use to create a list?",
    answers: ["Stack", "List", "Order list", "Arrays"],
    correctAnswer: 4,
  },
  {
    question: "What color is the sky",
    answers: ["red", "yellow", "green", "blue"],
    correctAnswer: 3,
  },
];

//Starting the game with a score of 0.
var score = 0;

//Loop through every question until finished with the quiz.


//   //Display current question to user.
//   var displayQuestion = (questions[i].question);
//   var displayAnswer = (questions[i].answers);

const displayQuestion =function() {
  //clear div
  questionEl.innerHTML = questions[i].question;
  for (var i = 0; i < questions.answers.length; i++){ 
  answers = document.createElement('button');
  answers.innerHTML = questions.answers[i];
  answers.setAttribute('id',1)

  //click the correct answer
  // answers.onclick = function(){

  // }
  }
}


  


const startQuiz = function () {
  timer();
  quizEl.remove();
  displayQuestion();
};

const getScore = function () {};

quizEl.addEventListener("click", startQuiz);
