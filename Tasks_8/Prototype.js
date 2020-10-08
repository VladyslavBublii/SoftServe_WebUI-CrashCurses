function MP3(volume, track){
    this.volume = volume;
    this.track = track; 
}

MP3.prototype.setVolume = function(volume){
	console.log("at 0 to 100")
    if(volume>0 && volume<100){
        this.volume = volume;
    }
}

MP3.prototype.getVolume = function(){ return this.volume;}
MP3.prototype.setTrack = function(volume){ this.track = track;}
MP3.prototype.getTrack = function(){ return this.track;}

let audio = new MP3(11, 'birds do it');

console.log(audio.getTrack())
console.log(audio.getVolume())