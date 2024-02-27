const grid = document.querySelector('.grid'); // para selecionar uma classe é necessario adicionar um ponto "."


const createCard = () => {
    
    const card = document.createElement('div'); // createElement é utilizado para criar um elemento›
    const front = document.createElement('div');
    const back = document.createElement('div');

    card.className = 'card';
    front.className = 'face front';
    back.className = 'face back';

    card.appendChild(front); //appendChild  adiciona um filho na div card
    card.appendChild(back);

    grid.append(card);
}

createCard();
console.log("teste")