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


// Questions have answers and correct answers with them.
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
  }
];

//Starting the game with a score of 0.
var score = 0;

//Loop through every question until finished with the quiz.
for (var i = 0; i < questions.length; i++){

  //Display current question to user.
  var displayQuestion = (questions[i].question);
  var displayAnswer = (questions[i].answers);

  //Check if the answer is right
const correct = function(answer) {
  if(answer){
    (answer === true && questions[i].a === '') ||
    (answer === false && questions[i].a === '')
    score++;
    //Alert the user
    alert('Correct!');
  } else {
    alert('Wrong!');
    count = count -10
    timerEl.innerHTML = "Time: " + count;
  } 
}

}

//Display the current question to the user with the answers below. 
const showQuestion = function () {
  
  for (var i = 0; i < questions.length; i++){

    //Display current question to user.
    var displayQuestion = (questions[i].question);
    var displayAnswer = (questions[i].answers);
  }
};
  



//score is determined by the remaining time on the timer.
// const score = function () {};


// const saveScore = function () {
//   localStorage.setItem("score", score);
// };

//this will make it so that the timer will reduce once an incorrect answer has been chosen.
const scoreMinus = function () {};

//will call timer and quiz questions
const startQuiz = function () {
  timer();
  quizEl.remove();
  showQuestion();
  // displayQuestion();
};

//will be used to receive the scores at the end.
const getScore = function () {};




quizEl.addEventListener("click", startQuiz);
