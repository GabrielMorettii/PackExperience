const pathMidia = function(file){
  return `./assets/audio/${file}`
}

const pathImg = function(img){
  return `./assets/${img}`
}

const timeToValor = function(time){
  let array = time.split('');
  array.shift();
  array.splice(1,1);
  let string = array.join('');
  
  let number = Math.floor(Number(string) / 100) * 60;
  let rest =  Number(string) % 100;
  let total = String(number + rest);
  
  return total;
}

const ValorToTime = function(valor){
  let minutes = Math.floor((Number(valor) / 60));
  let seconds = Number(valor) % 60;
  let total;

  if(seconds < 10){
    total = '0' + String(minutes) + ':0' + String(seconds);
  }else{
    total = '0' + String(minutes) + ':' + String(seconds);
  }

  return total;
}


window.addEventListener("load", player.start());