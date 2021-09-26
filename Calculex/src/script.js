const openCalc = document.getElementById('openCalc');
const container = document.getElementsByClassName('container')[0];
const close = document.getElementById('close');
const screen = document.getElementById('screen');
const buttons = document.getElementsByClassName('button');
const equal = document.getElementById('equal');

let numbers = document.getElementById('numbers');
let numberScreen = document.getElementById('numberScreen');

let sum = 0; 

openCalc.addEventListener('click', () => {
  container.classList.add('active');
  openCalc.classList.add('opened');
  screen.classList.add('active');
})

close.addEventListener('click', ()=>{
  container.classList.remove('active');
  openCalc.classList.remove('opened');
  screen.classList.remove('active');
})

