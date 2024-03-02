const grid = document.querySelector('.grid'); // para selecionar uma classe é necessario adicionar um ponto "."

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

let fristCard = '';
let secondCard = '';
const checkCards = () => {
    
}

const revealCard = ({ target }) => {

    if (target.parentNode.className.includes('reveal-card')){
        return;
    }

    if (fristCard == ''){
        target.parentNode.classList.add('reveal-card');
        fristCard = target.parentNode;

    } else if (secondCard == '') {
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
    card.setAttribute('data-character',personagens)

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



loadGame();