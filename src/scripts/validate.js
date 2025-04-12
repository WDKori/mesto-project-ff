// Функция показа ошибки
const showInputError = (formElement, inputElement, errorMessage, settings) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`)
  inputElement.classList.add(settings.inputErrorClass)
  errorElement.textContent = errorMessage
  errorElement.classList.add(settings.errorClass)
}

// Функция скрытия ошибки
const hideInputError = (formElement, inputElement, settings) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`)
  inputElement.classList.remove(settings.inputErrorClass)
  errorElement.textContent = ''
  errorElement.classList.remove(settings.errorClass)
}

// Отключение кнопки submit
const disableSubmitButton = (buttonElement, settings) => {
  buttonElement.disabled = true
  buttonElement.classList.add(settings.inactiveButtonClass)
}

// Проверка валидности поля
const checkInputValidity = (formElement, inputElement, settings) => {
  if (inputElement.validity.patternMismatch) {
    // Кастомное сообщение только для ошибки паттерна
    showInputError(
      formElement,
      inputElement,
      inputElement.dataset.errorMessage,
      settings
    )
  } else if (!inputElement.validity.valid) {
    // Стандартные сообщения браузера для других ошибок
    showInputError(
      formElement,
      inputElement,
      inputElement.validationMessage,
      settings
    )
  } else {
    hideInputError(formElement, inputElement, settings)
  }
}

// Проверка всех полей формы
const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => !inputElement.validity.valid)
}

// Переключение состояния кнопки
const toggleButtonState = (inputList, buttonElement, settings) => {
  if (hasInvalidInput(inputList)) {
    disableSubmitButton(buttonElement, settings)
  } else {
    buttonElement.disabled = false
    buttonElement.classList.remove(settings.inactiveButtonClass)
  }
}

// Установка слушателей для всех полей формы
const setEventListeners = (formElement, settings) => {
  const inputList = Array.from(
    formElement.querySelectorAll(settings.inputSelector)
  )
  const buttonElement = formElement.querySelector(settings.submitButtonSelector)

  toggleButtonState(inputList, buttonElement, settings)

  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      checkInputValidity(formElement, inputElement, settings)
      toggleButtonState(inputList, buttonElement, settings)
    })
  })
}

// Включение валидации всех форм
export const enableValidation = (settings) => {
  const formList = Array.from(document.querySelectorAll(settings.formSelector))
  formList.forEach((formElement) => {
    setEventListeners(formElement, settings)
  })
}

// Очистка ошибок валидации
export const clearValidation = (formElement, settings) => {
  const inputList = Array.from(
    formElement.querySelectorAll(settings.inputSelector)
  )
  const buttonElement = formElement.querySelector(settings.submitButtonSelector)

  inputList.forEach((inputElement) => {
    hideInputError(formElement, inputElement, settings)
  })

  disableSubmitButton(buttonElement, settings)
}
