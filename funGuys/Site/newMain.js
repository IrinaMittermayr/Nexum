/**
 * Created by Irina on 05/06/2018.
 */



let pathDeviationx = 30;
let pathdeviationy = -30;

let playerTwoPoints = [];
let playerOnePoints = [];



let workervar;




let scene = new THREE.Scene();
let shape = [];

let canvas =   document.getElementById("webgl-container");
let camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 5000);
let renderer = new THREE.WebGLRenderer({antialias: true});

var controls = new THREE.OrbitControls( camera, renderer.domElement );
let tOp = 0.1;
let cOp= 0;

let calcArray = [];

function init () {

    //0x1b1b6d blaus
//0xffe4e1 rosa
    //renderer

    renderer.shadowMapEnabled = true;
    renderer.shadowMapSoft = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.setClearColor(0x1b1b6d); //background colot
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
        renderer.setSize( window.innerWidth, window.innerHeight );
    });

    var guicontrols = new function(){
        this.rotationX = 0.01;
        this.rotationY = 0.01;
        this.rotationZ = 0.01;
    };

    var datGui = new dat.GUI();
    datGui.add(guicontrols, 'rotationX', 0,1);
    datGui.add(guicontrols, 'rotationY', 0,1);
    datGui.add(guicontrols, 'rotationZ', 0,1);

    //axis and grid
    var axis = new THREE.AxisHelper(10);
    var grid = new THREE.GridHelper(50,5, 0x000000);
    var color = new THREE.Color("rbg(240,0,0)");

    //get quiz variables

}






let spheres = [];

for(var i = 0; i<30; i++){

    let cursphere = new Sphere(Math.random(0 ,500)*i*10, Math.random(0,500)*i*10, Math.random(0,500)*i*10, 0.5);
    spheres.push(cursphere);
    cursphere.setOpacity(Math.random(0.01, 0.4));

    /*let intersectionPart = cursphere.sphere.intersect(cursphere.core);

     let meshIntersection = intersection.toMesh(particleMaterial);

     scene.add(meshIntersection);*/
    scene.add(cursphere.sphere);
    //scene.add(cursphere.core);


}

function CustomSinCurve( scale ) {

    THREE.Curve.call( this );

    this.scale = ( scale === undefined ) ? 1 : scale;

}



let sine1 = sineCurve(0.6, 200, .6  , 12 );
let sine2 = sineCurve(0.6, 200, -.6 , 12 );

scene.add(sine1, sine2);


let sines = [];
for(let u = 0; u<14; u++){

    var rotation =  (Math.random() * (1 - (-1)) -1);

    sines.push(sineCurve(Math.random(0.2, 0.4), 200, rotation, 6));
    scene.add(sines[u]);

}

let tubematerial = new THREE.MeshBasicMaterial( { color: 0x00ff00 , transparent : true, opacity: 0.1} );
params = {
    spline: 'GrannyKnot',
    scale: 40,
    extrusionSegments: 100,
    radiusSegments: 5,
    closed: true,
    animationView: false,
    lookAhead: false,
    cameraHelper: false,
    side: THREE.DoubleSide
};


/*let spherecur = new Sphere(100,100,100);

 let colors = [];
 for(var k = 0; k<spherecur.sphereGeometry.vertices.length; k++ ){
 colors[k] = new THREE.Color();
 colors[k].setHSL(Math.random(0.2,0.8), 1, 0.5);
 }*/

let triangles = []; //TRIANGLES

for(let u = 0; u< playertwopointsarray.length*8; u++){


    partcur = new Particle(4, 0xffffff);
    triangles.push(partcur);
    let mesh = triangles[u].mesh;
    //mesh.position.set(Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5).normalize(); // for equal distribution of the triangles
    mesh.position.set(Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5).normalize();

    mesh.position.multiplyScalar(90 + (Math.random() * 700));
    //mesh.rotation.set(Math.random() * 2, Math.random() * 2,)
    scene.add(mesh);
}

let particleMaterial = new THREE.ParticleBasicMaterial({
    size: 0.5,
    transparent: true,
    opacity: 0.7,
    vertexColors: true
});



//PLayers and Wireframes



//var sizeOfPlayerOne = playerOnePoints[2]+ playerOnePoints[4] - playerOnePoints[8] - playerOnePoints[12];
//var sizeOfPlayerTwo = playerTwoPoints[2]+ playerTwoPoints[4] - playerTwoPoints[8] - playerTwoPoints[12];

let playerOne = new PlayerSPhere(5,-300,0,0);
scene.add(playerOne.sphere);
let playerTwo = new PlayerSPhere(3,300,0,0);
scene.add(playerTwo.sphere);

let PlayerOneWire = new PlayerSPhere(5, -300,0,0);
let PlayerTwoWire = new PlayerSPhere(5,300,0,0);

var mat = new THREE.LineBasicMaterial( { color: 0xffffff, linewidth: 20 } );
var wireframe = new THREE.LineSegments( PlayerOneWire.sphereGeometry, mat );
var wireframe2 = new THREE.LineSegments( PlayerOneWire.sphereGeometry, mat );

PlayerOneWire.sphere.add(wireframe);
PlayerTwoWire.sphere.add(wireframe2);

PlayerOneWire.sphereMaterial.wireframe = true;
PlayerOneWire.sphereMaterial.color = "0xffffff" +
    "";

PlayerTwoWire.sphereMaterial.flatShading = false;
PlayerTwoWire.sphereMaterial.wireframe = true;


scene.add(PlayerOneWire.sphere);
scene.add(PlayerTwoWire.sphere);






//var vertices =  sphereTest.geometry.vertices;


var cubegeo = new THREE.BoxGeometry(40,40,40);
var cube = new THREE.Mesh(cubegeo, tubematerial);
scene.add(cube);

var cubegeo2 = new THREE.BoxGeometry(10,10,10);
var cube2 = new THREE.Mesh(cubegeo2, tubematerial);
cube.add(cube2);

var cubegeo3 = new THREE.BoxGeometry(20,20,20);
var cube3 = new THREE.Mesh(cubegeo3, tubematerial);
cube3.position.x += 200;
cube2.add(cube3);



//spherecur.sphere.position.x = 2;


/*let sphereMaterial2 = new THREE.MeshPhongMaterial({
 color      : new THREE.Color("#fff"),
 emissive   : new THREE.Color("#fc6bcf"),
 shininess  : new THREE.Color("#fff"),
 shininess  :  10,
 shading    :  THREE.SmoothShading,
 transparent: 1,
 opacity    : 1,
 wireframe: true
 });

 let sphereTest = new THREE.ParticleSystem(spherecur.sphereGeometry, particleMaterial);

 scene.add(spherecur.sphere);
 spherecur.sphereGeometry.color = colors;
 scene.add(sphereTest);//


 //var torusMaterial = new THREE.MeshNormalMaterial();
 // var torusMaterial = new THREE.ParticleBasicMaterial({size: 0.1, color: "blue"});

 //var torus = new THREE.Mesh(torusGeometry, torusMaterial);
 */

function drawDotSystem() {
    dotSystem = new THREE.Group();
    scene.add(dotSystem);

    const system1 = new DotSystem({
        intensity: 3000,
        color: 0xE1FEA4,
        xSpread: 800,
        ySpread: 800,
        zSpread: 800,
    });

    dotSystem.add(system1.group);

    const system2 = new DotSystem({
        intensity: 100,
        color: 0xFF007B,
        xSpread: 300,
        ySpread: 500,
        zSpread: 400,
        size: 13,
    });


    system2.group.position.set(-100, -80, 0);
    dotSystem.add(system2.group);
}


function render(){


    /*if(Math.random(0,1)<0.05){//if random is randomly under 0.05 then change tOp
     tOp = Math.random(0.1, 1);
     }
     //else change the
     cOp += (tOp-cOp)/15;*/


    var time = Date.now();
    var looptime = 20 * 1000;
    var t = ( time % looptime ) / looptime;
    var t2 = ( time % (looptime-200) ) / looptime;//get time at a differend time

    var pos = tubegeometry.parameters.path.getPointAt( t );
    var pos2 = tubegeometry.parameters.path.getPointAt( t2 ); //position at a different time

    var timer = 0.00001 * time;

    //spheres[4].sphere.add(spheres[1].sphere);


    var mesh = triangles[Math.floor(Math.random(20,50))].mesh; //get a randim mesh of the particle system
    mesh.position.x = pos.x-40;
    mesh.position.y = pos.y+30;
    mesh.position.z = -0.5;
    mesh.position.divideScalar(90 + (Math.random() * 50));

    cube.position.x = pos.x;
    cube.position.y = pos.y;
    cube2.position.x = pos.x;
    cube2.position.y = pos.y;

    var counter = 0;

    for (var i = 0; i < 50; i++) { //animate all spheres and some triangles


        let sineTime = 400 * Math.sin(timer + i);
        let sineTime2 = 3 * Math.sin(timer*20 + i*22);
        let sineTime3 = 3 * Math.sin(timer*10 + i*22);

        if(i< spheres.length){
            var sfere = spheres[i].sphere;

            sfere.position.x = sineTime;
            // sfere.position.z= 500 * Math.sin( timer + i * 1.1 );
            sfere.position.z = 400 * Math.sin(timer + i * 1.1);
            sfere.rotation.x += 0.004;

        }

        tcur = ((time + i*100 ) % (looptime-i*Math.floor(Math.random(0,10))) ) / looptime; //get the position at current and i
        tpos = tubegeometry.parameters.path.getPointAt(tcur);

        var mesh = triangles[i].mesh; //the triangles
        //mesh.rotation.x += 0.004;
        counter++;
        mesh.position.x = tpos.x + counter*5;


        if(tpos.x + counter*5 > 200){
            counter = 0;
        }

        mesh.position.y = tpos.y + Math.floor(Math.random(0,10));
        // mesh.position.z =  Math.floor(Math.random(0,200));

        cube3.position.x = pos.x;
        cube3.position.y = pos.y;

        rotationScalation(sineTime2, sineTime3);
    }


    /*vertices.forEach(function (p){
     var part = new THREE.Vector3(p.x, p.y, p.z);
     part.
     });*/



    pos.multiplyScalar( params.scale );

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

function rotationScalation(sineTime2, sineTime){

    playerOne.sphere.rotation.x += 0.0004;
    playerTwo.sphere.rotation.z += 0.0004;

    PlayerTwoWire.sphere.rotation.z += 0.0001;
    PlayerTwoWire.sphere.rotation.x += 0.0001;
    PlayerTwoWire.sphere.rotation.y += 0.0001;

    PlayerOneWire.sphere.rotation.z += 0.0001;
    PlayerOneWire.sphere.rotation.x += 0.0001;
    PlayerOneWire.sphere.rotation.y += 0.0001;

    var scalevalueOne = sineTime * (sizeone+0.7);
    var scalevalueTwo = sineTime2 * (sizeone+0.7);
    var scalevalueOneWire = sineTime * (sizeone+2.7);
    var scalevalueTwoWire = sineTime2 * (sizeone+2.7);

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


function createLights(){


    var spotlight = new THREE.SpotLight(0xE1FEA4);
    spotlight.castShadow = true;
    spotlight.position.set(15,30,60);

    var keyLight = new THREE.DirectionalLight(new THREE.Color('hsl(30, 100%, 75%)'), 1.0);
    keyLight.position.set(-100, 0, 100);

    var fillLight = new THREE.DirectionalLight(new THREE.Color('hsl(240, 100%, 75%)'), 0.75);
    fillLight.position.set(100, 0, 100);

    var backLight = new THREE.DirectionalLight(0xffffff, 1.0);
    backLight.position.set(100, 0, -100).normalize();

    scene.add(keyLight);
    scene.add(fillLight);
    scene.add(backLight);

}

init();

//objShrimp();
//curves.js();
drawDotSystem();
createLights();
//randomStars();
render();


