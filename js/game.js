const grid = document.querySelector('.grid'); // para selecionar uma classe é necessario adicionar um ponto "."

const createElement = (tag, className) =>{
    const element = document.createElement(tag); // criando um elemento 
    element.className = className; // a class que passou dentro do elemento
    return element; //retornando o elemento
}
const createCard = () => {
    
    const card = createElement('div', 'card'); // createElement é utilizado para criar um elemento›
    const front = createElement('div', 'face front');
    const back = createElement('div', 'face back');


    card.appendChild(front); //appendChild  adiciona um filho na div card
    card.appendChild(back);

    return card;
}
