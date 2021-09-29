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
  
  return string;
}

const ValorToTime = function(valor){
  let array = valor.split('');
  array.unshift('0')
  array.splice(2, 0, ":")
    
  let string = array.join('');

  return string;
}


window.addEventListener("load", player.start());