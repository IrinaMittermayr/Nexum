let pathDeviationx = 30;
let pathdeviationy = -30;

let playerTwoPoints = [];
let playerOnePoints = [];

let distance = 200; //distance

let colors = [];
let workervar;




let projector = new THREE.Projector();
let mouseVector = new THREE.Vector3();

let scene = new THREE.Scene();
let shape = [];

let canvas = document.getElementById("webgl-container");
let camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 10000);
let renderer = new THREE.WebGLRenderer({antialias: true});

var controls = new THREE.OrbitControls(camera, renderer.domElement);
let tOp = 0.1;
let cOp = 0;
let connection;

let lengthOne;

function init() {

    //0x1b1b6d blaus
    //0xffe4e1 rosa
    //renderer

     lengthOne = (playeronepointsarray[16] +playeronepointsarray[17])/2;
    lengthOne = (playeronepointsarray[16] +playeronepointsarray[17])/2;


    connection = playeronepointsarray[0] + playeronepointsarray[5] +playeronepointsarray[10] +playeronepointsarray[15] ;
    let sumEmotion = playeronepointsarray[2] + playertwopointsarray[4] +playeronepointsarray[8] +playertwopointsarray[14];

    distance *= (connection) ;

    distance = map(connection, 4,380, 4,4000);


    //distance = Math.min(Math.max(parseInt(distance), 0), 2500);


    if(sumEmotion<=10){
        for(let y = 0; y<color6.length; y++){
            colors[y] = color6[y];
            distance *= 1.15;
        }
    }else if(  10< sumEmotion  && sumEmotion<=40){
        for(let y = 0; y<color5.length; y++){
            colors[y] = color5[y];
            distance *= 1.08;

        }
    }else if(  40< sumEmotion  && sumEmotion<=100){
        for(let y = 0; y<color2.length; y++){
            colors[y] = color2[y];
        }
    }else if(  100< sumEmotion  && sumEmotion<=240){
        for(let y = 0; y<color3.length; y++){
            colors[y] = color3[y];
        }
    }else if(  240< sumEmotion  && sumEmotion<=300){
        for(let y = 0; y<color4.length; y++){
            colors[y] = color4[y];
        }
    }else if(  300< sumEmotion  && sumEmotion<=480){
        for(let y = 0; y<color1.length; y++){
            colors[y] = color1[y];
        }
    }else{
        for(let y = 0; y<color1.length; y++){
            colors[y] = color1[y];
        }
    }


    renderer.shadowMapEnabled = true;
    renderer.shadowMapSoft = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.setClearColor(colors[5]); //background color
    renderer.setSize(window.innerWidth, window.innerHeight);
    canvas.appendChild(renderer.domElement);

    //camera
    camera.position.z = 100;

    //controls
    controls.enableDamping = false;
    controls.factor = 0.25;
    controls.enableZoome = true;

    //window.addEventListener("resize", function (argument) {
    window.addEventListener("resize", function (argument) {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });


    var guicontrols = new function () {
        this.rotationX = 0.001;
        this.rotationY = 0.001;
        this.rotationZ = 0.001;
    };

    /*var datGui = new dat.GUI();
    datGui.add(guicontrols, 'rotationX', 0, 1);
    datGui.add(guicontrols, 'rotationY', 0, 1);
    datGui.add(guicontrols, 'rotationZ', 0, 1);*/

    //axis and grid
    var axis = new THREE.AxisHelper(10);
    var grid = new THREE.GridHelper(50, 5, 0x000000);
    var color = new THREE.Color("rbg(240,0,0)");

    //get quiz variables

}

function map (num, in_min, in_max, out_min, out_max) {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

let spheres = [];

function spheresAhead() {

    for (var i = 0; i < 30; i++) {

        let sferesize = 0;
        if(i<15){
            sferesize = (playeronepointsarray[2] + playeronepointsarray[4] + playeronepointsarray[8])/120;
        }else{
            sferesize = (playertwopointsarray[2] + playertwopointsarray[4] + playertwopointsarray[8])/120;

        }
        sferesize = Math.floor(map(sferesize, 5, 370, 0.2,4));

        let cursphere = new Sphere(Math.random(0, 500) * i * 10, Math.random(0, 500) * i * 10, Math.random(0, 500) * i * 10, sferesize );
        spheres.push(cursphere);
        cursphere.setOpacity(Math.random(0.01, 0.4));

        /*let intersectionPart = cursphere.sphere.intersect(cursphere.core);
         let meshIntersection = intersection.toMesh(particleMaterial);
         scene.add(meshIntersection);*/
        scene.add(cursphere.sphere);
        //scene.add(cursphere.core);
    }
}

function CustomSinCurve(scale) {
    THREE.Curve.call(this);
    this.scale = (scale === undefined) ? 1 : scale;
}

let sines = [];


function sinesPines() {
    for (let u = 0; u < Math.floor(connection/2+2); u++) {
        var rotation = (Math.random() * (2 - (-2)) - 2);
        sines.push(sineCurve(Math.random() * (0.9 -  0.2) - 0.1, distance*2/3, rotation, 6));
        scene.add(sines[u]);
    }
}

function foggyFrog(){
    scene.fog = new THREE.Fog( colors[2], 0, 2000 );
}

let sine1;
let tubematerial;
let params;

function initTumeMat() {

    sine1 = sineCurve(0.5, distance*2/3, .6, 6);
    scene.add(sine1);

    tubematerial = new THREE.MeshBasicMaterial({color: colors[2], transparent: true, opacity: 0.2});
    params = {
        scale: sizeone*50,
        extrusionSegments: 100,
        radiusSegments: 5,
        closed: true,
        animationView: false,
        lookAhead: false,
        cameraHelper: false,
        side: THREE.DoubleSide
    };
}


/*let spherecur = new Sphere(100,100,100);

 let colors = [];
 for(var k = 0; k<spherecur.sphereGeometry.vertices.length; k++ ){
 colors[k] = new THREE.Color();
 colors[k].setHSL(Math.random(0.2,0.8), 1, 0.5);
 }*/

//color schemes --> 4*4 16 different schemes?

let triangles = []; //TRIANGLES


//let color1;
function trianglesOnLine() {

    lengthOne = map(lengthOne, 4,60,250,400);

    for (let u = 0; u < 256; u++) {
        partcur = new Particle(4, colors[3]);
        triangles.push(partcur);
        let mesh = triangles[u].mesh;
        //mesh.position.set(Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5).normalize(); // for equal distribution of the triangles
        var num = Math.floor(Math.random()*90) + 1; // this will get a number between 1 and 99;
        num *= Math.floor(Math.random()*2) == 1 ? 1 : -1;

        mesh.position.set(0, 0, num*distance/800);

        scene.add(mesh);
    }
}

let trianglesRight = []; //TRIANGLES


//let color1;
function trianglesOnLineRight() {

    for (let u = 0; u < 256; u++) {
        partcur = new Particle(4, colors[3]);
        trianglesRight.push(partcur);
        let mesh = trianglesRight[u].mesh;
        var num = Math.floor(Math.random()*90) + 1; // this will get a number between 1 and 99;
        num *= Math.floor(Math.random()*2) == 1 ? 1 : -1;
        mesh.position.set(0, 0,  num*distance/800);
        scene.add(mesh);
    }
}



let staticTriangles = [];
function staticTraingles(){
    /*let colorInput3 = Math.floor((playeronepointsarray[3] % playeronepointsarray[15]) * 20);
       let colorInput2 = Math.floor(playeronepointsarray[3] / playeronepointsarray[5] *playeronepointsarray[9] % playeronepointsarray[15]);
       let colorInput1 = Math.floor((playeronepointsarray[3] % playeronepointsarray[9]) *playeronepointsarray[3]);

       color1 = new THREE.Color("rbg("+ colorInput1 + " + , + " + colorInput3 + " + , + " + colorInput2 + ")");*/

    // mesh.position.multiplyScalar(90 + (Math.random() * 700));
    //mesh.rotation.set(Math.random() * 2, Math.random() * 2,)
    for (let u = 0; u < playertwopointsarray.length * 8; u++) {
        partcur = new Particle(4, colors[1]);
        //staticTriangles.push(partcur);
        //let mesh = staticTriangles[u].mesh;
        scene.add(partcur.mesh);
        //mesh.position.set(Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5).normalize(); // for equal distribution of the triangles
        //mesh.position.set(Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5).normalize();

        //mesh.position.multiplyScalar(90 + (Math.random() * 700));
        //mesh.rotation.set(Math.random() * 2, Math.random() * 2,)
        //scene.add(mesh);
    }
}

//PLayers and Wireframes
//var sizeOfPlayerOne = playerOnePoints[2]+ playerOnePoints[4] - playerOnePoints[8] - playerOnePoints[12];
//var sizeOfPlayerTwo = playerTwoPoints[2]+ playerTwoPoints[4] - playerTwoPoints[8] - playerTwoPoints[12];

let playerOne;
let playerTwo;
let PlayerOneWire;
let PlayerTwoWire;

function playerSpheres() {

    var number1 = Math.floor(sizeone*10-sizetwo*5);
    var number2 = Math.floor(sizetwo*10-sizeone*5);

    var Inputnumber1 = Math.min(Math.max(parseInt(number1), 0), 3);
    var Inputnumber2 = Math.min(Math.max(parseInt(number2), 0), 3);


    playerOne = new PlayerSPhere(5, -distance, 0, 0, colors[6], colors[7], Inputnumber1);
    scene.add(playerOne.sphere);
    playerTwo = new PlayerSPhere(3, distance, 0, 0, colors[7], colors[4] , Inputnumber2);
    scene.add(playerTwo.sphere);

    PlayerOneWire = new PlayerSPhere(5, -distance, 0, 0, new THREE.Color(0xfff), new THREE.Color(0xfff), Inputnumber1 );
    PlayerTwoWire = new PlayerSPhere(5, distance, 0, 0 , new THREE.Color(0xfff), new THREE.Color(0xfff), Inputnumber2   );

    var mat = new THREE.LineBasicMaterial({color: colors[8], linewidth: 20});
    var wireframe = new THREE.LineSegments(PlayerOneWire.sphereGeometry, mat);
    var wireframe2 = new THREE.LineSegments(PlayerTwoWire.sphereGeometry, mat);

    PlayerOneWire.sphere.add(wireframe);
    PlayerTwoWire.sphere.add(wireframe2);

    PlayerOneWire.sphereMaterial.wireframe = true;
    PlayerTwoWire.sphereMaterial.flatShading = false;
    PlayerOneWire.sphereMaterial.flatShading = false;

    PlayerTwoWire.sphereMaterial.wireframe = true;

    scene.add(PlayerOneWire.sphere);
    scene.add(PlayerTwoWire.sphere);
}


let cube;
let cube2;
let cube3;

function cubeCity() {
    var cubegeo = new THREE.BoxGeometry(40, 40, 40);
    cube = new THREE.Mesh(cubegeo, tubematerial);
    scene.add(cube);

    var cubegeo2 = new THREE.BoxGeometry(10, 10, 10);
    cube2 = new THREE.Mesh(cubegeo2, tubematerial);
    cube.add(cube2);

    var cubegeo3 = new THREE.BoxGeometry(20, 20, 20);
    cube3 = new THREE.Mesh(cubegeo3, tubematerial);
    cube3.position.x += 200;
    cube2.add(cube3);
}

//var vertices =  sphereTest.geometry.vertices;


let system1;
let system2;
function drawDotSystem() {
    dotSystem = new THREE.Group();
    scene.add(dotSystem);

     system1 = new DotSystem({
        intensity: 30000,
        color: colors[1],
        xSpread: 8000,
        ySpread: 8000,
        zSpread: 8000,
        size: 8,
    });

    dotSystem.add(system1.group);

     system2 = new DotSystem({
        intensity: 30000,
        color: colors[4],
        xSpread: 8000,
        ySpread: 8000,
        zSpread: 8000,
        size: 12,
    });

    system2.group.position.set(-100, -80, 0);
    dotSystem.add(system2.group);
}


function render() {

    /*if(Math.random(0,1)<0.05){//if random is randomly under 0.05 then change tOp
        tOp = Math.random(0.1, 1);
    }
    //else change the
    cOp += (tOp-cOp)/15;*/

    var time = Date.now();
    var timeSlow = 0.00001 * time;
    var looptime = 20 * 1000;
    var t = (time % looptime) / looptime; //time for a loop is the time / 20 0000.
    var t2 = (time % (looptime - 200)) / looptime;//get time at a differend time
    var pos = tubegeometry.parameters.path.getPointAt(t);
    var pos2 = tubegeometry.parameters.path.getPointAt(t2); //position at a different time

    //spheres[4].sphere.add(spheres[1].sphere);

    //THE TRIANGLES--------------------------------------------

   // var mesh = triangles[Math.floor(Math.random(20, 50))].mesh; //get a randim mesh of the particle system
    //mesh.position.x = pos.x - 40;
    //mesh.position.y = pos.y + 30;

    //mesh.position.z = -0.5;
   // mesh.position.divideScalar(90 + (Math.random() * 50));

    //THE CUBES--------------------------------------------

    cube.position.x = pos.x;
    cube.position.y = pos.y;
    cube2.position.x = pos.x;
    cube2.position.y = pos.y;
    cube3.position.x = pos.x;
    cube3.position.y = pos.y;

    //THE FORLOOP--------------------------------------------

    let TriangleZValue = Math.random()*10;
    var counter = 0;
    let counterZ = 0;
    for (var i = 0; i < triangles.length; i++) { //animate all spheres and some triangles

        //calculating a different sinetime for animation for all of the trinangles and spheres
        let sineTime = 400 * Math.sin(timeSlow + i * connection/10);
        let sineTime2 = 3 * Math.sin(timeSlow * connection/10 + i * similarity*5);


        let sineTime3 = 3 * Math.sin(timeSlow * 10 + i * 22);

        //for the spheres to et them rotate and change position in the sinetime
        if (i < spheres.length) {
            var sfere = spheres[i].sphere;
            sfere.position.x = sineTime;
            // sfere.position.z= 500 * Math.sin( timer + i * 1.1 );
            sfere.position.z = 400 * Math.sin(timeSlow + i * 1.1);
            sfere.rotation.x += 0.004;
        }

        if(i<sines.length){
            var sine =sines[i];
            sine.rotation.x += 0.0004;
        }

        //this is just at the current time multiplied times i*100 so that it is different for every triangle, and then
        tcur = ((time + i * 100) % (looptime - i * Math.floor(Math.random(0, 10)))) / looptime; //get the position at current and i
        tpos = tubegeometry.parameters.path.getPointAt(tcur); //get point at current time

        var mesh = triangles[i].mesh; //get the current triangle
        var meshright = trianglesRight[i].mesh;
       // mesh.rotation.x += 0.004;

        counter++;

        counterZ += 0.01;
        counterZ *= Math.floor(Math.random()*3) == 1 ? 1 : -1;
        var newpos = tpos.x ;
        mesh.position.x = tpos.x ;  //to get the triangles to start at a different x, preferable near the sphere
        meshright.position.x  = -tpos.x ;
        //mesh.position.z = pos.z + 50;


        var newTpos = tpos.y/40; // this will get a number between 1 and 99;
        if(mesh.position.z < 0){
            newTpos*-1;
        }else{
            newTpos*1;
        }
        //newTpos *= Math.floor(Math.random()*2) == 1 ? 1 : -1;

        mesh.position.z += newTpos * 0.9  ;
        meshright.position.z -= newTpos * 0.9   ;


        if(newpos>100){
            counterZ = 0;
        }if (newpos > 200) { //and to get the triangles to start again at zero when they have reached their destination
            counter = 0;
        }

        mesh.position.y = tpos.y + Math.floor(Math.random(1,10) );

        meshright.position.y = tpos.y -10 ;

        // mesh.position.z =  Math.floor(Math.random(0,200));

        rotationScalation(sineTime2, sineTime3);
    }


    //einen random wert außerhalb spezifizieren und diesen jedes mal mit dem counter
    // multilpizieren der in der mitte der strecke zwischen
    // den zwei sheres seinen höhepunkt erreicht. somit ist die z ausbreitung am größten wenn

    /*vertices.forEach(function (p){
     var part = new THREE.Vector3(p.x, p.y, p.z);
     part.
     });*/

    dotSystem.rotation.x += 0.0003;
    dotSystem.rotation.y -= 0.0001;

    pos.multiplyScalar(params.scale);

    /*sphere.rotation.x += random(0.001, 0.004);
     sphere.rotation.y += 0.000;
     sphere.rotation.z += 0.004;*/

    requestAnimationFrame(render);
    renderer.render(scene, camera);

    // console.log(cOp);
    /*for(var x = 0; x< shape.length;x++) {
     shape[x].position.z -= 5
     if(

     [x].position.z < -1000) {
     shape[x].position.z = getRandomArbitrary(0,2000)
     }
     }*/
}

function rotationScalation(sineTime2, sineTime) {

    playerOne.sphere.rotation.x += 0.0001;
    playerTwo.sphere.rotation.z += 0.0001;

    PlayerTwoWire.sphere.rotation.z += 0.00001;
    PlayerTwoWire.sphere.rotation.x += 0.00001;
    PlayerTwoWire.sphere.rotation.y += 0.00001;

    PlayerOneWire.sphere.rotation.z += 0.00001;
    PlayerOneWire.sphere.rotation.x += 0.00001;
    PlayerOneWire.sphere.rotation.y += 0.00001;

    var scalevalueOne = sineTime * (sizeone + 0.9)+distance/100;
    var scalevalueTwo = sineTime2 * (sizetwo + 0.9+distance/100 );
    var scalevalueOneWire = scalevalueOne * 1.5;
    var scalevalueTwoWire = scalevalueTwo * 1.5;

    PlayerOneWire.sphere.scale.x = scalevalueOneWire;
    PlayerOneWire.sphere.scale.y = scalevalueOneWire;
    PlayerOneWire.sphere.scale.z = scalevalueOneWire;

    PlayerTwoWire.sphere.scale.x = scalevalueTwoWire;
    PlayerTwoWire.sphere.scale.y = scalevalueTwoWire;
    PlayerTwoWire.sphere.scale.z = scalevalueTwoWire;

    playerOne.sphere.scale.x = scalevalueOne;
    playerOne.sphere.scale.y = scalevalueOne;
    playerOne.sphere.scale.z = scalevalueOne;

    playerTwo.sphere.scale.x = scalevalueTwo;
    playerTwo.sphere.scale.y = scalevalueTwo;
    playerTwo.sphere.scale.z = scalevalueTwo;
}


function createLights() {

    //0xE1FEA4
    var spotlight = new THREE.SpotLight(colors[1]);
    spotlight.castShadow = true;
    spotlight.position.set(15, 30, 60);
    scene.add(keyLight);
    //    var keyLight = new THREE.DirectionalLight(new THREE.Color('hsl(30, 100%, 75%)'), 1.0);new THREE.Color('hsl(240, 100%, 75%)')
    var backLight = new THREE.DirectionalLight(0xffffff, 1.0);
    backLight.position.set(100, 0, -100).normalize();
    var fillLight = new THREE.DirectionalLight(colors[4], 0.75);
    fillLight.position.set(100, 0, 100);
    var keyLight = new THREE.DirectionalLight(colors[4], 1.0);
    keyLight.position.set(-100, 0, 100);
    scene.add(fillLight);




    scene.add(backLight);
}

init();

//objShrimp();
//curves.js();
foggyFrog();
initTumeMat();
trianglesOnLine();
spheresAhead();
sinesPines();
playerSpheres();
trianglesOnLineRight();
cubeCity();
drawDotSystem();
createLights();
//staticTraingles();


//randomStars();
render();


$(document).ready(function(){
        playerOne.onclick = function() {
            alert("clicked!");
        };
});



function onDocumentMouseMove(event){

    event.preventDefault();

    mouseVector.x = 2 * (e.clientX / canvas.width) - 1;
    mouseVector.y = 1 - 2 * ( e.clientY / canvas.height );

    var raycaster = projector.pickingRay( mouseVector.clone(), camera );
    raycaster.setFromCamera( mouse, camera );

    var intersects = raycaster.intersectObjects( playerOne.sphere );

    for( var i = 0; i < intersects.length; i++ ) {
        var intersection = intersects[ i ],
            obj = intersection.object;

        console.log("pressed");
        obj.geometry.position.x += 2000;
    }
}


