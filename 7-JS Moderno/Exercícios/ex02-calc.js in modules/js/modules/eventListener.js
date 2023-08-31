import calculate from "./functions.js";

const main = document.querySelector('main');
const root = document.querySelector(':root');
const input = document.querySelector('input');

const allowedKeys = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "];
const resultInput = document.getElementById('result');

export function charKey (charKeyBtn){
  charKeyBtn.addEventListener('click', function(){
    const value = charKeyBtn.dataset.value
    input.value += value
  })
}

export function clear(){  
  input.value = ""
  input.focus()
}

export function keydown (ev){
  ev.preventDefault();
  if(allowedKeys.includes(ev.key)){
    input.value += ev.key
  }
  if(ev.key === 'Backspace'){
    input.value = input.value.slice(0,-1)
  }
  if(ev.key === 'Enter'){
    calculate()
  }
}

export function copyToClipboard (ev){
  const button = ev.currentTarget
  if (button.innerText === 'Copy'){
    button.innerText = "Copied!"
    button.classList.add('success')
    window.navigator.clipboard.writeText(resultInput.value)
  } 
  else{
    button.innerText = 'Copy'
    button.classList.remove('success')
  }
}

export function themeSwitcher(){
  if(main.dataset.theme === 'dark'){
    root.style.setProperty('--bg-color', '#f1f5f9')
    root.style.setProperty('--border-color', '#aaa')
    root.style.setProperty('--font-color', '#212529')
    root.style.setProperty('--primary-color', '#26834a')
    main.dataset.theme = 'light'
  } else{
    root.style.setProperty('--bg-color', '#212529')
    root.style.setProperty('--border-color', '#666')
    root.style.setProperty('--font-color', '#f1f5f9')
    root.style.setProperty('--primary-color', '#4dff91')
    main.dataset.theme = 'dark'
  }
}
