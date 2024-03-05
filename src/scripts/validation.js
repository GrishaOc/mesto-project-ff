function showError(formElement,inputElement,errorMessage, validationConfig){
  const errorElement  = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(validationConfig.popupErrorClass);
  errorElement.classList.add(validationConfig.errorClass);
  errorElement.textContent = errorMessage;
}

function hideError(formElement,inputElement, validationConfig){
  const errorElement  = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(validationConfig.popupErrorClass);
  errorElement.classList.remove(validationConfig.errorClass);
  errorElement.textContent = '';
}
const checkInputValidity = (formElement,inputElement, validationConfig) => { 
  if (inputElement.validity.patternMismatch) { 
    inputElement.setCustomValidity(inputElement.dataset.errorMessage); 
  } else { 
    inputElement.setCustomValidity(""); 
  } 
  if (!inputElement.validity.valid) { 
    showError(formElement,inputElement,inputElement.validationMessage, validationConfig); 
  } else { 
    hideError(formElement,inputElement, validationConfig); 
  } 
}; 
function setEventListeners(formElement, validationConfig) {
  const inputList = Array.from(formElement.querySelectorAll(validationConfig.inputSelector));
  const buttonElement = formElement.querySelector(validationConfig.buttonSelector);
  inputList.forEach((inputElement)=>{
    inputElement.addEventListener('input', ()=>{
          checkInputValidity(formElement,inputElement, validationConfig);
          toggleButtonState(buttonElement, inputList); 
      });
      
  })
}
  export const  clearValidation = (formElement, validationConfig) =>{
    const inputList = Array.from(formElement.querySelectorAll(validationConfig.inputSelector));
    const buttonElement = formElement.querySelector(validationConfig.buttonSelector);
  inputList.forEach((inputElement) => {
    hideError(formElement,inputElement, validationConfig);
  });
  formElement.reset()
  toggleButtonState(buttonElement,inputList)
}


export const enableValidation = (validationConfig) => {
  const formList = Array.from(document.querySelectorAll(validationConfig.formSelector));
  formList.forEach((formElement) => {
    setEventListeners(formElement,validationConfig);
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