import { cardTemplate, openConfirmPopup } from './index.js'

// @todo: Функция создания карточки

export function createCard(cardData, toggleLike, openImageModal, userId) {
  const cardElement = cardTemplate.cloneNode(true)
  const cardImage = cardElement.querySelector('.card__image')
  const cardTitle = cardElement.querySelector('.card__title')
  const deleteButton = cardElement.querySelector('.card__delete-button')
  const likeButton = cardElement.querySelector('.card__like-button')
  const likeCount = cardElement.querySelector('.card__like-count')

  cardImage.src = cardData.link
  cardImage.alt = cardData.name
  cardTitle.textContent = cardData.name

  if (cardData.owner._id !== userId) {
    deleteButton.remove()
  }

  // Установка количества лайков
  likeCount.textContent = cardData.likes.length

  // Устанавливаем активность кнопки лайка, если карточка лайкнута
  if (cardData.likes.some((like) => like._id === userId)) {
    likeButton.classList.add('card__like-button_is-active')
  }

  // Лайк
  likeButton.addEventListener('click', () =>
    toggleLike(likeButton, cardData._id)
  )

  // Открытие полноразмерного изображения
  cardImage.addEventListener('click', () => {
    openImageModal(cardData.link, cardData.name)
  })

  // Удаление доступно только владельцу

  if (cardData.owner._id !== userId) {
    deleteButton.remove()
  } else {
    // Обработчик для удаления карточки
    deleteButton.addEventListener('click', () => {
      openConfirmPopup(cardElement, cardData._id)
    })
  }

  return cardElement
}
