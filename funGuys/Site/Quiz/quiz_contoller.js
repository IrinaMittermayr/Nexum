//


playerOneBoolCont = true;


function Quiz(questions) {

    this.questions = questions;
    this.questionIndex = 0;
    this.questionCounter = 1;
    this.playerOne = "playerOne";
    this.playerTwo = "playerTwo";

    this.PlayerTwoPoints1 = [];
    this.PlayerOnePoints1 = [];
    this.playerOneBool = true;
}

Quiz.prototype.switchPlayer = function(player){ //updates the current player
    this.currentPlayer = player;
}

Quiz.prototype.getCurrentQuestion = function(){ //returns quesiton at the place in the array of the question index
    return this.questions[this.questionIndex];
};

Quiz.prototype.isEnded = function() {


    return this.questionIndex === this.questions.length;
};

Quiz.prototype.guess = function (answer) {
    /*if(this.getCurrentQuestion().isCorrectAnswer(answer)) {
        this.score++;
    }*/

    /*if(this.questionCounter > 1){
        this.questionCounter = 1;
        this.questionIndex++;
        this.savePoints(answer, this.playerOne);

        //alert(this.questionIndex + " " + this.questionCounter);
    }else{
        document.getElementById("secondPlayer").innerHTML = "Second Player, its your turn!";
        this.questionCounter ++;
        this.savePoints(answer, this.playerTwo);
    }*/

    this.questionIndex++;

    if(playerOneBoolCont){
        this.savePoints(answer, this.playerOne);
    }else{
        this.savePoints(answer, this.playerTwo);
    }



};


Quiz.prototype.printQuestions = function(){
    var questionstring = "";

    for(var i = 0; i<questions.length; i++){
        questionstring += questions[i].text + " , ";
    }
    alert(questionstring);
};

Quiz.prototype.savePoints = function(answer, curPlayer){ //called from the guess function



    var curAnswer;

    //checking  the player and adding the points to the array corresponding t the player

    if(curPlayer === "playerOne"){
        //  alert("Player one savepoints is over");
        this.PlayerOnePoints1.push(answer.points);
    }else if(curPlayer === "playerTwo"){


        //alert("Player one savepoints is over");
        this.PlayerTwoPoints1.push(answer.points);
    }




    /*for(var i = 0; i<this.getCurrentQuestion().choices.length; i++){ //just looking for the original answer and finding its points
        curAnswer = this.getCurrentQuestion().choices[i];


        alert(curPlayer === playerOne);
        if(curAnswer.prosa === answer.prosa && curPlayer === playerOne){
            //curPlayer = curAnswer.points;

            alert(curAnswer.points);
            this.PlayerOnePoints1.push(curAnswer.points);
        }else if(curAnswer.prosa == answer.prosa && curPlayer == playerTwo){
            this.PlayerTwoPoints1.push(curAnswer.points);
        }
    }*/


};