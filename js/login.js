const input = document.querySelector('.login__input');
const button = document.querySelector('.login__button');
const form = document.querySelector('.login-form');

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
    console.log('Logando...')
}


input.addEventListener('input', validateInput); //Validar o Input
form.addEventListener('submit', handleSubmit); //Manipular o envio do formulario