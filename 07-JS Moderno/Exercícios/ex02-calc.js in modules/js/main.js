import { clear, keydown, copyToClipboard, charKey, themeSwitcher } from './modules/eventListener.js';
import calculate from './modules/functions.js';

const input = document.querySelector('input');

document.querySelectorAll('.charKey').forEach(charKey)
document.getElementById('clear').addEventListener('click',clear)
input.addEventListener('keydown', keydown)
document.getElementById('equal').addEventListener('click',calculate)
document.getElementById('copyToClipboard').addEventListener('click', copyToClipboard)
document.getElementById('themeSwitcher').addEventListener('click', themeSwitcher)

