import { cardTemplate } from './index.js'

// @todo: Функция создания карточки

export function createCard(cardData, toggleLike, openImageModal, userId) {
  const cardElement = cardTemplate.cloneNode(true)
  const cardImage = cardElement.querySelector('.card__image')
  const cardTitle = cardElement.querySelector('.card__title')
  const deleteButton = cardElement.querySelector('.card__delete-button')
  const likeButton = cardElement.querySelector('.card__like-button')

  cardImage.src = cardData.link
  cardImage.alt = cardData.name
  cardTitle.textContent = cardData.name

  if (cardData.owner._id !== userId) {
    deleteButton.remove()
  }

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
