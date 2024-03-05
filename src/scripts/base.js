export const cardsTemplate = document.querySelector("#card-template").content;
// @todo: DOM узлы
export const placeContainer = document.querySelector(".places__list");
// edit
export const buttonEdit = document.querySelector(".profile__edit-button");
export const popupEdit = document.querySelector(".popup_type_edit");
//close
export const buttonClose = document.querySelector(".popup__close");
//profile
export const buttonCards = document.querySelector(".profile__add-button");
export const popupCards = document.querySelector(".popup_type_new-card");
//img
export const popupIMG = document.querySelector(".popup_type_image");
export const img = popupIMG.querySelector(".popup__image");
export const popupCap = popupIMG.querySelector(".popup__caption");
//form
export const formElement = document.querySelector(".popup__form");
export const inputElement = formElement.querySelector('.popup__input');
export const nameInput = formElement.querySelector(".popup__input_type_name");
export const jobInput = formElement.querySelector(
  ".popup__input_type_description"
);
export const nameProfile = document.querySelector(".profile__title");
export const jobProfile = document.querySelector(".profile__description");
//NewCard
export const formCard = document.forms["new-place"];
export const nameCard = formCard.querySelector(".popup__input_type_card-name");
export const linkCard = formCard.querySelector(".popup__input_type_url");

export const EditProfile = document.forms['edit-profile'];
//avatar
export const formNewAvatar = document.forms["new-avatar"];
export const popupAvatar = document.querySelector(".popup_type_new-avatar");
export const profileImage = document.querySelector(".profile__image");
export const popupUrl = formNewAvatar.querySelector(".popup__input_type_url");
export const btnSave = formNewAvatar.querySelector(".button");
//config valid
export const validationConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  popupErrorClass: "popup__input-error",
  submitButtonSelector: ".popup__button",
  inputErrorClass: "popup__input-messange-error",
  errorClass: "popup__input-messange-error_active",
};