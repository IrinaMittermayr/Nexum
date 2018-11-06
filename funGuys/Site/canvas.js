
let c;
let canvas;
let mx,my;
let isPressed = false;
let crossArray = [];
let otherCanvas;
function init(){

    canvas = createCanvas(windowWidth * 0.93, windowHeight*0.90);
    //c = document.getElementById('canvas').getContext('2d');
    var x = (windowWidth - width) / 2;
    var y = (windowHeight - height) / 2;
    canvas.position (x,y);

    /*otherCanvas.height = windowHeight;
    otherCanvas.width = windowWidth;

    otherCanvas.style.left = "0px";
    otherCanvas.style.top = "0px";*/

    for( var i = 0; i<1000; i++){
        var cr = new Cross();
        crossArray.push(cr);
    }

    blackBG();
    whiteLines();

    for( var i = 0; i<600; i++){
        var cr = new Cross();
        crossArray.push(cr);
    }

    draw();
}

function draw(){

    background(0,0,0);
    for(var i = 0; i< crossArray.length; i++){

        // crossArray[i].randomizeWander();
        crossArray[i].watchMouse();
        crossArray[i].isOutOfCanvas();
        crossArray[i].hasTouchedMouse();
        crossArray[i].behaviors();
        crossArray[i].update();
        crossArray[i].display();
    }
   // whiteLines();
    resize();

}

function redrawcanvas(){
    canvas.clear();
    blackBG();
    whiteLines();
}

function blackBG(){
    //c.fill="#000000";
    //c.rect(canvas.width*0.05,canvas.height*0.06,canvas.width*0.90, canvas.height*0.80);
}

function whiteLines(){
    //c.fillStyle="#FF0000";
    c.fillRect(windowWidth/100*20, 0, 2.5, windowHeight);
    c.fillRect(windowWidth/100*50, 0, 2.5, windowHeight);
    c.fillRect(windowWidth/100*80, 0, 2.5, windowHeight);

}

    //c.fillRect(0,0,canvas.width/100*20, canvas.height*2);
    //c.fillRect(canvas.width/100*80,0,canvas.width/100*20, canvas.height*2);

function getMouse(e) {
    mx = e.clientX - canvas.offsetLeft;
    my = e.clientY - canvas.offsetTop;
}

function move(e) {
    getMouse(e);
    if (isPressed) {
        c.lineTo(mx, my);
        c.stroke()
    }
}

function up(e) {
    getMouse(e);
    isPressed = false;
}

function windowResized() { resizeCanvas(windowWidth, windowHeight); }



function down(e) {
    getMouse(e);
    c.beginPath();
    c.moveTo(mx, my);
    isPressed = true;
}

function resize(){

    //canvas.height = windowHeight;
   // canvas.width = windowWidth;
   /* canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
    canvas.outerHeight($(window).height()-canvas.offset().top- Math.abs(canvas.outerHeight(true) - canvas.outerHeight()));
    redraw();*/


}
window.onresize = function(e){

};

window.onload = function(e){
    init();




    window.on("resize", function(){

    });
};

window.onclick = function(e){
    for(var u = 0; crossArray.length>u; u++){
        crossArray[u].randomizePosition();
    }

};