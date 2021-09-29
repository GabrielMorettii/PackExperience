window.player = {
  title: document.querySelector('.title h3'),
  artist: document.querySelector('.title p'),
  profileAvatar: document.querySelector('#profileAvatar'),
  audio: document.querySelector('audio'),
  totalDuration: document.querySelector('.colend'),
  currentDuration: document.querySelector('.colstart'),
  currentPlaying: 0,
  audioData: audios,
  option: document.querySelector('.option')[0],
  start(){
    this.currentAudio = this.audioData[this.currentPlaying];

    this.title.innerText = this.currentAudio.title;
    this.artist.innerText = this.currentAudio.artist;
    this.profileAvatar.src = pathImg(this.currentAudio.cover);
    this.audio.src = pathMidia(this.currentAudio.file);

    this.audio.onloadeddata = () => {  
      this.totalDuration.innerText = this.currentAudio.duration;
      progressBar.setAttribute('max', timeToValor(this.currentAudio.duration))

      option = musics[this.currentPlaying].parentElement
      option.classList.add('playing');
     }

    this.audio.ontimeupdate = () => { 
      progressBar.value = String(this.audio.currentTime)
      this.currentDuration.innerText =  ValorToTime(progressBar.value);
    }

    setTimeout(() => {
      this.audio.play();
    }, 1000);

    this.audio.onended = () => {
      option.classList.remove('playing');
      this.next()
    };
    
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
