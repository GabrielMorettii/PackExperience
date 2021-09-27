let cards = document.querySelectorAll('.card');
let modal = document.querySelector('.modal');
let close = document.querySelector('#close');
let modalImg = document.querySelector('#modalImg')
let file = document.querySelector('#file');
let add = document.querySelector('#add');
let remove = document.querySelector('#remove');
let edit = document.querySelector('#edit');
let body = document.querySelector('body');
let main = document.querySelector('main');
let source = "";


function addModal(){
  if(modal.classList.contains('active')){
    modal.classList.remove('active')
  } else{
    modal.classList.add('active');
  }
}

function closeModal(){
  close.addEventListener('click',  modal.classList.remove('active'))
}

for ( let card of cards){
    card.addEventListener('click', addModal )
}

for(let i =0; i< cards.length;i++){
  cards[i].addEventListener('click',function(){

      source = cards[i].children[0].getAttribute('src');
      modalImg.setAttribute('src', source);
   
  });

}

add.addEventListener('click', ()=>{
  file.click();
})

remove.addEventListener('click', () => {
  main.classList.add('remove')
})