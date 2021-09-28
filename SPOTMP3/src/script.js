const pathMidia = function(file){
  return `./assets/audio/${file}`
}

const pathImg = function(img){
  return `./assets/${img}`
}


window.addEventListener("load", player.start());