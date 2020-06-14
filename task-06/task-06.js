const inputValue = document.querySelector('#validator-input');
const inputLenght = Number(inputValue.attributes['data-length'].value);

const setValue = event => {
    event.target.classList.add('valid');
    event.target.classList.remove('invalid');
};

const setInvalid = event =>{
    event.target.classList.add('invalid');
    event.target.classList.remove('valid');
};

inputValue.addEventListener('change', event => {
    if(event.target.value.length === inputLenght){
        setValue(event);
        return;
    }
    setInvalid(event);
});

