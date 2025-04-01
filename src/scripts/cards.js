import { cardTemplate } from './index.js'

export const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg',
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg',
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg',
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg',
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg',
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg',
  },
]

// @todo: Темплейт карточки

// @todo: Функция создания карточки

export function createCard(cardData, toggleLike, openImageModal) {
  const cardElement = cardTemplate.cloneNode(true)

  const cardImage = cardElement.querySelector('.card__image')
  const cardTitle = cardElement.querySelector('.card__title')
  const deleteButton = cardElement.querySelector('.card__delete-button')
  const likeButton = cardElement.querySelector('.card__like-button')

  cardImage.src = cardData.link
  cardImage.alt = cardData.name
  cardTitle.textContent = cardData.name

  // Лайк
  likeButton.addEventListener('click', () => toggleLike(likeButton))

  // Удаление карточки
  deleteButton.addEventListener('click', () => cardElement.remove())

  // Открытие полноразмерного изображения
  cardImage.addEventListener('click', () => {
    openImageModal(cardData.link, cardData.name)
  })

  return cardElement
}

// Функция удаления карточки

// Функция лайка карточки
