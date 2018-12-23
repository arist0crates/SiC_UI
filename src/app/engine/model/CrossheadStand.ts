import * as THREE from 'three';
import { EngineService } from "../engine.service";
import { ObjectController } from '../ObjectController';

export class CrossheadStand{
    public content : THREE.Group;
    public controller : ObjectController;

    private mesh;

    constructor(World : EngineService){
        var crosshead = new THREE.Group();
        var crossheadstand = new THREE.CylinderGeometry( 5, 5, 300, 32 );

        var loader = new THREE.TextureLoader();
        var plasticTexture = loader.load( '../../../assets/textures/plastico.jpg' );
        plasticTexture.wrapS = THREE.RepeatWrapping;
        plasticTexture.repeat.set( 3, 1 );
        plasticTexture.anisotropy = 16;

        var crossheadstandMat = new THREE.MeshLambertMaterial({ map: plasticTexture });
        this.mesh = new THREE.Mesh( crossheadstand, crossheadstandMat );
        this.mesh.position.x = - 125;
        this.mesh.position.y = 50;
        this.mesh.position.z = 125;
        this.mesh.rotation.z = Math.PI / 2;
        this.mesh.receiveShadow = true;
        this.mesh.castShadow = true;

        this.controller = new ObjectController (crosshead, World.camera,
            World.cameraControls, World.renderer, World.render);

        World.scene.add(this.controller.control);

        this.content = crosshead;
    }

    replaceTexture(newTexture){
        this.mesh.material.map = THREE.ImageUtils.loadTexture( newTexture );
        this.mesh.material.needsUpdate = true;
    }

    toggleControls(){
        this.controller.control.enabled = !this.controller.control.enabled;
        this.controller.control.visible = !this.controller.control.visible;
    }
}