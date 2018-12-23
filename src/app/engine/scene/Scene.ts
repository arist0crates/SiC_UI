import * as THREE from 'three';

export class Scene{
    static createScene() : THREE.Scene {
        var scene = new THREE.Scene();
        scene.background = new THREE.Color( 0xcce0ff );
        scene.fog = new THREE.Fog( 0xcce0ff, 500, 10000 );
        
        return scene;
    }
}