const inputValue = document.querySelector('#name-input');
const outputValue = document.querySelector('#name-output');

function showInput(event){
    const text = 'незнакомец';

    if(outputValue.textContent === text)outputValue.textContent = '';

    outputValue.textContent = event.target.value;

    if(!inputValue.value) outputValue.textContent = text;
}

inputValue.addEventListener('input', showInput);
