let btnRed = document.querySelector('#btnRed');
let btnPurple = document.querySelector('#btnPurple');
let btnBlue = document.querySelector('#btnBlue');
let content = document.querySelector('p');

btnRed.addEventListener('click',() => content.style.color= 'red');
btnPurple.addEventListener('click',() => content.style.color= 'purple');
btnBlue.addEventListener('click',() => content.style.color= 'blue');