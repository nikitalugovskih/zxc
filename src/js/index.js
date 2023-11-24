const button = document.querySelector('section');
const input = document.querySelector('#inputfield');

button.addEventListener('click', () => {
    input.classList.toggle('open')
});