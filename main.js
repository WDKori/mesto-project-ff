/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/pages/index.css":
/*!*****************************!*\
  !*** ./src/pages/index.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://mesto-project-ff/./src/pages/index.css?");

/***/ }),

/***/ "./src/scripts/cards.js":
/*!******************************!*\
  !*** ./src/scripts/cards.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createCard: () => (/* binding */ createCard),\n/* harmony export */   initialCards: () => (/* binding */ initialCards)\n/* harmony export */ });\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ \"./src/scripts/index.js\");\n\nvar initialCards = [{\n  name: 'Архыз',\n  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'\n}, {\n  name: 'Челябинская область',\n  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'\n}, {\n  name: 'Иваново',\n  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'\n}, {\n  name: 'Камчатка',\n  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'\n}, {\n  name: 'Холмогорский район',\n  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'\n}, {\n  name: 'Байкал',\n  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'\n}];\n\n// @todo: Функция создания карточки\n\nfunction createCard(cardData, toggleLike, openImageModal) {\n  var cardElement = _index_js__WEBPACK_IMPORTED_MODULE_0__.cardTemplate.cloneNode(true);\n  var cardImage = cardElement.querySelector('.card__image');\n  var cardTitle = cardElement.querySelector('.card__title');\n  var deleteButton = cardElement.querySelector('.card__delete-button');\n  var likeButton = cardElement.querySelector('.card__like-button');\n  cardImage.src = cardData.link;\n  cardImage.alt = cardData.name;\n  cardTitle.textContent = cardData.name;\n\n  // Лайк\n  likeButton.addEventListener('click', function () {\n    return toggleLike(likeButton);\n  });\n\n  // Удаление карточки\n  deleteButton.addEventListener('click', function () {\n    return cardElement.remove();\n  });\n\n  // Открытие полноразмерного изображения\n  cardImage.addEventListener('click', function () {\n    openImageModal(cardData.link, cardData.name);\n  });\n  return cardElement;\n}\n\n//# sourceURL=webpack://mesto-project-ff/./src/scripts/cards.js?");

/***/ }),

/***/ "./src/scripts/index.js":
/*!******************************!*\
  !*** ./src/scripts/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   cardTemplate: () => (/* binding */ cardTemplate),\n/* harmony export */   imagePopup: () => (/* binding */ imagePopup),\n/* harmony export */   imagePopupCaption: () => (/* binding */ imagePopupCaption),\n/* harmony export */   imagePopupImg: () => (/* binding */ imagePopupImg),\n/* harmony export */   openImageModal: () => (/* binding */ openImageModal),\n/* harmony export */   toggleLike: () => (/* binding */ toggleLike)\n/* harmony export */ });\n/* harmony import */ var _pages_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pages/index.css */ \"./src/pages/index.css\");\n/* harmony import */ var _cards_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cards.js */ \"./src/scripts/cards.js\");\n/* harmony import */ var _modal_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal.js */ \"./src/scripts/modal.js\");\n\n\n\n\n// @todo: DOM узлы\nvar cardTemplate = document.querySelector('#card-template').content.querySelector('.card');\nvar cardsContainer = document.querySelector('.places__list');\nvar popups = document.querySelectorAll('.popup');\nvar closeButtons = document.querySelectorAll('.popup__close');\nvar editProfileButton = document.querySelector('.profile__edit-button');\nvar profileTitle = document.querySelector('.profile__title');\nvar profileDescription = document.querySelector('.profile__description');\nvar editPopup = document.querySelector('.popup_type_edit');\nvar editProfileForm = editPopup.querySelector('.popup__form');\nvar profileNameInput = editProfileForm.querySelector('.popup__input_type_name');\nvar profileDescriptionInput = editProfileForm.querySelector('.popup__input_type_description');\nvar addCardForm = document.querySelector('.popup__form[name=\"new-place\"]');\nvar addCardButton = document.querySelector('.profile__add-button');\nvar cardNameInput = addCardForm.querySelector('.popup__input_type_card-name');\nvar cardLinkInput = addCardForm.querySelector('.popup__input_type_url');\nvar imagePopup = document.querySelector('.popup_type_image');\nvar imagePopupImg = imagePopup.querySelector('.popup__image');\nvar imagePopupCaption = imagePopup.querySelector('.popup__caption');\n\n// Функция лайка карточки\nfunction toggleLike(likeButton) {\n  likeButton.classList.toggle('card__like-button_is-active');\n}\n// @todo: Вывести карточки на страницу\n\nfunction showCard(initialCards) {\n  initialCards.forEach(function (cardData) {\n    var cardElement = (0,_cards_js__WEBPACK_IMPORTED_MODULE_1__.createCard)(cardData, toggleLike, openImageModal);\n    cardsContainer.append(cardElement);\n  });\n}\n\n// Открытие попапов\neditProfileButton.addEventListener('click', function () {\n  profileNameInput.value = profileTitle.textContent;\n  profileDescriptionInput.value = profileDescription.textContent;\n  (0,_modal_js__WEBPACK_IMPORTED_MODULE_2__.openModal)(editPopup);\n});\naddCardButton.addEventListener('click', function () {\n  var addPopup = document.querySelector('.popup_type_new-card');\n  (0,_modal_js__WEBPACK_IMPORTED_MODULE_2__.openModal)(addPopup);\n});\n\n// Открытие попапа с изображением\nfunction openImageModal(link, name) {\n  imagePopupImg.src = link;\n  imagePopupImg.alt = name;\n  imagePopupCaption.textContent = name;\n  (0,_modal_js__WEBPACK_IMPORTED_MODULE_2__.openModal)(imagePopup);\n}\n\n// Обработчик отправки формы для редактирования профиля\n\neditProfileForm.addEventListener('submit', function (evt) {\n  evt.preventDefault();\n  profileTitle.textContent = profileNameInput.value;\n  profileDescription.textContent = profileDescriptionInput.value;\n  (0,_modal_js__WEBPACK_IMPORTED_MODULE_2__.closeModal)(editPopup);\n  editProfileForm.reset();\n});\n\n// Обработчик отправки формы для добавления карточки\naddCardForm.addEventListener('submit', function (evt) {\n  evt.preventDefault();\n  var cardData = {\n    name: cardNameInput.value,\n    link: cardLinkInput.value\n  };\n  var newCard = (0,_cards_js__WEBPACK_IMPORTED_MODULE_1__.createCard)(cardData, toggleLike, openImageModal);\n  cardsContainer.prepend(newCard);\n  (0,_modal_js__WEBPACK_IMPORTED_MODULE_2__.closeModal)(addCardForm.closest('.popup'));\n  addCardForm.reset();\n});\n\n// Закрытие попапов\ncloseButtons.forEach(function (btn) {\n  btn.addEventListener('click', function (evt) {\n    var popup = evt.target.closest('.popup');\n    (0,_modal_js__WEBPACK_IMPORTED_MODULE_2__.closeModal)(popup);\n  });\n});\n\n// Закрытие попапов по клику на оверлей\npopups.forEach(function (popup) {\n  popup.addEventListener('mousedown', _modal_js__WEBPACK_IMPORTED_MODULE_2__.closeModalOnOverlayClick);\n});\n\n// Инициализация карточек\nshowCard(_cards_js__WEBPACK_IMPORTED_MODULE_1__.initialCards);\n\n//# sourceURL=webpack://mesto-project-ff/./src/scripts/index.js?");

/***/ }),

/***/ "./src/scripts/modal.js":
/*!******************************!*\
  !*** ./src/scripts/modal.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   closeModal: () => (/* binding */ closeModal),\n/* harmony export */   closeModalOnOverlayClick: () => (/* binding */ closeModalOnOverlayClick),\n/* harmony export */   openModal: () => (/* binding */ openModal)\n/* harmony export */ });\n// Открытие попапа\nfunction openModal(popup) {\n  popup.classList.add('popup_is-opened');\n  document.addEventListener('keydown', closeModalOnEsc);\n}\n\n// Закрытие попапа\nfunction closeModal(popup) {\n  popup.classList.remove('popup_is-opened');\n  document.removeEventListener('keydown', closeModalOnEsc);\n}\n\n// Закрытие по нажатию Esc\nfunction closeModalOnEsc(evt) {\n  if (evt.key === 'Escape') {\n    var openedPopup = document.querySelector('.popup_is-opened');\n    if (openedPopup) {\n      closeModal(openedPopup);\n    }\n  }\n}\n\n// Закрытие по клику на оверлей\nfunction closeModalOnOverlayClick(evt) {\n  if (evt.target.classList.contains('popup')) {\n    closeModal(evt.target);\n  }\n}\n\n//# sourceURL=webpack://mesto-project-ff/./src/scripts/modal.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/scripts/index.js");
/******/ 	
/******/ })()
;