const timerEl = document.getElementById('timer');
//Script will have all the functionality to the quiz itself
//The quiz will have each answer have a certain value: I only need to make 2 values thankfully. One being correct and one being correct
//I need to make buttons that will start the quiz
//I need to make buttons that will clear the highscore list and go back to the main quiz as well.
//

//score is determined by the remaining time on the timer.
const score = function(){
}
//this will hold the timer in the entire page.
var count = 11; 
var counter = setInterval(timer, 1000);
const timer = function(){
  count = count-1;
  if (count <= -1) {
    clearInterval(counter);
    return;
  }
  document.getElementById("timer").innerHTML=count;
}



//this displays correct/incorrect when you click a specific answer on the quiz. 
const answer = function(){
  //display the word correct!
  if (result === true){
    console.log("Correct!");
  } else {
    console.log("Incorrect!");
  }
  
}

const saveScore = function(){
  localStorage.setItem("score", score);
}

//this will make it so that the timer will reduce once an incorrect answer has been chosen.
const scoreMinus = function(){

}

//will hold majority of the code
const startQuiz = function(){

}
//will be used to receive the scores at the end.
const getScore = function(){

}
