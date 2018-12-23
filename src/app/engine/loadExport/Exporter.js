import * as THREE from 'three';
import * as GLTFExporter from 'three-gltf-exporter';

export class Exporter{
    static exportToJSON(scene) {
        var output = scene.toJSON();
    
        try{
            output = JSON.stringify( output, parseNumber, '\t' );
            output = output.replace( /[\n\t]+([\d\.e\-\[\]]+)/g, '$1' );
        } catch ( e ) {
            output = JSON.stringify( output );
        }
        saveString( output, 'scene.json' );
    }
    
    static exportToGLTF(scene){
        var exporter = new GLTFExporter();
    
        exporter.parse( scene, function ( result ) {
    
            saveString( JSON.stringify( result, null, 2 ), 'scene.gltf' );
    
        }, null );
    }

    
}

function saveString( text, filename ) {

    save( new Blob( [ text ], { type: 'text/plain' } ), filename );

}

function save( blob, filename ) {
    var link = document.createElement( 'a' );
    link.style.display = 'none';
    document.body.appendChild( link ); // Firefox workaround, see #6594
    
    link.href = URL.createObjectURL( blob );
    link.download = filename || 'data.json';
    link.click();

    // URL.revokeObjectURL( url ); breaks Firefox...

}