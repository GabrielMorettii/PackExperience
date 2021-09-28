const heart = document.getElementById('heart');
const dots = document.getElementById('dots');
const profile = document.getElementById('profile');
const close = document.getElementById('close');
const follow = document.getElementById('follow');
const modal = document.getElementsByClassName('modal')[0];
const select = document.getElementsByClassName('select')[0];
const verified = document.getElementsByClassName('verified')[0];


heart.addEventListener('mouseover', () => {
  heart.setAttribute("src", "./assets/icons/heart.png")
})

heart.addEventListener('mouseout', () => {
  if(heart.classList.contains('liked')){
    return
  }else{
    heart.setAttribute("src", "./assets/icons/like.png")
  }
})

heart.addEventListener('click', () => {
  if(heart.classList.contains('liked')){
    heart.classList.remove('liked')
  }else{
    heart.classList.add('liked')
  }
})

dots.addEventListener('mouseover', () => {
  dots.setAttribute("src", "./assets/icons/dots.png")
})

dots.addEventListener('mouseout', () => {
  dots.setAttribute("src", "./assets/icons/more.png")
})

dots.addEventListener('click', () => {
  if(select.classList.contains('clicked')){
    select.classList.remove('clicked')
  }else{
    select.classList.add('clicked')
  }
})

profile.addEventListener('click', () => {
  modal.classList.add('active')
});

follow.addEventListener('click', () => {
  if(profile.classList.contains('followed')){
    profile.classList.remove('followed')
    verified.classList.remove('checked')
    select.classList.remove('clicked')
  }else{
    profile.classList.add('followed')
    verified.classList.add('checked')
    select.classList.remove('clicked')
  }
});

close.addEventListener('click', () => {
  modal.classList.remove('active')
});
