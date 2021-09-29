const headphone = document.getElementById('headphone');
const volumeBar = document.getElementById('volumeBar');
const pause = document.getElementById('pause');
const fastforward = document.getElementById('fastforward');
const gobackwards = document.getElementById('gobackwards');
const playButtons = document.getElementsByClassName('playButton');

let timer;

for (const button of playButtons) {
  button.addEventListener('click', ()=>{
    player.currentPlaying = Number(button.getAttribute('id'));

    player.start();
  })
}


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
  } else if(!volumeBar.classList.contains('barVisible') && !headphone.classList.contains('muted')){
    volumeBar.classList.add('barVisible')
  } else{
    headphone.classList.add('muted')
    headphone.setAttribute("src", "./assets/icons/mute.png")
    volumeBar.classList.remove('barVisible')
    volumeBar.value = 0
  }
})

volumeBar.addEventListener('input', ()=>{
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

