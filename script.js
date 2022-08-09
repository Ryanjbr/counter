let counter = 0;
let hundredsValue = 0;
let tensValue = 0;
let onesValue = 0;
const hundreds = document.querySelector('.hundreds')
const tens = document.querySelector('.tens')
const ones = document.querySelector('.ones')
const buttons = document.querySelectorAll('button')


const plusfive = document.querySelector('.plusfive')
const plusone = document.querySelector('.plusone')
const minusone = document.querySelector('.minusone')
const minusfive = document.querySelector('.minusfive')

plusfive.addEventListener('click', () => {
    counter += 5;
})

plusone.addEventListener('click', () => {
    counter += 1;
})

minusfive.addEventListener('click', () => {
    counter -= 5;
})

minusone.addEventListener('click', () => {
    counter -= 1;
})

for (let button of buttons) {
    button.addEventListener('click', () => {
        onesValue = counter % 10;
        tensValue = Math.floor(counter % 100 / 10);
        hundredsValue = Math.floor(counter / 100);
        hundreds.textContent = hundredsValue;
        tens.textContent = tensValue;
        ones.textContent = onesValue;
    })
}