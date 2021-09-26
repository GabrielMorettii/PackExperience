const openCalc = document.getElementById('openCalc');
const container = document.getElementsByClassName('container')[0];
const close = document.getElementById('close');
const screen = document.getElementById('screen');
const buttons = document.getElementsByClassName('button');
const footer = document.getElementsByClassName('footer')[0];
const equal = document.getElementById('equal');
const ThemeSwitchImage = document.getElementById('ThemeSwitchImage');

let numbers = document.getElementById('numbers');
let numberScreen = document.getElementById('numberScreen');
let themeSwitcher = document.getElementById('themeSwitcher');



let sum = 0; 

themeSwitcher.addEventListener('click', ()=>{
  if(!themeSwitcher.classList.contains('light')){
    container.classList.add('light')
    footer.classList.add('light')
    numbers.classList.add('light')
    numberScreen.classList.add('light')
    themeSwitcher.classList.add('light')

    setTimeout(() => {
      ThemeSwitchImage.setAttribute('src', '../assets/sun.png')
    }, 200);

    for (const button of buttons) {
      button.classList.add('light');
    }
  } else{
    container.classList.remove('light')
    footer.classList.remove('light')
    numbers.classList.remove('light')
    numberScreen.classList.remove('light')
    themeSwitcher.classList.remove('light')

    setTimeout(() => {
      ThemeSwitchImage.setAttribute('src', '../assets/moon.png')
    }, 200);
    
    for (const button of buttons) {
      button.classList.remove('light');
    }
  }
})

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

let num1 = "", num2 = "", operation = "";

for (const button of buttons) {
  button.addEventListener('click', ()=>{
    let content = button.innerText;

    if(content === "AC") {
      numberScreen.innerText = "";
      numbers.innerText = "";
      num1 = "";
      num2 = "";
      operation = "";
      sum = "";
      
      return;
    } 

    if(content === "="){
      num1 = Number(num1);
      num2 = Number(num2);

      numberScreen.innerText = "";

      switch(operation){
        case '+':
          sum = num2 + num1;
          break;
        case '-':
          sum = num2 - num1;
          break;
        case 'x':
          sum = num2 * num1;
          break;
        case '/':
          sum = num2 / num1;
          break;
        case '%':
          sum = num2 % num1;
          break;
        case '^':
          sum = num2 ** num1;
          break;
      }

      numberScreen.innerText = String(sum);
      numbers.innerText = "";
      num1 = "";
      num2 = "";
      operation = "";
    } else if (!Number(content)){
      num2 += num1;
      num1 = "";

      operation += content;

      numbers.innerText += content;
    } else{
      num1 += content;

      numbers.innerText += content;
    }

  })
}