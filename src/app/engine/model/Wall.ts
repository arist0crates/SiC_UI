import * as THREE from 'three';
import { EngineService } from "../engine.service";
import { ObjectController } from '../ObjectController';

export class Wall{
    public content : THREE.Group;
    public controller : ObjectController;

    private mesh;

    constructor(World : EngineService){
        var wall = new THREE.Group();
        var wallModel = new THREE.BoxBufferGeometry( 360, 15, 200);

        var loader = new THREE.TextureLoader();
        var woodTexture = loader.load( '../../../assets/textures/madeira.jpeg' );
        woodTexture.wrapS = THREE.RepeatWrapping;
        woodTexture.repeat.set( 3, 1 );
        woodTexture.anisotropy = 16;
        var wallMat = new THREE.MeshLambertMaterial({ map: woodTexture });

        this.mesh = new THREE.Mesh( wallModel, wallMat );
        this.mesh.position.x = - 125;
        this.mesh.position.y = -55;
        this.mesh.position.z = 100;
        this.mesh.rotateZ(THREE.Math.degToRad (90));
        this.mesh.receiveShadow = true;
        this.mesh.castShadow = true;

        wall.add(this.mesh);

        this.controller = new ObjectController (wall, World.camera,
            World.cameraControls, World.renderer, World.render);
        
        World.scene.add(this.controller.control);

        this.content = wall;
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