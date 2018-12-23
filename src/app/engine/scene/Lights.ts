import * as THREE from 'three';

export class Lights{
	static createAmbientLight() : THREE.AmbientLight {
		var ambientLight = new THREE.AmbientLight( 0x666666 );
		return ambientLight;
	}
	
	static createDirectionalLight() : THREE.DirectionalLight {
		var light = new THREE.DirectionalLight( 0xdfebff, 1 );
		light.position.set( 50, 200, 100 );
		light.position.multiplyScalar( 1.3 );
		light.castShadow = true;
		light.shadow.mapSize.width = 2048;
		light.shadow.mapSize.height = 2048;
		var d = 2048;
		light.shadow.camera.left = - d;
		light.shadow.camera.right = d;
		light.shadow.camera.top = d;
		light.shadow.camera.bottom = - d;
		light.shadow.camera.far = 2048;
		
		return light;
	}
}