import * as THREE from 'three';
import * as TransformControls from 'three-transform-controls';

/*export class ObjectController{
    control;

    constructor(Object3D, camera, cameraControls, renderer, render){    
        var control = new THREE.TransformControls( camera, renderer.domElement );
        control.addEventListener( 'change', render );
        control.addEventListener( 'dragging-changed', function ( event ) {
            cameraControls.enabled = ! event.value;
        } );
    
        control.attach( Object3D );
    
        //"window" is a global variable
        window.addEventListener( 'keydown', function ( event ) {
            switch ( event.keyCode ) {
                case 81: // Q
                    control.setSpace( control.space === "local" ? "world" : "local" );
                    break;
                case 17: // Ctrl
                    control.setTranslationSnap( 100 );
                    control.setRotationSnap( THREE.Math.degToRad( 15 ) );
                    break;
                case 84: // T
                    control.setMode( "translate" );
                    break;
                case 82: // R
                    control.setMode( "rotate" );
                    break;
                case 83: // S
                    control.setMode( "scale" );
                    break;
                case 187:
                case 107: // +, =, num+
                    control.setSize( control.size + 0.1 );
                    break;
                case 189:
                case 109: // -, _, num-
                    control.setSize( Math.max( control.size - 0.1, 0.1 ) );
                    break;
                case 88: // X
                    control.showX = ! control.showX;
                    break;
                case 89: // Y
                    control.showY = ! control.showY;
                    break;
                case 90: // Z
                    control.showZ = ! control.showZ;
                    break;
                case 32: // Spacebar
                    control.enabled = ! control.enabled;
                    break;
            }
        } );
    
        this.control = control;
    }
}*/
export function ObjectController(Object3D, camera, renderer, cameraControls){

    var control = new TransformControls( camera, renderer.domElement );
    control.addEventListener( 'change', render );
    control.addEventListener( 'dragging-changed', function ( event ) {
        cameraControls.enabled = ! event.value;
    } );

    control.attach( Object3D );

    //"window" is a global variable
    window.addEventListener( 'keydown', function ( event ) {
        switch ( event.keyCode ) {
            case 81: // Q
                control.setSpace( control.space === "local" ? "world" : "local" );
                break;
            case 17: // Ctrl
                control.setTranslationSnap( 100 );
                control.setRotationSnap( THREE.Math.degToRad( 15 ) );
                break;
            case 84: // T
                control.setMode( "translate" );
                break;
            case 82: // R
                control.setMode( "rotate" );
                break;
            case 83: // S
                control.setMode( "scale" );
                break;
            case 187:
            case 107: // +, =, num+
                control.setSize( control.size + 0.1 );
                break;
            case 189:
            case 109: // -, _, num-
                control.setSize( Math.max( control.size - 0.1, 0.1 ) );
                break;
            case 88: // X
                control.showX = ! control.showX;
                break;
            case 89: // Y
                control.showY = ! control.showY;
                break;
            case 90: // Z
                control.showZ = ! control.showZ;
                break;
            case 32: // Spacebar
                control.enabled = ! control.enabled;
                break;
        }
    } );

    this.control = control;
}