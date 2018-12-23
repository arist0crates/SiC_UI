import * as THREE from 'three';

export class Renderer{
	static createRenderer(canvas : HTMLCanvasElement) : THREE.WebGLRenderer{
		// renderer
		var renderer = new THREE.WebGLRenderer( {
			canvas: canvas,
			alpha: true,    // transparent background
			antialias: true // smooth edges
		} );
		renderer.setPixelRatio( window.devicePixelRatio );
		renderer.setSize( window.innerWidth, window.innerHeight );
		renderer.gammaInput = true;
		renderer.gammaOutput = true;
		renderer.shadowMap.enabled = true;

		return renderer;
	}
}