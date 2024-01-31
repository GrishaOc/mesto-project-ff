import {
    cardsTemplate,
    placeContainer,
    popupCards,
    formCard,
    nameCard,
    linkCard,
    img,
    popupCap,
    popupIMG,
  } from "./base.js";
  import { initialCards } from "./cards.js";
  import { closePopUp, openPopUp, closePopupByClick } from "./modal.js";
  
  function createCard(cardData, deleteCard, openingIMG,likeCard) {
    const cardElement = cardsTemplate.querySelector(".card").cloneNode(true);
  
    cardElement.querySelector(".card__title").textContent = cardData.name;
  
    const cardImage = cardElement.querySelector(".card__image");
    cardImage.src = cardData.link;
    cardImage.alt = cardData.name;
  
    const delBut = cardElement.querySelector(".card__delete-button");
    delBut.addEventListener("click", () => deleteCard(cardElement));
    //like
    const likeBTN = cardElement.querySelector(".card__like-button");
    likeBTN.addEventListener("click", likeCard);
    //IMG
    cardImage.addEventListener("click", openingIMG);
    popupIMG.addEventListener("click", closePopupByClick);
  
    return cardElement;
  }
  // @todo: Функция удаления карточки
  function deleteCard(cardElement) {
    cardElement.remove();
  }
  
  // @todo: Вывести карточки на страницу
  function showCards(cards) {
    cards.forEach((item) => {
      const cardElement = createCard(item, deleteCard, openingIMG, likeCard);
      placeContainer.append(cardElement);
    });
  }
  
  showCards(initialCards);
  //LIKE
  function likeCard(evt) {
    evt.target.classList.toggle("card__like-button_is-active");
  }
  //IMG
  function addNewCard(cards, deleteCard, a, openingIMG) {
    a.prepend(createCard(deleteCard, cards, openingIMG));
  }
  function addCardForm(evt) {
    evt.preventDefault();
    const newCard = {
      name: nameCard.value,
      link: linkCard.value,
    };
    addNewCard(deleteCard, newCard, placeContainer, openingIMG);
    closePopUp(popupCards);
    formCard.reset();
  }
  formCard.addEventListener("submit", addCardForm);
  
  function openingIMG(evt) {
    img.src = evt.target.src;
    popupCap.textContent = evt.target.alt;
    img.alt = evt.target.alt;
    openPopUp(popupIMG);
  }
  