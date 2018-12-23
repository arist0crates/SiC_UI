import * as THREE from 'three';
import { ObjectController } from '../ObjectController';
import { EngineService } from '../engine.service';

export class Shelf{
    public content : THREE.Group;
    public controller : ObjectController;

    private mesh;

    constructor(World : EngineService){     
        //SHELF
        var shelf = new THREE.Group();
        var shelveModel = new THREE.BoxBufferGeometry( 305, 15, 200);

        var loader = new THREE.TextureLoader();
        var woodTexture = loader.load( '../../../assets/textures/madeira.jpeg' );
        woodTexture.wrapS = THREE.RepeatWrapping;
        woodTexture.repeat.set( 3, 1 );
        woodTexture.anisotropy = 16;
        var shelveMat = new THREE.MeshLambertMaterial({ map: woodTexture  });

        this.mesh = new THREE.Mesh( shelveModel, shelveMat );
        this.mesh.position.x = - 125;
        this.mesh.position.y = 1;
        this.mesh.position.z = 100;
        this.mesh.receiveShadow = true;
        this.mesh.castShadow = true;

        this.controller = new ObjectController (shelf, World.camera,
            World.cameraControls, World.renderer, World.render);
            
        World.scene.add(this.controller.control);

        this.content = shelf;
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