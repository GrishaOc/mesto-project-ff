export function openPopUp(element) {
  element.classList.add("popup_is-opened");
  document.addEventListener("keydown", closePopUpESC);
  element.addEventListener("click", closePopupByClick);
}
export function closePopUp(element) {
  element.classList.replace("popup_is-opened", "popup_is-animated");
  document.removeEventListener("keydown", closePopUpESC);
  element.removeEventListener("click", closePopupByClick);
}

function closePopUpESC(evt) {
  if (evt.key === "Escape") {
    const openedPopup = document.querySelector(".popup_is-opened");
    closePopUp(openedPopup);
  }
}
export function closePopupByClick(evt) {
  if (
    evt.target.classList.contains("popup__close") ||
    evt.target.classList.contains("popup")
  ) {
    closePopUp(evt.currentTarget);
  }
}
