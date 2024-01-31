import "./pages/index.css";
import * as base from "./scripts/base.js";
import "./scripts/card.js";
import {
  OpeningPopUp,
  closePopupByClick,
  ClosingPopUp,
} from "./scripts/modal.js";
//Form
function handleFormSubmit(evt) {
  evt.preventDefault();

  const nameValue = base.nameInput.value;
  const jobValue = base.jobInput.value;

  base.nameProfile.textContent = nameValue;
  base.jobProfile.textContent = jobValue;

  ClosingPopUp(base.popupEdit);
}
base.formElement.addEventListener("submit", handleFormSubmit);
//MODAL
// edit
base.buttonEdit.addEventListener("click", (evt) => {
  base.nameInput.value = base.nameProfile.textContent;
  base.jobInput.value = base.jobProfile.textContent;
  OpeningPopUp(base.popupEdit);
});
base.popupEdit.addEventListener("click", closePopupByClick);
//profile
base.buttonCards.addEventListener("click", (evt) => {
  OpeningPopUp(base.popupCards);
});
base.popupCards.addEventListener("click", closePopupByClick);

