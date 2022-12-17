import {AudioListener, Audio, AudioLoader} from 'three'

class MakeAudio{
    constructor(camera){
        // sound citation in the writeup
        const bgMusic =  require("./guitarBGM.mp3").default;;

        const listener = new AudioListener();
        camera.add( listener );

        // create a global audio source
        this.bg = new Audio( listener );

        // load a sound and set it as the Audio object's buffer
        // https://threejs.org/docs/?q=audio#api/en/audio/Audio
        const audioLoader = new AudioLoader();
        const g = this.bg;
        audioLoader.load(bgMusic , function( buffer ) {
            g.setBuffer( buffer );
            g.setLoop( true );
            g.setVolume(0.5);
            g.setPlaybackRate (1); 
        });


        this.update = function(){
            this.bg.context.resume();
        };
    }
}


export default MakeAudio;