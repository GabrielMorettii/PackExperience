let contato = document.getElementById('contato');
let chat = document.getElementsByClassName('chat')[0];
let close = document.getElementById('close');


contato.addEventListener('click', () => {
  if(chat.classList.contains('active')){
    chat.classList.remove('active')
  }else{
    chat.classList.add('active')
  }
})

close.addEventListener('click', () => {
  chat.classList.remove('active')
})