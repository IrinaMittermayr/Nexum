/**
 * Created by Irina on 25/03/2018.
 */

function Question(text, choices, cat){ //constructor function
    this.text = text;
    this.choices = choices;
    this.cat = cat; //category

    //cat 1 = self and peer evaluation
    //cat 2 = emotions
    //cat 3 = similarity
    //cat 4 = bond
    //cat 5 = complexity
}

Question.prototype.isCorrectAnswer = function(choice) {
    return this.answer === choice;
}
