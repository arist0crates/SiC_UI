import * as THREE from 'three';

export class Audio {
    static createAudio(music : string, camera : THREE.Camera) : THREE.Audio{
        // create an AudioListener and add it to the camera
        var listener = new THREE.AudioListener();
        camera.add(listener);

        // create a global audio source
        var sound = new THREE.Audio(listener);

        // load a sound and set it as the Audio object's buffer
        var audioLoader = new THREE.AudioLoader();
        audioLoader.load(music, function (buffer) {
            sound.setBuffer(buffer);
            sound.setLoop(true);
            sound.setVolume(0.5);
            sound.play();
        }, null, null);
        return sound;
    }
}