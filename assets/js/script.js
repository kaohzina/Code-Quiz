const timerEl = document.getElementById("timer");
const answerEl = document.getElementById("answers");
const quizEl = document.getElementById("quiz");
const questionEl = document.getElementById("question");

//Access the <body> element in html
var body = document.body;
//Timer function
var count = 11;
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
    correctAnswer: [1],
  },
  {
    question: "What is the tool used to see the code in your browser?",
    answers: ["Search", "DevTools", "Find", "Locate"],
    correctAnswer: [2],
  },
  {
    question: "What method would you use to create a list?",
    answers: ["red", "yellow", "green", "Arrays"],
    correctAnswer: [4],
  },
  {
    question: "What color is the sky",
    answers: ["red", "yellow", "green", "blue"],
    correctAnswer: [4],
  }
];

//Starting the game with a score of 0.
var score = 0;

//Loop through every question until finished with the quiz.
for (var i = 0; i < questions.length; i++){

  //Display current question to user.
  var answer = confirm(questions[i].q);

  //Compare answers
  if (
    (answer === true && questions[i].a === '') ||
    (answer === false && questions[i].a === '')
  )
  {
    score++;
    //Alert the user
    alert('Correct!');
  } else {
    alert('Wrong!');
  }
}



//Display the current question to the user with the answers below. 
const createQuestion = function () {
  questionEl.innerHTML = questions[i].question
  
  
  
  };
  



//score is determined by the remaining time on the timer.
const score = function () {};


//this displays correct/incorrect when you click a specific answer on the quiz.
const answer = function () {
  //display the word correct!
  if (result === true) {
    console.log("Correct!");
  } else {
    console.log("Incorrect!");
  }
};

const saveScore = function () {
  localStorage.setItem("score", score);
};

//this will make it so that the timer will reduce once an incorrect answer has been chosen.
const scoreMinus = function () {};

//will call timer and quiz questions
const startQuiz = function () {
  console.log("hello how are you?");
  timer();
  // createQuestion();
};

//will be used to receive the scores at the end.
const getScore = function () {};




quizEl.addEventListener("click", startQuiz);
