const headphone = document.getElementById('headphone');
const volumeBar = document.getElementById('volumeBar');
const pause = document.getElementById('pause');
const fastforward = document.getElementById('fastforward');
const gobackwards = document.getElementById('gobackwards');
const playButtons = document.getElementsByClassName('playButton');
const progressBar = document.getElementById('progressBar');
const playerContainer = document.getElementById('player');
const artistScreen = document.getElementById('artistScreen');
const goBack = document.getElementById('goBack');
const menu = document.getElementById('menu');
const like = document.getElementById('like');
const menuList = document.getElementsByClassName('menuList')[0];
const musics = document.getElementsByClassName('music');

let timer;

for (const button of playButtons) {
  button.addEventListener('click', ()=>{
    player.currentPlaying = Number(button.getAttribute('id'));

    playerContainer.classList.add('playerVisible');
    artistScreen.classList.add('playerVisible');

    player.start();
  })
}

goBack.addEventListener('click', ()=>{
  playerContainer.classList.remove('playerVisible');
  artistScreen.classList.remove('playerVisible');
})

menu.addEventListener('click', ()=>{
  if(menuList.classList.contains('clicked')){
    menuList.classList.remove('clicked')
  }else{
    menuList.classList.add('clicked')
  }
})

like.addEventListener('click', () => {
  
  if(document.getElementById(`exist${player.currentPlaying}`)){
    let musicPlaying = musics[player.currentPlaying].children[0];

    musicPlaying.innerText = audios[player.currentPlaying].title;

    menuList.classList.remove('clicked')
  }else{
    let artist = musics[player.currentPlaying].children[0];

    artist.innerHTML += `<img id="exist${player.currentPlaying}" src="./assets/icons/heart.png" style="margin-left: 10px;
    position: absolute;"/>`

    menuList.classList.remove('clicked')
  }
  
});

pause.addEventListener('click', ()=>{
  if(player.audio.paused){
    player.audio.play();
    pause.setAttribute('src','./assets/icons/pause.png')
  }else{
    player.audio.pause();
    pause.setAttribute('src','./assets/icons/play.png')
  }
  
})

fastforward.addEventListener('click', ()=>{
  player.audio.currentTime += 15;
})

gobackwards.addEventListener('click', ()=>{
  player.audio.currentTime -= 15;
})

progressBar.addEventListener('input', ()=>{
  player.currentDuration.innerText =  ValorToTime(progressBar.value);
})

progressBar.addEventListener('change', ()=>{
  player.audio.currentTime = Number(progressBar.value);
})

volumeBar.addEventListener('mouseout', ()=>{
  timer = setTimeout(()=>{
    volumeBar.classList.remove('barVisible')
  }, 2500)
})

volumeBar.addEventListener('mouseover', ()=>{
  clearTimeout(timer)
})

headphone.addEventListener('click', () => {
  if(!volumeBar.classList.contains('barVisible') && headphone.classList.contains('muted')){
    volumeBar.classList.add('barVisible')
  }else if(volumeBar.classList.contains('barVisible') && !headphone.classList.contains('muted')){
    headphone.classList.add('muted')
    headphone.setAttribute("src", "./assets/icons/mute.png")
    volumeBar.classList.remove('barVisible')
    volumeBar.value = 0
    player.audio.volume = 0
  } else if(!volumeBar.classList.contains('barVisible') && !headphone.classList.contains('muted')){
    volumeBar.classList.add('barVisible')
  } else{
    headphone.classList.add('muted')
    headphone.setAttribute("src", "./assets/icons/mute.png")
    volumeBar.classList.remove('barVisible')
    volumeBar.value = 0
    player.audio.volume = 0
  }
})

volumeBar.addEventListener('input', ()=>{
  player.audio.volume = Number(volumeBar.value) / 100;

  if(volumeBar.value == "0"){
    headphone.setAttribute("src", "./assets/icons/mute.png")
  } else if( 0 < volumeBar.value && volumeBar.value < 50) {
    headphone.setAttribute("src", "./assets/icons/volume.png")
  } else if(50 <= volumeBar.value && volumeBar.value < 75){
    headphone.setAttribute("src", "./assets/icons/volume1.png")
  }else if(75 <= volumeBar.value <= 100){
    headphone.setAttribute("src", "./assets/icons/volume2.png")
  } else{
    alert('Houve algum problema durante a troca de volume!')
  }
})

