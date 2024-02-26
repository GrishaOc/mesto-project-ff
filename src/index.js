import "./pages/index.css";
import * as base from "./scripts/base.js";
import "./scripts/card.js";
import {
  openPopUp,
  closePopupByClick,
  closePopUp,
} from "./scripts/modal.js";
import {clearValidation, enableValidation } from "./scripts/validation.js";
//Form
function handleProfileFormSubmit(evt) {
  evt.preventDefault();

  const nameValue = base.nameInput.value;
  const jobValue = base.jobInput.value;

  base.nameProfile.textContent = nameValue;
  base.jobProfile.textContent = jobValue;

  closePopUp(base.popupEdit);
}
base.formElement.addEventListener("submit", handleProfileFormSubmit);
//MODAL
// edit
base.buttonEdit.addEventListener("click", (evt) => {
  base.nameInput.value = base.nameProfile.textContent;
  base.jobInput.value = base.jobProfile.textContent;
  openPopUp(base.popupEdit);
  clearValidation(base.EditProfile,validationConfig,formElement)
});
base.popupEdit.addEventListener("click", closePopupByClick);
//profile
base.buttonCards.addEventListener("click", (evt) => {
  openPopUp(base.popupCards);
});
base.popupCards.addEventListener("click", closePopupByClick);

//validatioon
enableValidation(validationConfig); 
const  validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inputErrorClass: 'popup__input-messange-error',
  errorClass: 'popup__input-messange-error_active'
}