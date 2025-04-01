// Открытие попапа
export function openModal(popup) {
  console.log('Открываем попап:', popup)

  if (!popup) {
    console.error('Ошибка: переданный popup не найден!')
    return
  }
  popup.classList.add('popup_is-opened')
  document.addEventListener('keydown', closeModalOnEsc)
}

// Закрытие попапа
export function closeModal(popup) {
  popup.classList.remove('popup_is-opened')
  document.removeEventListener('keydown', closeModalOnEsc)
}

// Закрытие по нажатию Esc
function closeModalOnEsc(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_is-opened')

    if (openedPopup) {
      closeModal(openedPopup)
    }
  }
}

// Закрытие по клику на оверлей
export function closeModalOnOverlayClick(evt) {
  if (evt.target.classList.contains('popup')) {
    closeModal(evt.target)
  }
}

// Открытие попапа с изображением
export function openImageModal(link, name) {
  const imagePopup = document.querySelector('.popup_type_image')
  const imagePopupImg = imagePopup.querySelector('.popup__image')
  const imagePopupCaption = imagePopup.querySelector('.popup__caption')

  imagePopupImg.src = link
  imagePopupImg.alt = name
  imagePopupCaption.textContent = name

  openModal(imagePopup)
}
