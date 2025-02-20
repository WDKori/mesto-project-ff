// @todo: Темплейт карточки

const cardTemplate = document
  .querySelector('#card-template')
  .content.querySelector('.card')

// @todo: DOM узлы

const cardsContainer = document.querySelector('.places__list')

// @todo: Функция создания карточки

function createCard(cardData) {
  const cardElement = cardTemplate.cloneNode(true)

  const cardImage = cardElement.querySelector('.card__image')
  const cardTitle = cardElement.querySelector('.card__title')
  const deleteButton = cardElement.querySelector('.card__delete-button')

  cardImage.src = cardData.link
  cardImage.alt = cardData.name
  cardTitle.textContent = cardData.name

  deleteButton.addEventListener('click', removeCard)

  return cardElement
}

// @todo: Функция удаления карточки

function removeCard(e) {
  const cardElement = e.target.closest('.card')
  cardElement.remove()
}

// @todo: Вывести карточки на страницу

function showCard(initialCards) {
  initialCards.forEach((cardData) => {
    const cardElement = createCard(cardData)

    cardsContainer.append(cardElement)
  })
}

showCard(initialCards)
