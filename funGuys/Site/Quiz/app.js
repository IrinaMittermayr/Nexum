/**
 * Created by Irina on 25/03/2018.
 */


//mistakes

/*

1.) I included the scripts at the beginning where some of the tags fif not yet exist and thus could not use the dom scripting
feature

2.) I wanted to get elements by id which was incrementing and wrote ("choice") + i instead of ("choice" + i)

 */





window.playeronepointsarray = [];

let sizeone;
let sizetwo;

window.playertwopointsarray = [];
let playerOneBool = true;


var indexvariable;




var btn = document.createElement("BUTTON");        // Create a <button> element
var t = document.createTextNode("REVEAL ");       // Create a text node
btn.appendChild(t);



btn.onmousedown = function(){
    $.getScript("main.js", function() {
        // Access it by name
        // or as a property of window
        // both ways to access my_variable work and are valid.
    });
    btn.classList.add("displayNone");

    //document.getElementsByClassName('grid')[0].classList.add("displayNone");


};


function fillQuestions(){

    //alert(quiz.questions[quiz.questionIndex].text);

    document.getElementsByClassName("counter")[0].innerHTML = quiz.questionIndex + "<span class='bluesies'>/</span>" + quiz.questions.length;


    if(quiz.isEnded()){
        //showSocres();
        let score = 0;
        /*for(var y = 0; y<quiz.PlayerOnePoints1.length; y++){
            score += quiz.PlayerOnePoints1[y];
        }
        alert("Final score" + score);*/
        //alert("quiz is ended " + quiz.PlayerOnePoints1);
        document.getElementById("right").classList.remove("whitesies");
        document.getElementById("right").classList.add("bluesies");

        document.getElementById("left").classList.remove("bluesies");
        document.getElementById("left").classList.add("whitesies");



        if(playerOneBool){

            quiz.playerOneBoolCont = false;
            quiz.questionIndex = 0;

            for(var x = 0; x<16; x++){
                indexvariable = quiz.PlayerOnePoints1[x];
                playeronepointsarray.push(indexvariable);
            }
            // Append the text to <button>

            fillQuestions();
        }


        if(!playerOneBool){

            for(var c = 0; c<quiz.questions.length+1; c++){
                indexvariable = quiz.PlayerTwoPoints1[c];
                playertwopointsarray.push(indexvariable);
            }

           sizetwo = (playertwopointsarray[2] + playertwopointsarray[8] + playertwopointsarray[4] - playertwopointsarray[12])/100;
           sizeone = (playeronepointsarray[2] + playeronepointsarray[8] + playeronepointsarray[4] - playeronepointsarray[12])/100;


            document.getElementsByClassName("grid")[0].classList.add('none');
            btn.classList.add("buttonResume");
            var container = document.getElementById('containter');
            container.appendChild(btn);
            container.classList.add('fullwidth');

        }

        playerOneBool = false;
        playerOneBoolCont = false;



    }else{

        //show questions

        document.getElementById("question").innerHTML = quiz.questions[quiz.questionIndex].text;
        //document.getElementById("choice1").innerHTML = "Paragraph changed!";
        var choices = quiz.getCurrentQuestion().choices;

        var cur;
        for(var i = 0; i<choices.length; i++){
            cur = document.getElementById(("choice") + i);
            cur.innerHTML = choices[i].prosa;
            guess("btn" + i , choices[i]);
           // alert (choices[i]);
        }
        /* for(var i = 0; i<choices.length; i++){
         cur = document.getElementById(("choice") + i);
         cur.innerHTML = choices[i].prosa;
         guess("btn" + i , choices[i]);
         // alert (choices[i]);
         }*/
    }
}



var choice1_answer1 = new Answer("No we are really different", 30);
var choice1_answer2 = new Answer("Not more than average", 10);
var choice1_answer3 = new Answer( "A few", 5);
var choice1_answer4 = new Answer( "We are very similar", 2);

var choice2_answer1 = new Answer("overwhelmed", 2, 1);
var choice2_answer2 = new Answer("apprehensive", 10, 1);
var choice2_answer3 = new Answer( "indifferent", 60 ,1);
var choice2_answer4 = new Answer( "audacious", 120 ,1);

var choice3_answer1 = new Answer( "Never", 2);
var choice3_answer2 = new Answer( "Once", 10);
var choice3_answer3 = new Answer( "A few times", 40);
var choice3_answer4 = new Answer( " Yes often", 80);

var choice4_answer1 = new Answer("No", 2 ,1);
var choice4_answer2 = new Answer("if there were no other options", 10 ,1);
var choice4_answer3 = new Answer( "yes, but with apprehension", 60 ,1);
var choice4_answer4 = new Answer( "yes", 120 ,1);

var choice5_answer1 = new Answer("No there is no emotional depth", 2);
var choice5_answer2 = new Answer("Kind of", 5);
var choice5_answer3 = new Answer( "yes sometimes", 10);
var choice5_answer4 = new Answer( "It feels like we are always on the same page", 50);

var choice6_answer1 = new Answer("None", 30);
var choice6_answer2 = new Answer("One or two", 10);
var choice6_answer3 = new Answer("A few but nothing serious", 5);
var choice6_answer4 = new Answer("Many", 2);

var choice7_answer1 = new Answer("Humour", 2);
var choice7_answer2 = new Answer("Loyalty", 10);
var choice7_answer3 = new Answer("Intellect", 10);
var choice7_answer4 = new Answer("Kindness", 50);

var choice8_answer1 = new Answer("Never", 2, 1);
var choice8_answer2 = new Answer("Sometimes", 10, 1);
var choice8_answer3 = new Answer( "Often", 60, 1);
var choice8_answer4 = new Answer( "Very often. Because I am.", 120, 1);



var choice9_answer1 = new Answer("No I feel exhausted", 2);
var choice9_answer2 = new Answer("I feel like with everyone", 5);
var choice9_answer3 = new Answer( "Talking with them gives me some energy", 10);
var choice9_answer4 = new Answer( "I feel totally energized after talking with them", 50);

var choice10_answer1 = new Answer("0-2 Years", 2);
var choice10_answer2 = new Answer("2-5 Years", 10);
var choice10_answer3 = new Answer( "5-10 Years", 50);
var choice10_answer4 = new Answer( "always", 80);

var choice11_answer1 = new Answer("We don't really talk", 30);
var choice11_answer2 = new Answer("Every week or so", 10);
var choice11_answer3 = new Answer( "A few times a week", 5);
var choice11_answer4 = new Answer( "Every day", 2);

var choice12_answer1 = new Answer("No", 2 ,1);
var choice12_answer2 = new Answer("We have the same chance of achieving our goals in life", 10 ,1);
var choice12_answer3 = new Answer( "They have more potential", 60 ,1);
var choice12_answer4 = new Answer( "Very likely", 120 ,1);

var choice13_answer1 = new Answer("Being wise", 2);
var choice13_answer2 = new Answer("Being good", 5);
var choice13_answer3 = new Answer("Being powerful", 10);
var choice13_answer4 = new Answer("Being open minded", 50);

var choice14_answer1 = new Answer("Never", 2);
var choice14_answer2 = new Answer("Sometimes", 5);
var choice14_answer3 = new Answer( "Yes, a specific skill", 10);
var choice14_answer4 = new Answer( "Yes fo a lot of things", 50);

var choice15_answer1 = new Answer("No", 2);
var choice15_answer2 = new Answer("If i had to", 10);
var choice15_answer3 = new Answer( "yes", 40);
var choice15_answer4 = new Answer( "I would trust them with my life", 80);

var choice16_answer1 = new Answer("0-2", 30);
var choice16_answer2 = new Answer("2-4", 10);
var choice16_answer3 = new Answer( "4-6", 50);
var choice16_answer4 = new Answer( "6-8", 2);


var choice17_answer1 = new Answer("I have told them everything", 30);
var choice17_answer2 = new Answer("Yes, many things", 10);
var choice17_answer3 = new Answer( "some things", 5);
var choice17_answer4 = new Answer( "No, not really", 2);

var choice18_answer1 = new Answer("10 times a day", 30);
var choice18_answer2 = new Answer("3 times a day", 10);
var choice18_answer3 = new Answer( "every other day", 5);
var choice18_answer4 = new Answer( "once a week to once a month", 2);

/*let choices1 = [
    [new Answer("Java", 3)],
    [new Answer("C#", 4)],
    [new Answer("C++", 5)],
    [new Answer("C", 6)]
];*/

//2,3,4,5,8,9,12,15
//similarity   --> synchroncity
//
//perecption/esteem yes yes 2,4,8,12
//similarity : 7,10,13,14 What is your partners greates asset ? What is the most important thing to you? , How long do you believe will you keep in touch with the other person?
//connection : 1,6,11,16  How many secrets do you now about the other person? , do you share many interests? ,
//emotion : 3,5,9,15 ve you ever felt proud of them, do you sometimes feel like you two really click, do you feel energized after talking with them, do you feel like you can trust them --> colors

let questions = [
    new Question("Do you and the other person share many interests?", [choice1_answer1, choice1_answer2, choice1_answer3, choice1_answer4]),
    new Question("When given a challenge how do you feel?", [choice2_answer1, choice2_answer2, choice2_answer3, choice2_answer4]),
    new Question("Have you ever felt proud of the other person?", [choice3_answer1, choice3_answer2, choice3_answer3, choice3_answer4]),
    new Question("would you entrust the other person with something dear to your <3?", [choice4_answer1, choice4_answer2, choice4_answer3, choice4_answer4]),
    new Question("do you sometimes feel like you two really click?", [choice5_answer1, choice5_answer2, choice5_answer3, choice5_answer4]),
    new Question("How many secrets do you know about the other person?", [choice6_answer1, choice6_answer2, choice6_answer3, choice6_answer4]),
    new Question("What is the other person greatest asset?", [choice7_answer1, choice7_answer2, choice7_answer3, choice7_answer4]),
    new Question("Do you feel superior to other people?", [choice8_answer1, choice8_answer2, choice8_answer3, choice8_answer4]),

    new Question("Do you feel energized after talking with them?", [choice9_answer1, choice9_answer2, choice9_answer3, choice9_answer4]),
    new Question("How long do you believe will you keep in touch with the other person?", [choice10_answer1, choice10_answer2, choice10_answer3, choice10_answer4]),
    new Question("How often do you and the other person talk?", [choice11_answer1, choice11_answer2, choice11_answer3, choice11_answer4]),
    //new Question("if the other person were to ask you for a loan of 2000 euros, would you give it to them?", [choice12_answer1, choice12_answer2, choice12_answer3, choice12_answer4]),
    new Question("Do you feel like the other person will come further in life than you?", [choice12_answer4, choice12_answer3, choice12_answer2, choice12_answer1]),
    new Question("What is the most important thing to you?", [choice13_answer1, choice13_answer2, choice13_answer3, choice13_answer4]),
    new Question("Do you often envy them?", [choice14_answer1, choice14_answer2, choice14_answer3, choice14_answer4]),
    new Question("Do you feel like you can trust them?", [choice15_answer1, choice15_answer2, choice15_answer3, choice15_answer4]),
    new Question("On a scale from 1 to 8, how close are you to the other person?", [choice16_answer1, choice16_answer2, choice16_answer3, choice16_answer4]),

    new Question("Are there things you always wanted to say to them that you never dared to?", [choice17_answer1, choice17_answer2, choice17_answer3, choice17_answer4]),
    new Question("How often do you think about them?", [choice18_answer1, choice18_answer2, choice18_answer3, choice18_answer4]),

    // new Question("Do you catch yourself thinking lowly of them?", [choice16_answer1, choice16_answer2, choice16_answer3, choice16_answer4]),



    /*

    new Question("On a scale from 3 to 17, how close are you to the other person?", [choice1_answer1, choice1_answer2, choice1_answer3, choice1_answer4]),
    new Question("When given a challenge how do you feel?", [choice2_answer1, choice2_answer2, choice2_answer3, choice2_answer4]),
    new Question("How many secrets do you now about the other person?", [choice3_answer1, choice3_answer2, choice3_answer3, choice3_answer4]),
    new Question("would you entrust the other person with something dear to your <3?", [choice4_answer1, choice4_answer2, choice4_answer3, choice4_answer4]),
    new Question("How strongly do you feel connected to them?", [choice5_answer1, choice5_answer2, choice5_answer3, choice5_answer4]),
    new Question("Do you often envy them?", [choice6_answer1, choice6_answer2, choice6_answer3, choice6_answer4]),
    new Question("Have you ever felt attraction towards them?", [choice7_answer1, choice7_answer2, choice7_answer3, choice7_answer4]),
    new Question("Do you feel superior to other people?", [choice8_answer1, choice8_answer2, choice8_answer3, choice8_answer4]),

    new Question("On a scale from 3 to 17, how close are you to the other person?", [choice9_answer1, choice9_answer2, choice9_answer3, choice9_answer4]),
    new Question("How long do you believe will you keep in touch with the other person?", [choice10_answer1, choice10_answer2, choice10_answer3, choice10_answer4]),
    new Question("How many secrets do you now about the other person?", [choice11_answer1, choice11_answer2, choice11_answer3, choice11_answer4]),
    //new Question("if the other person were to ask you for a loan of 2000 euros, would you give it to them?", [choice12_answer1, choice12_answer2, choice12_answer3, choice12_answer4]),
    new Question("Do you feel like the other person will come further in life than you?", [choice12_answer1, choice12_answer2, choice12_answer3, choice12_answer4]),
    new Question("How strongly do you feel connected to them?", [choice13_answer1, choice13_answer2, choice13_answer3, choice13_answer4]),
    new Question("Do you often envy them?", [choice14_answer1, choice14_answer2, choice14_answer3, choice14_answer4]),
    new Question("Have you ever felt attraction towards them?", [choice15_answer1, choice15_answer2, choice15_answer3, choice15_answer4]),
    new Question("Do you catch yourself thinking lowly of them?", [choice16_answer1, choice16_answer2, choice16_answer3, choice16_answer4]),
   // new Question("Do you catch yourself thinking lowly of them?", [choice16_answer1, choice16_answer2, choice16_answer3, choice16_answer4]),

     */
];

function guess(btnId, guess){
        var button  = document.getElementById(btnId);
        button.onclick = function(){
        quiz.guess(guess);
        fillQuestions();
    }
}

let quiz = new Quiz(questions);

fillQuestions();
