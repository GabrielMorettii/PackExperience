const heart = document.getElementById('heart');
const dots = document.getElementById('dots');
const profile = document.getElementById('profile');

heart.addEventListener('mouseover', () => {
  heart.setAttribute("src", "./assets/heart.png")
})

heart.addEventListener('mouseout', () => {
  heart.setAttribute("src", "./assets/like.png")
})

dots.addEventListener('mouseover', () => {
  dots.setAttribute("src", "./assets/dots.png")
})

dots.addEventListener('mouseout', () => {
  dots.setAttribute("src", "./assets/more.png")
})

profile.addEventListener('click', () => {
  dots.setAttribute("src", "./assets/more.png")
});