import "./pages/index.css";
import * as base from "./scripts/base.js";
import "./scripts/card.js";
import {
  openPopUp,
  closePopupByClick,
  closePopUp,
} from "./scripts/modal.js";
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
});
base.popupEdit.addEventListener("click", closePopupByClick);
//profile
base.buttonCards.addEventListener("click", (evt) => {
  openPopUp(base.popupCards);
});
base.popupCards.addEventListener("click", closePopupByClick);

