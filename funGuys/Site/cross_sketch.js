/**
 * Created by Irina on 14/09/2017.
 */

var crossArray = [];


function setup(){
    createCanvas(2100,1000);
    background(0,0,0);

    for( var i = 0; i<8000; i++){
        var cr = new Cross();
        crossArray.push(cr);
    }

}

window.onclick = function(e){
    canvas.clear();
};

function draw(){

    background(0,0,0);

    for(var i = 0; i< crossArray.length; i++){

        // crossArray[i].randomizeWander();
        crossArray[i].watchMouse();
        crossArray[i].isOutOfCanvas();
        crossArray[i].behaviors();
        crossArray[i].update();
        crossArray[i].display();
    }
}