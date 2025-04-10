import '../pages/index.css'
import { createCard } from './cards.js'
import { openModal, closeModal, closeModalOnOverlayClick } from './modal.js'
import { enableValidation, clearValidation } from './validate.js'
import {
  getUserInfo,
  getInitialCards,
  updateUserInfo,
  addNewCard,
} from './api.js'

// @todo: DOM узлы
export const cardTemplate = document
  .querySelector('#card-template')
  .content.querySelector('.card')

const cardsContainer = document.querySelector('.places__list')

const popups = document.querySelectorAll('.popup')
const closeButtons = document.querySelectorAll('.popup__close')

const editProfileButton = document.querySelector('.profile__edit-button')
const profileTitle = document.querySelector('.profile__title')
const profileDescription = document.querySelector('.profile__description')
const editPopup = document.querySelector('.popup_type_edit')
const editProfileForm = editPopup.querySelector('.popup__form')
const profileNameInput = editProfileForm.querySelector(
  '.popup__input_type_name'
)
const profileDescriptionInput = editProfileForm.querySelector(
  '.popup__input_type_description'
)

const addCardForm = document.querySelector('.popup__form[name="new-place"]')
const addCardButton = document.querySelector('.profile__add-button')
const cardNameInput = addCardForm.querySelector('#card-title-input')
const cardLinkInput = addCardForm.querySelector('#card-link-input')

export const imagePopup = document.querySelector('.popup_type_image')
export const imagePopupImg = imagePopup.querySelector('.popup__image')
export const imagePopupCaption = imagePopup.querySelector('.popup__caption')

const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible',
}

let currentUserId

//  Получение данных и отображение карточек и профиля
Promise.all([getUserInfo(), getInitialCards()])
  .then(([userData, cards]) => {
    profileTitle.textContent = userData.name
    profileDescription.textContent = userData.about
    currentUserId = userData._id

    cards.reverse().forEach((cardData) => {
      const cardElement = createCard(
        cardData,
        toggleLike,
        openImageModal,
        currentUserId
      )
      cardsContainer.append(cardElement)
    })
  })
  .catch((err) => console.error(`Ошибка при загрузке данных: ${err}`))

// Подключение валидации

enableValidation(validationConfig)

// Открытие попапов

addCardButton.addEventListener('click', () => {
  clearValidation(editProfileForm, validationConfig)
  const addPopup = document.querySelector('.popup_type_new-card')

  openModal(addPopup)
})

// Открытие попапа с изображением
export function openImageModal(link, name) {
  imagePopupImg.src = link
  imagePopupImg.alt = name
  imagePopupCaption.textContent = name

  openModal(imagePopup)
}

// Обработчик отправки формы для редактирования профиля

editProfileForm.addEventListener('submit', (evt) => {
  evt.preventDefault()

  const name = profileNameInput.value
  const about = profileDescriptionInput.value

  updateUserInfo({ name, about })
    .then((userData) => {
      profileTitle.textContent = userData.name
      profileDescription.textContent = userData.about
      closeModal(editPopup)
      editProfileForm.reset()
    })
    .catch((err) => console.error(`Ошибка при обновлении профиля: ${err}`))
})

// Обработчик отправки формы для добавления карточки
addCardForm.addEventListener('submit', (evt) => {
  evt.preventDefault()

  const name = cardNameInput.value
  const link = cardLinkInput.value

  addNewCard({ name, link })
    .then((cardData) => {
      const newCard = createCard(cardData, toggleLike, openImageModal)
      cardsContainer.prepend(newCard)

      closeModal(addCardForm.closest('.popup'))
      addCardForm.reset()
    })
    .catch((err) => {
      console.error(`Ошибка при добавлении карточки: ${err}`)
    })
})

editProfileButton.addEventListener('click', () => {
  profileNameInput.value = profileTitle.textContent
  profileDescriptionInput.value = profileDescription.textContent
  clearValidation(editProfileForm, validationConfig)
  const submitButton = editProfileForm.querySelector(
    validationConfig.submitButtonSelector
  )
  submitButton.disabled = false
  submitButton.classList.remove(validationConfig.inactiveButtonClass)
  openModal(editPopup)
})

addCardButton.addEventListener('click', () => {
  clearValidation(addCardForm, validationConfig)
  openModal(document.querySelector('.popup_type_new-card'))
  addCardForm.reset()
})

// Функция лайка карточки
export function toggleLike(likeButton) {
  likeButton.classList.toggle('card__like-button_is-active')
}

// Закрытие попапов
closeButtons.forEach((btn) => {
  btn.addEventListener('click', (evt) => {
    const popup = evt.target.closest('.popup')
    closeModal(popup)
  })
})

// Закрытие попапов по клику на оверлей
popups.forEach((popup) => {
  popup.addEventListener('mousedown', closeModalOnOverlayClick)
})
