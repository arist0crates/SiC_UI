import * as THREE from 'three';
import GLTFLoader from 'three-gltf-loader';

export class Importer{
    static importGLTF(url, scene) {
        // Instantiate a loader
        var loader = new GLTFLoader();
        // Load a glTF resource
        loader.load(
            // resource URL
            url,
            // called when the resource is loaded
            function (gltf) {
                var room = gltf.scene;
                // room.scale.set(30, 30, 30);
                scene.add(room);
            },
            // called while loading is progressing
            function (xhr) {

                console.log((xhr.loaded / xhr.total * 100) + '% loaded');

            },
            // called when loading has errors
            function (error) {

                console.log('An error happened');

            }
        );
    }

    static importJSON(URL){
        var loader = new THREE.ObjectLoader();

        var scene = new THREE.Scene();

        loader.load(
            // resource URL
            URL,

            // onLoad callback
            // Here the loaded data is assumed to be an object
            function ( obj ) {
                // Add the loaded object to the scene
                scene.add( obj );
            },

            // onProgress callback
            function ( xhr ) {
                console.log( (xhr.loaded / xhr.total * 100) + '% loaded' );
            },

            // onError callback
            function ( err ) {
                console.error( 'An error happened' );
            }
        );

        return scene;
    }
}
