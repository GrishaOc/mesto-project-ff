function showError(inputElement, errorElement, validationConfig){
  inputElement.classList.add(validationConfig.popupErrorClass);
  errorElement.classList.add(validationConfig.errorClass);
  errorElement.textContent = inputElement.validationMessage;
  
}

function hideError(inputElement, errorElement, validationConfig){
  inputElement.classList.remove(validationConfig.popupErrorClass);
  errorElement.classList.remove(validationConfig.errorClass);
  errorElement.textContent = '';
}
function checkInputValidity(inputElement, form, validationConfig){
  const spanIdSelector = `#${inputElement.name}--error`;
  const errorElement = form.querySelector(spanIdSelector);
  
  if(inputElement.validity.patternMismatch) {
      inputElement.setCustomValidity(inputElement.dataset.errorMessage);
  }else{
    inputElement.setCustomValidity('');
  }
  if (inputElement.validity.valid){
      hideError(inputElement, errorElement, validationConfig)
  } else {
      showError(inputElement, errorElement, validationConfig)
  }
}
function setEventListeners(formElement, validationConfig) {
  const buttonElement = formElement.querySelector(validationConfig.submitButtonSelector);
  const inputList = Array.from(formElement.querySelectorAll(validationConfig.inputSelector));
  inputList.forEach((inputElement)=>{
    inputElement.addEventListener('input', ()=>{
          checkInputValidity(inputElement, formElement, validationConfig);
          toggleButtonState(buttonElement, inputList); 
      });
      
  })
}
  export const  clearValidation = (formElement, validationConfig) =>{
    const inputList = Array.from(formElement.querySelectorAll(validationConfig.inputSelector));
    const buttonElement = formElement.querySelector(validationConfig.submitButtonSelector);
  inputList.forEach((inputElement) => {
    const errorElement  = formElement.querySelector(`.${inputElement.id}-error`);
    hideError(inputElement,errorElement,formElement);
  });
  formElement.reset()
  toggleButtonState(buttonElement,inputList)
}


export const enableValidation = (validationConfig) => {
  const formList = Array.from(document.querySelectorAll(validationConfig.formSelector));
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

