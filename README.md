# multiple-choiceQ

https://pjsherpa.github.io/multiple-choiceQ/
UCB Challenge 3

Note:The following will be provided in present tense.

This readme has the following:

Features
HTML
Reset.CSS
CSS
Javascript
Deployment
Screenshot of multiple-choiceQ for reference(img1-img5)


Features:
1. The page displays Recent Score, header, Time(has not started) start button and the game rules.
2. Click Start, start button and game rules are not displayed anymore, game quiz appears the timer starts.
3. Game quiz has a question and four choices once selected moves on to another question.(8 multiple choices in total)
4. Click on choices provided and if correct will display correct at the bottom and if incorrect will display incorrect at the bottom and deduct 1 second. 
5. If all 8 questions is finished before the time is up or if time is up and the game is over. It displays score, where we can store our name and the timer stops.
6. Once clicked on Registered name will be displayed with score on the main page and also after page refresh.

HTML:
1. The following is present in Html Semantic Elements.
2. Title name is Who want's to be a coder?
3. Link for both reset.css, style.css and script.js are setup.
4. First 2 Div's help deisplay time and score.
5. The section after that displays the start btn which starts the game and the game rules.
6. The section after has empty elements with class names. This is where the questions and choices appear through JS.
7. The final form is to register name after game end.
8. Comments are present in index.html.

Reset CSS:

1. reset.css copy of http://meyerweb.com/eric/tools/css/reset/ v2.0 | 20110126.
2. Comment is present reset.css.

CSS:
1. Root created for recurring colors.
2. Line height,background-color,box-sizing and font-family setup in general.
3. Class .left setup to move score to the left side . timer moved to the right.
4. Create .show and .hide to add to class names to create a feature to display or to hide elements.
5. .changequestion and .list of answer will show how Questions and choices will be presented.
6. Hover effect to enlarge choices and color change from green to lightblue for choices.
7. active will enlarge more once choice is seleceted.
8. Comments are present in style.css.

Javascript:
1. Create Questions and options with correct answers set in global scope.
2. Create variables for classes and id's to be used in functions.
3. Once startbtn is clicked this is when the game begins with the gameStart function invoked.
4. After startbtn the classlist.add will activate what to show and what to hide in display.
5. Setinterval function has been setup once game has been started
6. Display question and options using gamestart function.
7. Create loop to make selection active on choices.
8. if statement to count score to display correct or incorrect
9. Another if statement present if game finishes before time then invoke gameEnd function.
10. Local storage for both score and registration of name is setup. Once gameends this will all be displayed.
11. Comments are present in script.js.


live URL:https://pjsherpa.github.io/multiple-choiceQ/
GitHub URL:https://github.com/pjsherpa/multiple-choiceQ

Screenshots: 
img1:
![Screen Shot 2022-07-07 at 11 32 47 PM](https://user-images.githubusercontent.com/105903416/177931428-842d2b3e-00f9-416a-a28b-ea05b6f33c3e.png)
 
img2:
![Screen Shot 2022-07-07 at 11 33 04 PM](https://user-images.githubusercontent.com/105903416/177931527-57ef1e7d-38dd-40ae-acfa-2dfd598f82fd.png)

img3:
![Screen Shot 2022-07-07 at 11 36 23 PM](https://user-images.githubusercontent.com/105903416/177931629-9b1fe29a-69e5-4f07-a2c4-c4581e1f5ded.png)

img4:
<img width="336" alt="Screen Shot 2022-07-07 at 11 38 06 PM" src="https://user-images.githubusercontent.com/105903416/177932014-906152fc-ac54-4215-8f7d-e7a3d6e83e71.png">

img5:
<img width="380" alt="Screen Shot 2022-07-07 at 11 37 49 PM" src="https://user-images.githubusercontent.com/105903416/177932094-8cc209b8-51ad-4037-8c51-cb1c86412a94.png">

img6:
![Screen Shot 2022-07-07 at 11 34 28 PM](https://user-images.githubusercontent.com/105903416/177932154-54124376-d6c8-4de0-949d-d3a68a76fcb9.png)

img7:
![Screen Shot 2022-07-07 at 11 34 38 PM](https://user-images.githubusercontent.com/105903416/177932209-654b96fc-8906-4301-9739-ed959e57d108.png)







 

