window.player = {
  title: document.querySelector('.title h3'),
  artist: document.querySelector('.title p'),
  profileAvatar: document.querySelector('#profileAvatar'),
  audio: document.querySelector('audio'),
  totalDuration: document.querySelector('.colend'),
  currentPlaying: 0,
  audioData: audios,
  start(){
    this.currentAudio = this.audioData[this.currentPlaying];

    this.title.innerText = this.currentAudio.title;
    this.artist.innerText = this.currentAudio.artist;
    this.profileAvatar.src = pathImg(this.currentAudio.cover);
    this.audio.src = pathMidia(this.currentAudio.file);

    this.audio.onloadeddata = () => {  
      let audioConverted = moment(this.audio.duration);
      console.log(audioConverted)

      this.totalDuration.innerText = durationToString;
     }
     
    this.audio.onended = () => this.next();
    
  },
  next(){
    this.currentPlaying++;

    if(this.currentPlaying == this.audioData.length) this.restart();
      
    this.start();
  },
  restart(){
    this.currentPlaying = 0;
  }
  
}