function objShrimp(){
    var loader = new THREE.OBJLoader();

    //loader.setMaterials(cubeMaterial);

    loader.load = ("Objs/Shrimp.obj" , function(object){

            mesh.traverse(function(node) {
                if (node instanceof THREE.Mesh) {
                    node.castShadow = true;
                    node.receiveShadow = true;
                }

            });
            scene.add(object);
            object.position(5,5,5);
            object.position.y -= 60;

        }, function (error){
            console.log("an error occurred");
        }
    );
}




function wanderingLights(){

    let sum;
    for(var y = 0; y<playerOnePoints.length; y++){
        sum += playerOnePoints[y] + playerTwoPoints[y];

    }

    for(var i = 0; 0<sum; i++){
        material = new THREE.MeshPhongMaterial({
            color: new THREE.Color('#fff'),
            emissive: new THREE.Color('#35bad8'),
            shininess: 10,
            shading: THREE.FlatShading
        });

        if(x%2 == 0){
            material.emissive = new THREE.Color('#fc6bcf');
        }
    }
}


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
/**
 * Created by Irina on 03/06/2018.
 */
