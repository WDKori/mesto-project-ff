import '../pages/index.css'
import { createCard } from './card.js'
import { openModal, closeModal, closeModalOnOverlayClick } from './modal.js'
import { enableValidation, clearValidation } from './validate.js'
import {
  getUserInfo,
  getInitialCards,
  updateUserInfo,
  addNewCard,
  deleteCard,
  unlikeCard,
  likeCard,
  updateAvatar,
} from './api.js'

// @todo: DOM узлы
export const cardTemplate = document
  .querySelector('#card-template')
  .content.querySelector('.card')

const cardsContainer = document.querySelector('.places__list')

const popups = document.querySelectorAll('.popup')
const closeButtons = document.querySelectorAll('.popup__close')

const avatarEditButton = document.querySelector('.profile__edit-avatar-button')
const avatarPopup = document.querySelector('.popup_type_edit-avatar')
const avatarForm = avatarPopup.querySelector('.popup__form')
const avatarInput = avatarForm.querySelector('.popup__input_type_avatar')
const profileImage = document.querySelector('.profile__image')

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

const confirmPopup = document.querySelector('.popup_type_confirm-delete')
const confirmForm = confirmPopup.querySelector('.popup__form')

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

    if (userData.avatar) {
      profileImage.style.backgroundImage = `url(${userData.avatar})`
    }

    cards.reverse().forEach((cardData) => {
      const cardElement = createCard(
        cardData,
        toggleLike,
        handleDelete,
        openImageModal,
        currentUserId
      )
      cardsContainer.prepend(cardElement)
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

// Открытие попапа аватара
avatarEditButton.addEventListener('click', () => {
  avatarForm.reset()
  openModal(avatarPopup)
})

// Открытие попапа с изображением
export function openImageModal(link, name) {
  imagePopupImg.src = link
  imagePopupImg.alt = name
  imagePopupCaption.textContent = name

  openModal(imagePopup)
}

// Открытие попапа с подтверждением удаления

export function openConfirmPopup(cardElement, cardId) {
  openModal(confirmPopup)

  const deleteButton = confirmPopup.querySelector('.popup__button_type_delete')

  deleteButton.onclick = null

  deleteButton.onclick = (evt) => {
    evt.preventDefault()

    deleteCard(cardId)
      .then(() => {
        cardElement.remove()
        closeModal(confirmPopup)
      })
      .catch((err) => console.error('Ошибка при удалении карточки:', err))
  }
}

// Обработчик формы для редактирования аватара

avatarForm.addEventListener('submit', (evt) => {
  evt.preventDefault()
  const avatarUrl = avatarInput.value
  const submitButton = avatarForm.querySelector(
    validationConfig.submitButtonSelector
  )
  submitButton.textContent = 'Сохранение...'
  submitButton.disabled = true

  updateAvatar(avatarUrl)
    .then((res) => {
      profileImage.style.backgroundImage = `url(${res.avatar})`
      closeModal(avatarPopup)
    })
    .catch((err) => console.error('Ошибка при обновлении аватара:', err))
    .finally(() => {
      submitButton.textContent = 'Сохранить'
      submitButton.disabled = false
    })
})

// Обработчик отправки формы для редактирования профиля

editProfileForm.addEventListener('submit', (evt) => {
  evt.preventDefault()

  const name = profileNameInput.value
  const about = profileDescriptionInput.value
  const submitButton = editProfileForm.querySelector(
    validationConfig.submitButtonSelector
  )
  submitButton.textContent = 'Сохранение...'
  submitButton.disabled = true

  updateUserInfo({ name, about })
    .then((userData) => {
      profileTitle.textContent = userData.name
      profileDescription.textContent = userData.about
      closeModal(editPopup)
      editProfileForm.reset()
    })
    .catch((err) => console.error(`Ошибка при обновлении профиля: ${err}`))
    .finally(() => {
      submitButton.textContent = 'Сохранить'
      submitButton.disabled = false
    })
})

// Обработчик отправки формы для добавления карточки
addCardForm.addEventListener('submit', (evt) => {
  evt.preventDefault()

  const name = cardNameInput.value
  const link = cardLinkInput.value
  const submitButton = addCardForm.querySelector(
    validationConfig.submitButtonSelector
  )
  submitButton.textContent = 'Сохранение...'
  submitButton.disabled = true

  addNewCard({ name, link })
    .then((cardData) => {
      const newCard = createCard(
        cardData,
        toggleLike,
        handleDelete,
        openImageModal,
        currentUserId
      )
      cardsContainer.prepend(newCard)

      closeModal(addCardForm.closest('.popup'))
      addCardForm.reset()
    })
    .catch((err) => {
      console.error(`Ошибка при добавлении карточки: ${err}`)
    })
    .finally(() => {
      submitButton.textContent = 'Добавить'
      submitButton.disabled = false
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
export function toggleLike(likeButton, cardId) {
  const cardElement = likeButton.closest('.card')
  const likeCountElement = cardElement.querySelector('.card__like-count')
  const isLiked = likeButton.classList.contains('card__like-button_is-active')

  likeButton.disabled = true

  const apiMethod = isLiked ? unlikeCard : likeCard
  const actionName = isLiked ? 'снятии' : 'постановке'

  apiMethod(cardId)
    .then((cardData) => {
      likeButton.classList.toggle('card__like-button_is-active')
      likeCountElement.textContent = cardData.likes.length
    })
    .catch((err) => {
      console.error(`Ошибка при ${actionName} лайка:`, err)
    })
    .finally(() => {
      likeButton.disabled = false
    })
}

// Функция удаления карточки

function handleDelete(cardElement, cardId) {
  openConfirmPopup(cardElement, cardId)
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
