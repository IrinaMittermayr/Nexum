/**
 * Created by Irina on 12/09/2017.
 */

function Cross(){

    this.pos = createVector(random(0,width),random(0,height));
    //this.enemy = createVector(random(), random());
    this.target = createVector();
    this.vel = createVector();
    this.acc = createVector();
    this.wander = createVector();
    this.width = 4;
    this.height = 12 ;
    this.maxspeed = 0.3;
    this.maxforce = 19;
    this.mouseSpeed = 0;
    this.velmouseSpeed = p5.Vector.random2D();
    this.counter = 0;
}

Cross.prototype.randomizePosition = function(){

    this.pos.x = random(0,canvas.width);
    this.pos.y = random(0,canvas.height);

};

Cross.prototype.update = function(){

    //this.vel.add(this.velmouseSpeed);
    this.pos.add(this.vel);
    this.vel.add(this.acc).limit(20);
    //this.vel.add(this.wander);
    //this.acc.add(this.steer);
    this.acc.mult(0);
    //var wander = this.wander(this.target);
    //this.acc.add(wander);
};


Cross.prototype.watchMouse = function(){

  counter = 0;
    counter ++;
    if(counter == 20){
        this.velmouseSpeed = p5.Vector.random2D().limit(this.mouseSpeed*2);
        counter = 0;
    }

    //this.velmouseSpeed.mult(0.8);
    this.target.x = mouseX;
    this.target.y = mouseY;

    //this.mouseSpeed =  abs(mouseX-pmouseX) + abs(mouseY-pmouseY);

    if(this.mouseSpeed > 300){
        this.disturb();
    }
    ///return createVector(mouseX, mouseY);
};

Cross.prototype.disturb = function(){
    this.vel.add(this.velmouseSpeed);
    console.log("hello");
};

Cross.prototype.randomizeWander = function(){

    this.vel = this.vel.add( p5.Vector.random2D().limit(0.1));

};


Cross.prototype.display = function(){

    fill(2, 105, 238, 80);
    noStroke();
    rect(this.pos.x, this.pos.y, this.width,this.height);
    rect(this.pos.x - this.height/3, this.pos.y + this.height/3, this.height,this.width);
};


Cross.prototype.behaviors = function(){
    var seek = this.seek(this.target);
    this.applyForce(seek);
};

Cross.prototype.applyForce = function(f){
    this.acc.add(f);
};

Cross.prototype.hasTouchedMouse = function(){
    if(this.pos.x == mouseX && this.pos.y == mouseY){
        this.vel = createVector(-1, random());
    }
};



Cross.prototype.isOutOfCanvas = function(){
    if(this.pos.x + this.height/3*2 > window.width){
        this.vel = createVector(-1, random());
    }else if(this.pos.x - this.height/3  < 0){
        this.vel = createVector(1, random());
    }
    else if(this.pos.y+this.height > window.height){
        this.vel = createVector(random(),-1);
    }else if(this.pos.y <0){
        this.vel = createVector(random(),1);
    }
};

Cross.prototype.seek = function(target){
    var desiredVelocity = p5.Vector.sub(target, this.pos).setMag(this.maxspeed);
    return p5.Vector.sub(desiredVelocity, this.vel);

};

Cross.prototype.flee = function(enemy){
    var desiredVelocity = p5.Vector.sub(this.pos, enemy);

    if(desiredVelocity>1){ //determines the radius for the influence on the vehicle
        var randomFlee = p5.Vector.sub(this.target, p5.Vector.random2D().setMag(this.maxspeed)); //creates a random vector which flees from the position
        //var fleeVector = p5.Vector.sub(desiredVelocity, randomFlee);
        return randomFlee;
    }


};


