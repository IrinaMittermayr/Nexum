
var scene, camera, renderer, sphere, sphere2, torus, torus2;

var t = THREE;
camera =  camera = new t.PerspectiveCamera(105,window.innerWidth/window.innerHeight, 1,5000);
scene = new t.Scene();
var shape = [];

function init () {



    camera.position.z = 2000;


    renderer = new t.WebGLRenderer({alpha:true});
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.setClearColor( 0xffffff, 0);
    renderer.shadowMapSoft = true;
    renderer.autoClear = false;
    document.body.appendChild(renderer.domElement);

    window.addEventListener("resize", function (argument) {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize( window.innerWidth, window.innerHeight );
    })

    var  controls = new THREE.OrbitControls( camera );
}


let playerOne;
let playerTwo;
//
// function PlayerSPhere(posx,posy,posz,scale) {
//
//
//     this.sphereMaterial = new THREE.MeshPhongMaterial({
//         color: new THREE.Color("#fff"),
//         emissive: new THREE.Color("#3c0752"),
//         shininess: new THREE.Color("#fc6bcf"),
//         shininess: 10,
//         shading: THREE.FlatShading,
//         transparent: 1,
//         opacity: 1,
//         side: THREE.DoubleSide
//
//
//     });
//
//     this.sphereGeometry = new THREE.DodecahedronGeometry( 10, 1);
//     this.sphereGeometry.side = THREE.DoubleSide;
//     this.sphere = new THREE.Mesh(this.sphereGeometry, this.sphereMaterial);
//
//     this.sphere.position.x = posx;
//     this.sphere.position.y = posy;
//     this.sphere.position.z = posz;
//
//     this.sphere.scale.x = scale;
//     this.sphere.scale.y = scale;
//     this.sphere.scale.z = scale;
//
// }


function tryout(){

    playerOne = new PlayerSPhere(5,-300,0,0);
    scene.add(playerOne.sphere);
    playerTwo = new PlayerSPhere(3,300,0,0);
    scene.add(playerTwo.sphere);


    PlayerOneWire = new PlayerSPhere(5, -300,0,0);
    PlayerTwoWire = new PlayerSPhere(5,300,0,0);

    var mat = new THREE.LineBasicMaterial( { color: 0xffffff, linewidth: 20 } );
     var wireframe = new THREE.LineSegments( PlayerOneWire.sphereGeometry, mat );
     var wireframe2 = new THREE.LineSegments( PlayerOneWire.sphereGeometry, mat );

    PlayerOneWire.sphere.add(wireframe);
     PlayerTwoWire.sphere.add(wireframe2);


    scene.add(PlayerOneWire.sphere);
    scene.add(PlayerTwoWire.sphere);
}


//
// function playerSpheres(){
//
//     playerOne = new PlayerSPhere(5,-300,0,0);
//     scene.add(playerOne.sphere);
//     playerTwo = new PlayerSPhere(3,300,0,0);
//     scene.add(playerTwo.sphere);
//
//     PlayerOneWire = new PlayerSPhere(5, -300,0,0);
//     PlayerTwoWire = new PlayerSPhere(5,300,0,0);
//
//     var mat = new THREE.LineBasicMaterial( { color: 0xffffff, linewidth: 20 } );
//     var wireframe = new THREE.LineSegments( PlayerOneWire.sphereGeometry, mat );
//     var wireframe2 = new THREE.LineSegments( PlayerOneWire.sphereGeometry, mat );
//
//     PlayerOneWire.sphere.add(wireframe);
//     PlayerTwoWire.sphere.add(wireframe2);
//
//     PlayerOneWire.sphereMaterial.wireframe = true;
//     PlayerOneWire.sphereMaterial.color = "0xffffff" +
//         "";
//
//     PlayerTwoWire.sphereMaterial.flatShading = false;
//     PlayerTwoWire.sphereMaterial.wireframe = true;
//
//
//     scene.add(PlayerOneWire.sphere);
//     scene.add(PlayerTwoWire.sphere);
// }







function createObj() {

    var sphereMaterial = new THREE.MeshPhongMaterial({
        color      : new THREE.Color("#fff"),
        emissive   : new THREE.Color("#3c0752"),
        shininess  : new THREE.Color("#fc6bcf"),
        shininess  :  10,
        shading    :  THREE.FlatShading,
        transparent: 1,
        opacity    : 1,
        side 	   : THREE.DoubleSide
    });

    var geometry = new THREE.DodecahedronGeometry( 500, 1);
    sphere = new THREE.Mesh( geometry, sphereMaterial );
    sphere.receiveShadow = true;
    sphere.castShadow = true;
    scene.add(sphere );

    var sphereMaterial2 = new THREE.MeshPhongMaterial({
        color      : new THREE.Color("#fff"),
        emissive   : new THREE.Color("#fc6bcf"),
        shininess  : new THREE.Color("#fff"),
        shininess  :  10,
        shading    :  THREE.SmoothShading,
        transparent: 1,
        opacity    : 1,
        wireframe: true
    });

    var geometry2 = new THREE.DodecahedronGeometry( 650, 1);
    sphere2 = new THREE.Mesh( geometry2, sphereMaterial2 );
    sphere2.receiveShadow = true;
    sphere2.castShadow = true;
    // scene.add( sphere2 );

    var torusMaterial = new THREE.MeshPhongMaterial({
        color      : new THREE.Color("#fff"),
        emissive   : new THREE.Color("#fc6bcf"),
        shininess  : new THREE.Color("#fff"),
        shininess  :  10,
        shading    :  THREE.FlatShading,
        transparent: 1,
        opacity    : 1,
        wireframe	: true
    });

    var geometry3 = new THREE.TorusGeometry( 580, 100, 5, 40 );
    torus = new THREE.Mesh( geometry3, torusMaterial );
    torus.receiveShadow = true;
    torus.castShadow = true;
    scene.add( torus );


    var torusM = new THREE.MeshPhongMaterial({
        color      : new THREE.Color("#fff"),
        emissive   : new THREE.Color("#c256c3"),
        shininess  : new THREE.Color("#fff"),
        shininess  :  10,
        shading    :  THREE.FlatShading,
        transparent: 1,
        opacity    : 1,
        wireframe	: true
    });

    var geometry4 = new THREE.TorusGeometry( 580, 80, 5, 40 );
    torus2 = new THREE.Mesh( geometry4, torusM);
    torus2.receiveShadow = true;
    torus2.castShadow = true;
    scene.add( torus2 );
}

function render() {
    requestAnimationFrame(render);
    renderer.render(scene, camera);

    
    var time = Date.now();
    var looptime = 20 * 1000;
    var t = ( time % looptime ) / looptime;
    var t2 = ( time % (looptime-200) ) / looptime;//get time at a differend time
    var pos = tubegeometry.parameters.path.getPointAt( t );
    var pos2 = tubegeometry.parameters.path.getPointAt( t2 ); //position at a different time
    var timer = 0.00001 * time;
    var mesh = triangles[Math.floor(Math.random(20,50))].mesh; //get a randim mesh of the particle system

    mesh.position.x = pos.x-40;
    mesh.position.y = pos.y+30;
    mesh.position.z = -0.5;
    mesh.position.divideScalar(90 + (Math.random() * 50));


    var counter;

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

    cube.position.x = pos.x;
    cube.position.y = pos.y;
    cube2.position.x = pos.x;
    cube2.position.y = pos.y;


    sphere2.rotation.y += 0.002
    sphere2.rotation.x += 0.002
    sphere2.rotation.z += 0.002

    // sphere.rotation.y += 0.002
    // sphere.rotation.x += 0.002
    // sphere.rotation.z += 0.002

    torus.rotation.y += 0.05
    torus.rotation.x += 0.01
    torus.rotation.z += 0.05

    torus2.rotation.y += 0.01
    torus2.rotation.x += 0.05
    torus2.rotation.z += 0.01

    for(var x = 0; x< shape.length;x++) {
        shape[x].position.z -= 5

        if(shape[x].position.z < -1000) {
            shape[x].position.z = getRandomArbitrary(0,2000)
        }
    }
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

// function randomStars() {
//     var material;
//
//     var rs = [];
//
//     var pos = {
//         x : 0,
//         y : 0,
//         z : 0
//     }
//     var color = "#fc6bcf";
//
//     for(var x = 0; x < 200; x++) {
//         material = new THREE.MeshPhongMaterial({
//             color      : new THREE.Color("#fff"),
//             emissive   : new THREE.Color("#35bad8"),
//             shininess  : new THREE.Color("#fff"),
//             shininess  :  100,
//             shading    :  THREE.FlatShading,
//         });
//         if(x %2 == 0) {
//             material.emissive = new THREE.Color(color);
//         }
//
//         pos.x = getRandomArbitrary(-(window.innerWidth+500),window.innerWidth+500);
//         pos.y = getRandomArbitrary(-(window.innerHeight+1000),window.innerHeight+1000);
//         pos.z = getRandomArbitrary(-1000,2000);
//
//         rs[x] = new THREE.TetrahedronGeometry(getRandomArbitrary(2,20),1);
//         shape[x] = new THREE.Mesh(rs[x], material);
//         shape[x].castShadow = true;
//         shape[x].position.set(pos.x,pos.y,pos.z);
//         scene.add(shape[x])
//     }
// }




let sine1;
let tubematerial;
let params;

function initTumeMat(){

    sine1 = sineCurve(1, 200, .6  ,1 );
    scene.add(sine1);




    tubematerial = new THREE.MeshBasicMaterial( { color: 0x00ff00 , transparent : true, opacity: 0.1} );
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
}



let PlayerOneWire;
let PlayerTwoWire;




let spheres = [];

function spheresAhead(){


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

}



let cube;
let cube2;
let cube3;

function cubeCity(){


    var cubegeo = new THREE.BoxGeometry(40,40,40);
    cube = new THREE.Mesh(cubegeo, tubematerial);
    scene.add(cube);

    var cubegeo2 = new THREE.BoxGeometry(10,10,10);
    cube2 = new THREE.Mesh(cubegeo2, tubematerial);
    cube.add(cube2);

    var cubegeo3 = new THREE.BoxGeometry(20,20,20);
    cube3 = new THREE.Mesh(cubegeo3, tubematerial);
    cube3.position.x += 200;
    cube2.add(cube3);
}



let triangles = []; //TRIANGLES


function trianglesOnLine(){

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
}




function CustomSinCurve( scale ) {

    THREE.Curve.call( this );

    this.scale = ( scale === undefined ) ? 1 : scale;

}

let sines = [];


function sinesPines(){



    for(let u = 0; u<16; u++){

        var rotation =  (Math.random() * (1 - (-1)) -1);

        sines.push(sineCurve(Math.random(0.2, 0.4), 200, rotation, 6));
        scene.add(sines[u]);

    }
}





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

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

init();
createObj();
initTumeMat();
sinesPines();
cubeCity();
spheresAhead();
trianglesOnLine();
createLights();
drawDotSystem();
//randomStars();
tryout();

render();
/**
 * Created by Irina on 06/06/2018.
 */
