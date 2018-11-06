
/**
 * Created by Irina on 06/05/2018.
 */

class Particle{

    constructor(size, color){

        this.partGeometry = new THREE.TetrahedronGeometry(size, 0);

         this.material = new THREE.MeshPhongMaterial({
             color      : colors[3],
             emissive   : colors[3],
             shininess  : colors[3],
             shininess: 10,
             shading: THREE.FlatShading,
             transparent: 1,
             opacity    : 1,

         });

        this.partGeometry.side = THREE.DoubleSide;
        this.mesh = new THREE.Mesh(this.partGeometry, this.material);
        this.mesh.position.set(Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5).normalize();
        this.mesh.position.multiplyScalar(90 + (Math.random() * 700));
    }
}