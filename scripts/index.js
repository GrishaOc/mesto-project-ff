// @todo: Темплейт карточки
const cardsTemplate = document.querySelector('#card-template').content;
// @todo: DOM узлы
const placeContainer = document.querySelector('.places__list');
// @todo: Функция создания карточки
function createCards(link,title) {
    const cardElement = cardsTemplate.querySelector('.card').cloneNode(true);

    cardElement.querySelector('.card__title').textContent = title;

    const cardImage = cardElement.querySelector('.card__image');
    cardImage.setAttribute('src', link);
    cardImage.setAttribute('alt', title);

    cardElement.querySelector('.card__delete-button').addEventListener('click',function deleteCards() {
        cardElement.remove();
    });

    return cardElement;
};
// @todo: Функция удаления карточки

// @todo: Вывести карточки на страницу
function initalizeCards(cards) {
    cards.forEach(item => {
        const cardElement = createCards(item.link, item.title);
        placeContainer.append(cardElement);
    });
}

initalizeCards(initialCards);
