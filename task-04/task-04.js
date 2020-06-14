const counterValue = document.querySelector('#value');

const incrementRef = document.querySelector('[data-action="increment"]');
const decrementRef = document.querySelector('[data-action="decrement"]');

function increment(){
    counterValue.textContent = parseInt(counterValue.textContent, 10) +1;
}

function decrement(){
    counterValue.textContent = parseInt(counterValue.textContent, 10) -1;
}

decrementRef.addEventListener('click', decrement);
incrementRef.addEventListener('click', increment);
