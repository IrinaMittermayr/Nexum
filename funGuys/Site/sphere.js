
/**
 * Created by Irina on 03/05/2018.
 */
class Sphere{

    constructor(posx, posy, posz, scale){

        this.sphereMaterial = new THREE.MeshPhongMaterial({
            color      : new THREE.Color("#fff"),
            emissive   : colors[6],
            shininess  : colors[7],
            shininess  :  10,
            shading    :  THREE.FlatShading,
            transparent: true,
            opacity    : 0.1,
            side 	   : THREE.DoubleSide
        });

        this.sphereGeometry = new THREE.DodecahedronGeometry( 10, 1);
        this.sphere = new THREE.Mesh(this.sphereGeometry, this.sphereMaterial);

        this.sphere.position.x = posx;
        this.sphere.position.y = posy;
        this.sphere.position.z = posz;

        this.sphere.scale.x = scale;
        this.sphere.scale.y = scale;
        this.sphere.scale.z = scale;

        this.pathDeviationx = Math.random(0,100);
        this.pathDeviationy = Math.random(0,100);

        //core
        this.coreMaterial = new THREE.MeshPhongMaterial({

            color : new THREE.Color("#fff"),
            emissive   : new THREE.Color("#3c0752"),


            shading    :  THREE.FlatShading,
            transparent: true,
            opacity    : 0.8,
            side 	   : THREE.DoubleSide
        });

        this.coreGeometry = new THREE.BoxGeometry(50,5,2);
        this.core = new THREE.Mesh(this.coreGeometry, this.coreMaterial);

        this.core.position.x = posx;
        this.core.position.y = posy;
        this.core.position.z = posz;
    }




    setOpacity (opacity){
        this.sphereMaterial.opacity = opacity;
    }

    getSphere(){

        return this.sphere;

    }

    getsphereMaterial(){

        return this.sphereMaterial;

    }

    getsphereGeometry(){

        return this.sphereGeometry;

    }

}

