/**
 * Created by Irina on 04/06/2018.
 */
onmessage = function(event){

    run(); //dududududud
}


/*


function run(){



    let sizeone=    (playeronepointsarray[2] + playeronepointsarray[8] + playeronepointsarray[4] - playeronepointsarray[12])/100;
    let sizetwo;




    postmessage(sizeone);

};*/

/*

/*if(Math.random(0,1)<0.05){//if random is randomly under 0.05 then change tOp
       tOp = Math.random(0.1, 1);
   }
   //else change the
   cOp += (tOp-cOp)/15;*/
/*
var time = Date.now();
var timeSlow = 0.00001 * time;
var looptime = 20 * 1000;
var t = (time % looptime) / looptime; //time for a loop is the time / 20 0000.
var t2 = (time % (looptime - 200)) / looptime;//get time at a differend time
var pos = tubegeometry.parameters.path.getPointAt(t);
var pos2 = tubegeometry.parameters.path.getPointAt(t2); //position at a different time

//spheres[4].sphere.add(spheres[1].sphere);

//THE TRIANGLES--------------------------------------------

var mesh = triangles[Math.floor(Math.random(20, 50))].mesh; //get a randim mesh of the particle system
mesh.position.x = pos.x - 40;
mesh.position.y = pos.y + 30;
mesh.position.z = -0.5;
mesh.position.divideScalar(90 + (Math.random() * 50));


//THE CUBES--------------------------------------------

cube.position.x = pos.x;
cube.position.y = pos.y;
cube2.position.x = pos.x;
cube2.position.y = pos.y;
cube3.position.x = pos.x;
cube3.position.y = pos.y;


//THE FORLOOP--------------------------------------------

var counter = 0;
for (var i = 0; i < 50; i++) { //animate all spheres and some triangles

    //calculating a different sinetime for animation for all of the trinangles and spheres
    let sineTime = 400 * Math.sin(timeSlow + i);
    let sineTime2 = 3 * Math.sin(timeSlow * 20 + i * 22);
    let sineTime3 = 3 * Math.sin(timeSlow * 10 + i * 22);

    //for the spheres to et them rotate and change position in the sinetime
    if (i < spheres.length) {
        var sfere = spheres[i].sphere;
        sfere.position.x = sineTime;
        // sfere.position.z= 500 * Math.sin( timer + i * 1.1 );
        sfere.position.z = 400 * Math.sin(timeSlow + i * 1.1);
        sfere.rotation.x += 0.004;
    }

    //this is just at the current time added to times i*100 so that it is different for every triangle, and then
    tcur = ((time + i * 100) % (looptime - i * Math.floor(Math.random(0, 10)))) / looptime; //get the position at current and i
    tpos = tubegeometry.parameters.path.getPointAt(tcur); //get point at current time



    var mesh = triangles[i].mesh; //get the current triangle
    mesh.rotation.x += 0.004;


    counter++;
    var newpos = tpos.x + counter * 5;
    mesh.position.x = newpos  //to get the triangles to start at a different x, preferable near the sphere

    if (newpos > 200) { //and to get the triangles to start again at zero when they have reached their destination
        counter = 0;
    }

    mesh.position.y = tpos.y + Math.floor(Math.random() *10);
    // mesh.position.z =  Math.floor(Math.random(0,200));


    rotationScalation(sineTime2, sineTime3);*/