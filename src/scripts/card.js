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
  import { ClosingPopUp, OpeningPopUp, closePopupByClick } from "./modal.js";
  
  function createCards(cardData, deleteCards, openingIMG) {
    const cardElement = cardsTemplate.querySelector(".card").cloneNode(true);
  
    cardElement.querySelector(".card__title").textContent = cardData.name;
  
    const cardImage = cardElement.querySelector(".card__image");
    cardImage.src = cardData.link;
    cardImage.alt = cardData.name;
  
    const delBut = cardElement.querySelector(".card__delete-button");
    delBut.addEventListener("click", () => deleteCards(cardElement));
    //like
    const likeBTN = cardElement.querySelector(".card__like-button");
    likeBTN.addEventListener("click", likeCards);
    //IMG
    cardImage.addEventListener("click", openingIMG);
    popupIMG.addEventListener("click", closePopupByClick);
  
    return cardElement;
  }
  // @todo: Функция удаления карточки
  function deleteCards(cardElement) {
    cardElement.remove();
  }
  
  // @todo: Вывести карточки на страницу
  function showcards(cards) {
    cards.forEach((item) => {
      const cardElement = createCards(item, deleteCards, openingIMG, likeCards);
      placeContainer.append(cardElement);
    });
  }
  
  showcards(initialCards);
  //LIKE
  function likeCards(evt) {
    evt.target.classList.toggle("card__like-button_is-active");
  }
  //IMG
  function addNewCard(cards, deleteCards, a, openingIMG) {
    a.prepend(createCards(deleteCards, cards, openingIMG));
  }
  function AddCardForm(evt) {
    evt.preventDefault();
    const newCard = {
      name: nameCard.value,
      link: linkCard.value,
    };
    addNewCard(deleteCards, newCard, placeContainer, openingIMG);
    ClosingPopUp(popupCards);
    formCard.reset();
  }
  formCard.addEventListener("submit", AddCardForm);
  
  function openingIMG(evt) {
    img.src = evt.target.src;
    popupCap.textContent = evt.target.alt;
    img.alt = evt.target.alt;
    OpeningPopUp(popupIMG);
  }
  