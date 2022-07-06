// Questions and options with correct answers set in global scope.
let questions = [
  {
    question: "What can store data value that can be changed later on?",
    options: ["literal", "addition", "asset", "variable"],
    correct: "variable",
  },
  {
    question: "what are the two types of loops?",
    options: [
      "while and this",
      "for and this",
      "for and while",
      "all of the above",
    ],
    correct: "for and while",
  },
  {
    question: "What are self closing tags?",
    options: [
      "its like the game tag",
      "To effectively close out a beginning tag",
      "To effectively close out a ending tag.",
      "all of the above",
    ],
    correct: "To effectively close out a beginning tag",
  },
  {
    question: "Name one primitive data type?",
    options: ["undefined", "global scope", "array", "function"],
    correct: "undefined",
  },
  {
    question: "what is the logical 'and' operator?",
    options: [">", "||", "&&", "&"],
    correct: "&&",
  },
  {
    question: "Do not Repeat yourself is also known as?",
    options: ["DNRY", "DRU", "DRY", "YAK"],
    correct: "DRY",
  },
  {
    question: "What is a wrapper?",
    options: ["{}", "[]", "()", "<>"],
    correct: "<>",
  },
  {
    question: "font-weight, font-style,font-family are all?",
    options: ["font family", "textDecoration", "typography", "list-style"],
    correct: "typpography",
  },
];

//variables created for classes and id's to be used in functions.
var scoreCount = document.querySelector(".score");
var startBtn = document.querySelector(".start");
var questionaire = document.querySelectorAll(".questionaire");
var changequestion = document.querySelector(".changequestion");
var listofanswer = document.querySelectorAll("listofanswer");
var answer = document.querySelectorAll(".answer");
var a1 = document.getElementById("a1");
var a2 = document.getElementById("a2");
var a3 = document.getElementById("a3");
var a4 = document.getElementById("a4");
var box = document.getElementsByClassName("box");
var select = document.getElementsByClassName("select");
var timeLeft = 80;
var index = 0;
var gamend = document.getElementsByClassName("gamend");
var box = document.getElementsByClassName("box");

var score = 0;

/*
// to store scores
function init() {
  getScores();
}
*/

// var index = Math.floor(Math.random() * questions.length);
// var gameOn = questions[index];

// Once startbtn is clicked this is when the game begins with the gameStart function invoked.
startBtn.onclick = function (event) {
  // what to show and what to hide to start the game
  isWin = false;
  console.log("button clicked");
  startBtn.classList.add("hide");
  questionaire[0].classList.add("show");
  changequestion.classList.add("show");
  answer[0].children[0].classList.add("show");
  gameStart();
  // this will start the time interval
  var countdown = setInterval(function (event) {
    var timer = document.querySelector(".timer");
    timeLeft--;

    timer.textContent = "Final Countdown: " + timeLeft;

    // timer function started here and once ends will show where to store name once highscore is made.
    if (timeLeft === 0) {
      clearInterval(countdown);
      gameEnd();
    }
  }, 1000);
};

var gameStart = function () {
  var timer = document.querySelector(".timer");

  //display question and options to html//
  changequestion.textContent = questions[index].question;
  a1.textContent = questions[index].options[0];
  a2.textContent = questions[index].options[1];
  a3.textContent = questions[index].options[2];
  a4.textContent = questions[index].options[3];
  // this is to make the listofanswer's button react once clicked.
  for (let i = 0; i < select.length; i++)
    console.log(
      select[i].addEventListener("click", function (event) {
        console.log("button clicked");

        if (questions[index].correct === event.target.textContent) {
          console.log("correct");
          box[0].textContent = "correct";
        } else {
          console.log("wrong");
          box[0].textContent = "incorrect";
          timeLeft--;
        }
        var next = questions[index++];
        changequestion.textContent = questions[index].question;
        a1.textContent = questions[index].options[0];
        a2.textContent = questions[index].options[1];
        a3.textContent = questions[index].options[2];
        a4.textContent = questions[index].options[3];
      })
    );
};

// This is the end
function gameEnd() {
  questionaire[0].classList.remove("show");
  changequestion.classList.remove("show");
  answer[0].children[0].classList.remove("show");
  gamend[0].classList.add("show");

  //creating new textcontent here with score list and store smth.
}

// To store scores
function getScores() {
  // Get stored value from client storage, if it exists
  var storedScores = localStorage.getItem("scoreCount");
  // If stored value doesn't exist, set counter to 0
  if (storedScores === null) {
    scoreCount = 0;
  } else {
    // If a value is retrieved from client storage set the winCounter to that value
    scoreCount = storedScores;
  }
  //Render store count to page
  score.textContent = scoreCount;
}
