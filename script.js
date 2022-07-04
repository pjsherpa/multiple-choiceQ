var score = 0;

var scoreCount=document.querySelector(".score");
var startBtn=document.querySelector(".start");
var questionaire=document.querySelectorAll(".questionaire");
var changequestion=document.querySelectorAll(".changequestion");
var listofanswer=document.querySelectorAll('listofanswer');
var answer=document.querySelectorAll(".answer");
var a1=document.getElementById('a1')
var a2=document.getElementById('a2')
var a3=document.getElementById('a3')
var a4=document.getElementById('a4')
var c=document.getElementsByClassName('correct')
var w=document.getElementsByClassName('wrong')
var index = 0;

startBtn.onclick=function(event){
  
// what to show and what to hide to start the game
 console.log('button clicked') 
 startBtn.classList.add('hide')
 questionaire[0].classList.add('show')
 changequestion[0].classList.add('show')
 answer[0].children[0].classList.add('show')
 
 var timeLeft=80
 


// for timer
var countdown = setInterval(function (event) {
  
  var timer=document.querySelector('.timer');
  timeLeft--;

timer.textContent='Final Countdown: '+timeLeft; 
//  how to stop the timer from going negative and make to stop at 0
if(timeLeft===0){
  clearInterval(countdown);


// this is where the function of end game should be
}
}, 1000);

let questions = [
  {
  "question":"What can store data value that can be changed later on?",
  "options":["literal","addition", "asset", "variable"],
  "correct":"variable"
  },{
  "question":"what are the two types of loops?",
  "options":["while and this", "for and this", "for and while","all of the above"],
  "answer":"for and while"
  },{
  "question":"What are self closing tags?",
  "options":["its like the game tag","To effectively close out a beginning tag","To effectively close out a ending tag.","all of the above"],
  "correct":"To effectively close out a beginning tag"
  }
  ];
 
}





//Q1
// var next=function(){





// this is to make the listofanswer's button to function as a button
for (let i=0; i<listofanswer.length;i++)
console.log(listofanswer[i].addEventListener('click',function(){
console.log("button clicked")
listofanswer[i].style.backgroundColor='lightgray';
}))
  
//right way of putting everything together with a loop should be at the end


  changequestion[0].style.backgroundColor='lightblue';


//wrong way of putting background color
// listofanswer.style.backgroundColor='lightgray';


