const trailerEl = document.querySelector('.trailer-container');
const closeEl = document.querySelector('.close-icon');
const button = document.querySelector('.btn');

button.addEventListener('click', () =>{
    trailerEl.classList.remove('active');
});

closeEl.addEventListener('click',() => {
    trailerEl.classList.add('active');
});
