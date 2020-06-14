const fontSize = document.querySelector('#font-size-control');
const textValue = document.querySelector('#text');

fontSize.addEventListener('input', changeFontSize);

function changeFontSize(event){
    textValue.style.fontSize = `${event.target.value}px`;
}

