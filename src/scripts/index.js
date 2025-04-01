import '../pages/index.css'
import { createCard, initialCards } from './cards.js'
import {
  openModal,
  closeModal,
  closeModalOnOverlayClick,
  openImageModal,
} from './modal.js'

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
const editProfileForm = document.querySelector('.popup__form')
const profileNameInput = editProfileForm.querySelector(
  '.popup__input_type_name'
)
const profileDescriptionInput = editProfileForm.querySelector(
  '.popup__input_type_description'
)

const addCardForm = document.querySelector('.popup__form[name="new-place"]')
const addCardButton = document.querySelector('.profile__add-button')
const cardNameInput = addCardForm.querySelector('.popup__input_type_card-name')
const cardLinkInput = addCardForm.querySelector('.popup__input_type_url')

export const imagePopup = document.querySelector('.popup_type_image')
export const imagePopupImg = imagePopup.querySelector('.popup__image')
export const imagePopupCaption = imagePopup.querySelector('.popup__caption')

// Функция лайка карточки
export function toggleLike(likeButton) {
  likeButton.classList.toggle('card__like-button_is-active')
}
// @todo: Вывести карточки на страницу

function showCard(initialCards) {
  initialCards.forEach((cardData) => {
    const cardElement = createCard(cardData, toggleLike, openImageModal)

    cardsContainer.append(cardElement)
  })
}

// Открытие попапов
editProfileButton.addEventListener('click', () => {
  profileNameInput.value = profileTitle.textContent
  profileDescriptionInput.value = profileDescription.textContent
  openModal(editPopup)
})

addCardButton.addEventListener('click', () => {
  const addPopup = document.querySelector('.popup_type_new-card')
  openModal(addPopup)
})

// Обработчик отправки формы для редактирования профиля

editProfileForm.addEventListener('submit', (evt) => {
  evt.preventDefault()
  profileTitle.textContent = profileNameInput.value
  profileDescription.textContent = profileDescriptionInput.value
  closeModal(editPopup)
  editProfileForm.reset()
})

// Обработчик отправки формы для добавления карточки
addCardForm.addEventListener('submit', (evt) => {
  evt.preventDefault()

  const cardData = {
    name: cardNameInput.value,
    link: cardLinkInput.value,
  }

  const newCard = createCard(cardData)
  cardsContainer.prepend(newCard)

  closeModal(addCardForm.closest('.popup'))
  addCardForm.reset()
})

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

// Инициализация карточек
showCard(initialCards)
