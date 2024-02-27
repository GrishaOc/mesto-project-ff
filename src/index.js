import "./pages/index.css";
import * as base from "./scripts/base.js";
import "./scripts/card.js";
import { openPopUp, closePopupByClick, closePopUp } from "./scripts/modal.js";
import { clearValidation, enableValidation } from "./scripts/validation.js";
import "./scripts/api.js";
import {
  createCard,
  likeCard,
  openingIMG,
} from "./scripts/card.js";
import { editProfileAvatar, getInitialCards, getUserData, uninstallCard, uppInitialCards, uppUserData } from "./scripts/api.js";
//show cards
function showCards(deleteCard, cards, openingIMG,profileId) {
  cards.forEach((item) => {
    const cardElement = createCard(item, deleteCard, openingIMG, likeCard,profileId);
    base.placeContainer.append(cardElement);
  });
}



Promise.all([getInitialCards(), getUserData()])
  .then(([dataCard, dataProfile]) => {
    showCards(
      deleteCard,
      dataCard,
      base.placeContainer,
      dataProfile._id,
      openingIMG
    );
    base.profileImage.style = `background-image: url('${dataProfile.avatar}');`;
    base.nameProfile.textContent = dataProfile.name;
    base.jobProfile.textContent = dataProfile.about;
  })
  .catch((err) => console.log(err));
//Form
function handleProfileFormSubmit(evt) {
  evt.preventDefault();

  const nameValue = base.nameInput.value;
  const jobValue = base.jobInput.value;

  base.nameProfile.textContent = nameValue;
  base.jobProfile.textContent = jobValue;

  uppUserData({ name: nameValue, about: jobValue })
    .then((data) => {
      base.nameProfile.textContent = data.name;
      base.jobProfile.textContent = data.about;
    })
    .catch((err) => console.log(err));
  closePopUp(base.popupEdit);
}
base.formElement.addEventListener("submit", handleProfileFormSubmit);
//MODAL
// edit
base.buttonEdit.addEventListener("click", (evt) => {
  base.nameInput.value = base.nameProfile.textContent;
  base.jobInput.value = base.jobProfile.textContent;
  openPopUp(base.popupEdit);
  clearValidation(base.EditProfile, validationConfig);
});
base.popupEdit.addEventListener("click", closePopupByClick);
//profile
base.buttonCards.addEventListener("click", (evt) => {
  openPopUp(base.popupCards);
});
base.popupCards.addEventListener("click", closePopupByClick);
//validatioon
enableValidation(validationConfig);
const validationConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inputErrorClass: "popup__input-messange-error",
  errorClass: "popup__input-messange-error_active",
};
//add card
function addNewCard(cards, deleteCard, a, openingIMG,profileId) {
  a.prepend(createCard(deleteCard, cards, openingIMG,profileId));
}
function addCardForm(evt) {
  evt.preventDefault();
  const newCard = {
    name: base.nameCard.value,
    link: base.linkCard.value,
  };
  uppInitialCards(newCard)
  .then((data) => {
    addNewCard(deleteCard, data, base.placeContainer, openingIMG,data.owner._id,);
    closePopUp(base.popupCards);
    base.formCard.reset();
  })
  .catch((err) => console.log(err));
}
base.formCard.addEventListener("submit", addCardForm);

//delAPI
const popupDeletCard = document.querySelector(".popup_type_confirm-delete");
// форма подтверждения удаления карточки
const formConfirmDelete = document.forms["confirm"];
// кнопка подтверждения
const buttonConfirm = formConfirmDelete.querySelector(".button");
export function deleteCard(evt) {
  const cardId = evt.target.closest(".card").dataset.id;
  buttonConfirm.dataset.id = cardId;
  buttonConfirm.textContent = "Да";
  buttonConfirm.classList.remove("blink-button");
  openPopUp(popupDeletCard);
}
function submitConfirmDeleteCard(evt) {
  evt.preventDefault();
  buttonConfirm.textContent = "Выполнение...";
  buttonConfirm.classList.add("blink-button");
  uninstallCard(buttonConfirm.dataset.id)
    .then((data) => {
      if (data.message == "Пост удалён") {
        const card = document.querySelector(
          `[data-id="${buttonConfirm.dataset.id}"]`
        );
        card.remove();
        closePopUp(popupDeletCard);
      }
    })
    .catch((err) => console.log(err));
}
formConfirmDelete.addEventListener("submit", submitConfirmDeleteCard);
//editAvatar
base.profileImage.addEventListener("click", function () {
  base.btnSave.textContent = "Сохранить";
  base.btnSave.classList.remove("blink-button");
  openPopUp(base.popupAvatar);
});
const sumbitEditAvatar = (evt) =>{
  evt.preventDefault(); 
  const urlImage = base.popupUrl.value;
  base.btnSave.textContent = "Сохранение...";
  base.btnSave.classList.add("blink-button");
  editProfileAvatar({ avatar: urlImage })
    .then((data) => {
      base.profileImage.style = `background-image: url('${data.avatar}');`;
      closePopUp(base.popupAvatar);
    })
    .catch((err) => console.log(err));
}
base.formNewAvatar.addEventListener("submit", sumbitEditAvatar);
