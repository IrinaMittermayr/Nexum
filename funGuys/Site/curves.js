
function curves(){

    let ran = Math.random()*2;

    let curve = new THREE.CubicBezierCurve3(
        new THREE.Vector3( Math.random()*-10*2, 0, 0 ),
        new THREE.Vector3( ran*-5, 15, 0 ),
        new THREE.Vector3( 20, ran*15, 0 ),
        new THREE.Vector3( 10, 0, 4 )
    );


    let curve2 = new THREE.CubicBezierCurve3(
        new THREE.Vector3( 10, 0, 4 ),
        new THREE.Vector3( -5, ran*2, 10 ),
        new THREE.Vector3( 20, ran*15, 10 ),
        new THREE.Vector3( 2, ran*15, 14 )

    )

    var points2 = curve2.getPoints( 900 );
    var geometry2 = new THREE.BufferGeometry().setFromPoints( points2 );
    var material2 = new THREE.LineBasicMaterial( { color : 0xfc6bcf } );
    var curveObject2 = new THREE.Line( geometry2, material2 );
    scene.add(curveObject2);
    
    var points = curve.getPoints( 900 );
    var geometry = new THREE.BufferGeometry().setFromPoints( points );
    var material = new THREE.LineBasicMaterial( { color : 0xff0000 } );
    var curveObject = new THREE.Line( geometry, material );

    scene.add(curveObject);
    
}
