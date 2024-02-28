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

//cria a carta

const createCard = (personagens) => {
    
    const card = createElement('div', 'card'); // createElement é utilizado para criar um elemento›
    const front = createElement('div', 'face front');
    const back = createElement('div', 'face back');

    front.style.backgroundImage = `url('../imagens/${personagens}.png')`


    card.appendChild(front); //appendChild  adiciona um filho na div card
    card.appendChild(back);

    return card;
}

const loadGame = () => {

    //vai criar as cards
    personagens.forEach((personagens) => {
        const card = createCard(personagens);
        grid.appendChild(card);
    });

}

loadGame();