let cardToDelete = null
let cardIdToDelete = null

// Открытие попапа
export function openModal(popup) {
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
