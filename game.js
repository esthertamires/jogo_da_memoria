const grid = document.querySelector('.grid'); // para selecionar uma classe é necessario adicionar um ponto "."
const spanPlayer = document.querySelector('.player');
const timer = document.querySelector('.timer');

const personagens = [ 
    'Reyna',
    'Astra',
    'Brimstone',
    'Harbor',
    'Iso',
    'Jett',
    'Neon',
    'Omen',
    'Raze',
    'Viper'
]

const createElement = (tag, className) =>{
    const element = document.createElement(tag); // criando um elemento 
    element.className = className; // a class que passou dentro do elemento
    return element; //retornando o elemento
}

let firstCard = '';
let secondCard = '';

const checkEndGame = () => {

    const disabledCards = document.querySelectorAll('.disabled-card');

    if (disabledCards.length == 20){ 
        clearInterval(this.loop);
        setTimeout(() => {
        alert(`Parabens, ${spanPlayer.innerHTML} você venceu ! Seu tempo foi: ${timer.innerHTML} segundos`)
       }, 500);;
    }
}


const checkCards = () => {
    const firstPersonagem = firstCard.getAttribute('data-personagem');
    const secondPersonagem = secondCard.getAttribute('data-personagem');

    if ( firstPersonagem === secondPersonagem){

        firstCard.firstChild.classList.add('disabled-card');
        secondCard.firstChild.classList.add('disabled-card');

        firstCard = '';
        secondCard = '';


        checkEndGame();

    } else {

        setTimeout(() =>{ 

            firstCard.classList.remove('reveal-card');

            secondCard.classList.remove('reveal-card');

            firstCard = '';
            secondCard = '';

        }, 500);
    }
    
}

const revealCard = ({ target }) => {

    if (target.parentNode.className.includes('reveal-card')){
        return;
    }

    if (firstCard === ''){

        target.parentNode.classList.add('reveal-card');
        firstCard = target.parentNode;

    } else if (secondCard === '') {
        
        target.parentNode.classList.add('reveal-card');
        secondCard = target.parentNode;

        checkCards();
    }


}

//cria a carta

const createCard = (personagens) => {
    
    const card = createElement('div', 'card'); // createElement é utilizado para criar um elemento›
    const front = createElement('div', 'face front');
    const back = createElement('div', 'face back');

    front.style.backgroundImage = `url('../imagens/${personagens}.png')` //adicionando as imagens nos cards


    card.appendChild(front); //appendChild  adiciona um filho na div card
    card.appendChild(back);

    card.addEventListener('click', revealCard);
    card.setAttribute('data-personagem',personagens)

    return card;
}

const loadGame = () => {

    const personagensDuplicados = [ ... personagens, ... personagens]; // duplicando as cartas

    const embarralharArray = personagensDuplicados.sort(() => Math.random() - 0.5);

    //vai criar as cards
    embarralharArray.forEach((personagens) => {

        const card = createCard(personagens);
        grid.appendChild(card);

    });

}

const starTime = () =>{

    this.loop = setInterval(() => {
        const currentTime = +timer.innerHTML;
        timer.innerHTML = currentTime + 1;


    }, 1000);

}


window.onload = () => {
 
    spanPlayer.innerHTML = localStorage.getItem('player');
    starTime();

    loadGame();
}
