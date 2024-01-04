// @todo: Темплейт карточки
const cardsTemplate = document.querySelector('#card-template').content;
// @todo: DOM узлы
const placeContainer = document.querySelector('.places__list');
// @todo: Функция создания карточки
function createCards(link,name) {
    const cardElement = cardsTemplate.querySelector('.card').cloneNode(true);

    cardElement.querySelector('.card__title').textContent = name;

    const cardImage = cardElement.querySelector('.card__image');
    cardImage.setAttribute('src', link);
    cardImage.setAttribute('alt', name);

    const delBut = cardElement.querySelector('.card__delete-button');
    delBut.addEventListener('click',() => deleteCards(cardElement));

    return cardElement;
};
// @todo: Функция удаления карточки
function deleteCards(cardElement) {
    cardElement.remove();
}

// @todo: Вывести карточки на страницу
function showcards(cards) {
    cards.forEach(item => {
        const cardElement = createCards(item.link, item.name);
        placeContainer.append(cardElement);
    });
}

showcards(initialCards);
