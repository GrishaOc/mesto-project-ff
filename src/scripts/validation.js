const showError = (formElement, inputElement, errorMessage) => {
  const errorElement  = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add("popup__input-error");
  errorElement.textContent = errorMessage;
  errorElement.classList.add("popup__input-messange-error_active");
};
const hideError = (formElement, inputElement) => {
  const errorElement  = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove("popup__input-error");
  errorElement .classList.remove("popup__input-messange-error_active");
  errorElement .textContent = "";
};
const checkInputValidity = (formElement, inputElement) => {
  if (inputElement.validity.patternMismatch) {
    inputElement.setCustomValidity(inputElement.dataset.errorMessage);
  } else {
    inputElement.setCustomValidity("");
  }
  if (!inputElement.validity.valid) {
    showError(formElement,inputElement, inputElement.validationMessage);
  } else {
    hideError(formElement,inputElement);
  }
};
const setEventListeners = (formElement) => {
  const buttonElement = formElement.querySelector('.popup__button');
  const inputList = Array.from(formElement.querySelectorAll('.popup__input'));
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      checkInputValidity(formElement, inputElement)
      toggleButtonState(buttonElement, inputList);
    });
  });
};
  export const  clearValidation = (formElement) =>{
  const buttonElement = formElement.querySelector('.popup__button');
  const inputList = Array.from(formElement.querySelectorAll('.popup__input'));
  inputList.forEach((inputElement) => {
    const errorElement  = formElement.querySelector(`.${inputElement.id}-error`);
    hideError(inputElement,errorElement,formElement);
  });
  formElement.reset()
  toggleButtonState(buttonElement,inputList)
}


export const enableValidation = () => {
  const formList = Array.from(document.querySelectorAll('.popup__form'));
  formList.forEach((formElement) => {
    setEventListeners(formElement);
  });
};

function hasInvalidInput(inputList){
  return inputList.some((inputElement)=>{
      return !inputElement.validity.valid;
  });
}

function toggleButtonState(buttonElement, inputList){
  buttonElement.disabled = hasInvalidInput(inputList);
}

