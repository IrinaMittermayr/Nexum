/**
 * Created by Irina on 07/05/2018.
 */

class DotSystem {
    constructor({
        intensity = 5000,
        color = 0xffffff,
        xSpread = 1000,
        ySpread = 1000,
        zSpread = 1000,
        size = 2,
    })

    {
        this.group = new THREE.Group();
        this.xSpread = xSpread;
        this.ySpread = ySpread;
        this.zSpread = zSpread;
        this.intensity = intensity;
        this.color = color;
        this.size = size;
        this.draw();
    }

    draw() {
        const geometry = new THREE.Geometry();
        const colors = [];
        const loader = new THREE.TextureLoader();
        loader.crossOrigin = false;
        // loader.load('https://res.cloudinary.com/dta92sz5c/image/upload/v1494500813/dot_g4pvyu.svg'

        loader.load('Quiz/Asset_3.png', (texture) => {
            for (let i = 0; i < this.intensity; i += 1) {
                const spreadVector = new THREE.Vector3();
                spreadVector.x = THREE.Math.randFloatSpread(this.xSpread);
                spreadVector.y = THREE.Math.randFloatSpread(this.ySpread);
                spreadVector.z = THREE.Math.randFloatSpread(this.zSpread);
                geometry.vertices.push(spreadVector);
                colors[i] = new THREE.Color(this.color);
            }
            geometry.colors = colors;

            const material = new THREE.PointsMaterial({
                size: this.size,
                map: texture,
                vertexColors: THREE.VertexColors,
                alphaTest: 0.5,
                transparent: true,
                opacity: 0.8

            });

            const particles = new THREE.Points(geometry, material);
            this.group.add(particles);
        });
    }
}