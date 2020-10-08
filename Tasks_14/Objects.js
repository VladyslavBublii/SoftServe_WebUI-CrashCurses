 //1
const tv = {
    currentChannel: 1,
    nextChannel(){this.currentChannel++;},
    previousChannel(){this.currentChannel--;},
    setChannel(number){this.currentChannel = number;}
}

//2

const MP3 = {
    setTrackSet(tracks) {
        return this.trackSet = tracks;
    },
    trackSet: [],
    getTrack(number){ return this.trackSet[number-1];},
    volume: 100,
    addVolume(point){
        this.volume > 100 
        ? console.log('Max. volume reached') 
        : this.volume += number;
    },
    decreaseVolume(point){
        this.volume < 0 
        ? console.log('Min. volume reached') 
        : this.volume -= number;
    }
}

 MP3.setTrackSet(['q', 'w', 't']);
 MP3.trackSet;
 console.log(MP3.getTrack(1));

 //2
 console.log("");

 