import * as THREE from 'three';
import { ObjectController } from '../ObjectController';
import { EngineService } from '../engine.service';

export class Drawer{
    public content : THREE.Group;
    public controller : ObjectController;

    private mesh;

    constructor(World : EngineService){
        var drawer = new THREE.Group();
        var loader = new THREE.TextureLoader();
        var woodTexture = loader.load( '../../../assets/textures/madeira.jpeg' );
        woodTexture.wrapS = THREE.RepeatWrapping;
        woodTexture.repeat.set( 3, 1 );
        woodTexture.anisotropy = 16;

        var drawerModel = new THREE.BoxBufferGeometry( 300, 100, 200);
        var drawerMat = new THREE.MeshLambertMaterial({ map: woodTexture });
        this.mesh = new THREE.Mesh( drawerModel, drawerMat );
        this.mesh.position.x = - 125;
        this.mesh.position.y = -200;
        this.mesh.position.z = 100;
        this.mesh.receiveShadow = true;
        this.mesh.castShadow = true;

        drawer.add(this.mesh);

        var handleModel = new THREE.CylinderGeometry( 5, 5, 20, 32 );
        var handelMat = new THREE.MeshBasicMaterial( {color: 0xffff00} );
        var cylinder = new THREE.Mesh( handleModel, handelMat );	
        cylinder.position.x = - 125;
        cylinder.position.y = -200;
        cylinder.position.z = 200;
        cylinder.receiveShadow = true;
        cylinder.castShadow = true;
        drawer.add(cylinder);
        
        this.controller = new ObjectController (drawer, World.camera,
            World.cameraControls, World.renderer, World.render);
        
        World.scene.add(this.controller.control);

        this.content = drawer;
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