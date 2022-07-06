var score = 0;

// to store scores
function init() {
  getScores();
}

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
var c = document.getElementsByClassName("correct");
var w = document.getElementsByClassName("wrong");
var select = document.getElementsByClassName("select");
var timeLeft = 80;
var index = 0;
var select = document.getElementsByClassName("select");
var gamend = document.getElementsByClassName("gamend");

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
  // this will start the 80 seconds timer of the game.
  var countdown = setInterval(function (event) {
    var timer = document.querySelector(".timer");
    timeLeft--;

    timer.textContent = "Final Countdown: " + timeLeft;

    // once ends will show where to store name once highscore is made.
    if (timeLeft === 0) {
      clearInterval(countdown);
      gameEnd();
    }
  }, 1000);
};

var gameStart = function () {
  // this is to make the listofanswer's button to function as a button

  var timer = document.querySelector(".timer");
  //display question and options to html-PJ
  changequestion.textContent = questions[index].question;
  a1.textContent = questions[index].options[0];
  a2.textContent = questions[index].options[1];
  a3.textContent = questions[index].options[2];
  a4.textContent = questions[index].options[3];

  for (let i = 0; i < select.length; i++)
    console.log(
      select[i].addEventListener("click", function () {
        console.log("button clicked");
      })
    );
};

a1.addEventListener("click", function (event) {
  console.log(event.target.textContent);
  if (questions[0].correct === event.target.textContent) {
    console.log("correct");
  } else {
    console.log("wrong");
    timeLeft--;
  }
  //todo advance to the next question using index
  var next = questions[index++];
  changequestion.textContent = questions[index].question;
  a1.textContent = questions[index].options[0];
  a2.textContent = questions[index].options[1];
  a3.textContent = questions[index].options[2];
  a4.textContent = questions[index].options[3];
  c[0].classList.remove("show");
  console.log(questions[index++]);

  //display the next question-PJ hint for loop is not required
});
a2.addEventListener("click", function (event) {
  console.log(event.target.textContent);
  if (questions[0].correct === event.target.textContent) {
    console.log("correct");
    c[0].classList.add("show");
  } else {
    console.log("wrong");
    timeLeft--;
    console.log(timeLeft);
  }
  var next = questions[index++];
  changequestion.textContent = questions[index].question;
  a1.textContent = questions[index].options[0];
  a2.textContent = questions[index].options[1];
  a3.textContent = questions[index].options[2];
  a4.textContent = questions[index].options[3];
  c[0].classList.remove("show");
  console.log(questions[index++]);
});
a3.addEventListener("click", function (event) {
  console.log(event.target.textContent);
  if (questions[0].correct === event.target.textContent) {
    console.log("correct");
    c[0].classList.add("show");
  } else {
    console.log("wrong");
    timeLeft--;
    console.log(timeLeft);
  }
  var next = questions[index++];
  changequestion.textContent = questions[index].question;
  a1.textContent = questions[index].options[0];
  a2.textContent = questions[index].options[1];
  a3.textContent = questions[index].options[2];
  a4.textContent = questions[index].options[3];
  c[0].classList.remove("show");
  console.log(questions[index++]);
});
a4.addEventListener("click", function (event) {
  console.log(event.target.textContent);
  if (questions[0].correct === event.target.textContent) {
    console.log("correct");
  } else {
    console.log("wrong");
    timeLeft--;
    console.log(timeLeft);
  }
  var next = questions[index++];
  changequestion.textContent = questions[index].question;
  a1.textContent = questions[index].options[0];
  a2.textContent = questions[index].options[1];
  a3.textContent = questions[index].options[2];
  a4.textContent = questions[index].options[3];

  console.log(questions[index++]);
});
a4.addEventListener("click", function (event) {
  console.log(event.target.textContent);
  if (questions[0].correct === event.target.textContent) {
    console.log("correct");
    c[0].textContent;
  } else {
    console.log("wrong");
    timeLeft--;
    console.log(timeLeft);
  }
  var next = questions[index++];
  changequestion.textContent = questions[index].question;
  a1.textContent = questions[index].options[0];
  a2.textContent = questions[index].options[1];
  a3.textContent = questions[index].options[2];
  a4.textContent = questions[index].options[3];

  console.log(questions[index++]);
});

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
