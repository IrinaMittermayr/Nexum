/**
 * Created by Irina on 03/06/2018.
 */

function sineCurve(amplitude, length, rotation, frequency){

    CustomSinCurve.prototype = Object.create( THREE.Curve.prototype );
    CustomSinCurve.prototype.constructor = CustomSinCurve;
    CustomSinCurve.prototype.getPoint = function ( t ) {

        var tx = t * 3 - 1.5;
        var ty = amplitude*Math.sin( frequency * Math.PI * t );
        var tz = 0;

        return new THREE.Vector3( tx, ty, tz ).multiplyScalar( this.scale );

    };

    let params = {

        scale: 25,
        extrusionSegments: 400,
        radiusSegments: 9,
        closed: true,
        animationView: false,
        lookAhead: false,
        cameraHelper: false,
    };

    var path = new CustomSinCurve( length );
    tubegeometry = new THREE.TubeBufferGeometry( path, params.extrusionSegments, 2, params.radiusSegments, params.closed);
    let tubematerial = new THREE.MeshPhongMaterial( {
        color: colors[2] ,
        transparent : true,
        opacity: 0.3,
        shading    :  THREE.flatShading,
        receiveFog: false,
        receiveShadow: false,
        shininess  : colors[2],
        shininess  :  10,
    } );

    var mesh = new THREE.Mesh( tubegeometry, tubematerial );
    mesh.rotation.x = rotation;

    return mesh
}