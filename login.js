const input = document.querySelector('.login__input');
const button = document.querySelector('.login__button');
const form = document.querySelector('.login__form');

const validateInput = ({ target }) => {
//desestruturaçao de obj "target"
    if (target.value.length > 2){
        button.removeAttribute('disabled');
        return;
    } 
        button.setAttribute('disabled', '');
}

const handleSubmit = (event) => {
    event.preventDefault();

    localStorage.setItem('player', input.value);
    window.location = 'game.html';
}


input.addEventListener('input', validateInput); //Validar o Input
form.addEventListener('submit', handleSubmit); //Manipular o envio do formulario