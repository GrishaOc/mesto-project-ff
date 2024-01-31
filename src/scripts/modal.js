export function OpeningPopUp(Element) {
  Element.classList.add("popup_is-opened");
  document.addEventListener("keydown", ClosingPopUpESC);
  Element.addEventListener("click", closePopupByClick);
}
export function ClosingPopUp(Element) {
  Element.classList.replace("popup_is-opened", "popup_is-animated");
  document.removeEventListener("keydown", ClosingPopUpESC);
  Element.removeEventListener("click", closePopupByClick);
}

function ClosingPopUpESC(evt) {
  if (evt.key === "Escape") {
    const openedPopup = document.querySelector(".popup_is-opened");
    ClosingPopUp(openedPopup);
  }
}
export function closePopupByClick(evt) {
  if (
    evt.target.classList.contains("popup__close") ||
    evt.target.classList.contains("popup")
  ) {
    ClosingPopUp(evt.currentTarget);
  }
}
