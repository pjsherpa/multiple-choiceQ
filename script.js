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
var scoreCountoutput = document.querySelector(".score");
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
var timeLeft = 10;
var index = 0;
var gamend = document.getElementsByClassName("gamend");
var box = document.getElementsByClassName("box");
var scoreCountshow = document.getElementsByClassName("scoreCountshow");
var scoreCount = 0;
var fnameSpan = document.querySelector("#fnameSpan");
var register = document.getElementById("register");

// Once startbtn is clicked this is when the game begins with the gameStart function invoked.
startBtn.onclick = function (event) {
  // what to show and what to hide to start the game

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
      // if (questions[index] === 7 && timeLeft >= 0) {
      clearInterval(countdown);
      gameEnd();
      getScores();
      
      gamend[0].classList.add("show");
      // }
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
          scoreCount++;
          console.log(scoreCount);
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
}

// Updates scorecountshow on screen and sets scorecount count to client storage
function setWins() {
  scoreCount-output.textContent = scoreCountshow;
  localStorage.setItem("scoreCount", scoreCountshow);
}

// To store scores
function getScores() {
  // Get stored value from client storage, if it exists
  var storedScores = localStorage.getItem("scoreCount");
  // If stored value doesn't exist, set counter to 0
  if (storedScores === null) {
    scoreCount = 0;
  } else {
    scoreCount = storedScores;
  }
  //Render score count to page
  scoreCount = scoreCountshow.textContent;
}
//write your name
function renderLastRegistered() {
  var fname = localStorage.getItem("fname");

  if (!fname) {
    return;
  }

  fnameSpan.textContent = fname;
}

register.addEventListener("click", function (event) {
  event.preventDefault();

  var fname = document.querySelector("#fname").value;

  // if (fname === "") {
  //   displayMessage("error", "name cannot be blank");
  // } else {
  //   displayMessage("success", "Registered successfully");

  localStorage.setItem("fname", JSON.stringify(fname));

  console.log(fnameSpan, fname);
  renderLastRegistered();
  // }
});

setWins()
// Bits left
// Final Show score and store score and name
