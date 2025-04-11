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

/***/ "./src/scripts/api.js":
/*!****************************!*\
  !*** ./src/scripts/api.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getInitialCards: () => (/* binding */ getInitialCards),\n/* harmony export */   getUserInfo: () => (/* binding */ getUserInfo),\n/* harmony export */   updateUserInfo: () => (/* binding */ updateUserInfo)\n/* harmony export */ });\nvar config = {\n  baseUrl: 'https://nomoreparties.co/v1/wff-cohort-35',\n  headers: {\n    authorization: '205e9af0-dd27-4676-94b2-fc002db19adf',\n    'Content-Type': 'application/json'\n  }\n};\n\n// Загрузка данных пользователя\nfunction getUserInfo() {\n  return fetch(\"\".concat(config.baseUrl, \"/users/me\"), {\n    headers: config.headers\n  }).then(function (res) {\n    return res.ok ? res.json() : Promise.reject(\"\\u041E\\u0448\\u0438\\u0431\\u043A\\u0430: \".concat(res.status));\n  });\n}\n\n// Загрузка карточек\nfunction getInitialCards() {\n  return fetch(\"\".concat(config.baseUrl, \"/cards\"), {\n    headers: config.headers\n  }).then(function (res) {\n    return res.ok ? res.json() : Promise.reject(\"\\u041E\\u0448\\u0438\\u0431\\u043A\\u0430: \".concat(res.status));\n  });\n}\n\n// Данные пользователя\n\nfunction updateUserInfo(_ref) {\n  var name = _ref.name,\n    about = _ref.about;\n  return fetch(\"\".concat(config.baseUrl, \"/users/me\"), {\n    method: 'PATCH',\n    headers: config.headers,\n    body: JSON.stringify({\n      name: name,\n      about: about\n    })\n  }).then(function (res) {\n    if (res.ok) {\n      return res.json();\n    }\n    return Promise.reject(\"\\u041E\\u0448\\u0438\\u0431\\u043A\\u0430: \".concat(res.status));\n  });\n}\n\n\n//# sourceURL=webpack://mesto-project-ff/./src/scripts/api.js?");

/***/ }),

/***/ "./src/scripts/cards.js":
/*!******************************!*\
  !*** ./src/scripts/cards.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createCard: () => (/* binding */ createCard)\n/* harmony export */ });\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ \"./src/scripts/index.js\");\n\n\n// @todo: Функция создания карточки\n\nfunction createCard(cardData, toggleLike, openImageModal, userId) {\n  var cardElement = _index_js__WEBPACK_IMPORTED_MODULE_0__.cardTemplate.cloneNode(true);\n  var cardImage = cardElement.querySelector('.card__image');\n  var cardTitle = cardElement.querySelector('.card__title');\n  var deleteButton = cardElement.querySelector('.card__delete-button');\n  var likeButton = cardElement.querySelector('.card__like-button');\n  cardImage.src = cardData.link;\n  cardImage.alt = cardData.name;\n  cardTitle.textContent = cardData.name;\n  if (cardData.owner._id !== userId) {\n    deleteButton.remove();\n  }\n\n  // Лайк\n  likeButton.addEventListener('click', function () {\n    return toggleLike(likeButton);\n  });\n\n  // Удаление карточки\n  deleteButton.addEventListener('click', function () {\n    return cardElement.remove();\n  });\n\n  // Открытие полноразмерного изображения\n  cardImage.addEventListener('click', function () {\n    openImageModal(cardData.link, cardData.name);\n  });\n  return cardElement;\n}\n\n//# sourceURL=webpack://mesto-project-ff/./src/scripts/cards.js?");

/***/ }),

/***/ "./src/scripts/index.js":
/*!******************************!*\
  !*** ./src/scripts/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   cardTemplate: () => (/* binding */ cardTemplate),\n/* harmony export */   imagePopup: () => (/* binding */ imagePopup),\n/* harmony export */   imagePopupCaption: () => (/* binding */ imagePopupCaption),\n/* harmony export */   imagePopupImg: () => (/* binding */ imagePopupImg),\n/* harmony export */   openImageModal: () => (/* binding */ openImageModal),\n/* harmony export */   toggleLike: () => (/* binding */ toggleLike)\n/* harmony export */ });\n/* harmony import */ var _pages_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pages/index.css */ \"./src/pages/index.css\");\n/* harmony import */ var _cards_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cards.js */ \"./src/scripts/cards.js\");\n/* harmony import */ var _modal_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal.js */ \"./src/scripts/modal.js\");\n/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./validate.js */ \"./src/scripts/validate.js\");\n/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./api.js */ \"./src/scripts/api.js\");\nfunction _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(r, a) { if (r) { if (\"string\" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return \"Object\" === t && r.constructor && (t = r.constructor.name), \"Map\" === t || \"Set\" === t ? Array.from(r) : \"Arguments\" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }\nfunction _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }\nfunction _iterableToArrayLimit(r, l) { var t = null == r ? null : \"undefined\" != typeof Symbol && r[Symbol.iterator] || r[\"@@iterator\"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }\nfunction _arrayWithHoles(r) { if (Array.isArray(r)) return r; }\n\n\n\n\n\n\n// @todo: DOM узлы\nvar cardTemplate = document.querySelector('#card-template').content.querySelector('.card');\nvar cardsContainer = document.querySelector('.places__list');\nvar popups = document.querySelectorAll('.popup');\nvar closeButtons = document.querySelectorAll('.popup__close');\nvar editProfileButton = document.querySelector('.profile__edit-button');\nvar profileTitle = document.querySelector('.profile__title');\nvar profileDescription = document.querySelector('.profile__description');\nvar editPopup = document.querySelector('.popup_type_edit');\nvar editProfileForm = editPopup.querySelector('.popup__form');\nvar profileNameInput = editProfileForm.querySelector('.popup__input_type_name');\nvar profileDescriptionInput = editProfileForm.querySelector('.popup__input_type_description');\nvar addCardForm = document.querySelector('.popup__form[name=\"new-place\"]');\nvar addCardButton = document.querySelector('.profile__add-button');\nvar cardNameInput = addCardForm.querySelector('#card-title-input');\nvar cardLinkInput = addCardForm.querySelector('#card-link-input');\nvar imagePopup = document.querySelector('.popup_type_image');\nvar imagePopupImg = imagePopup.querySelector('.popup__image');\nvar imagePopupCaption = imagePopup.querySelector('.popup__caption');\nvar validationConfig = {\n  formSelector: '.popup__form',\n  inputSelector: '.popup__input',\n  submitButtonSelector: '.popup__button',\n  inactiveButtonClass: 'popup__button_disabled',\n  inputErrorClass: 'popup__input_type_error',\n  errorClass: 'popup__error_visible'\n};\nvar currentUserId;\n\n//  Получение данных и отображение карточек и профиля\nPromise.all([(0,_api_js__WEBPACK_IMPORTED_MODULE_4__.getUserInfo)(), (0,_api_js__WEBPACK_IMPORTED_MODULE_4__.getInitialCards)()]).then(function (_ref) {\n  var _ref2 = _slicedToArray(_ref, 2),\n    userData = _ref2[0],\n    cards = _ref2[1];\n  profileTitle.textContent = userData.name;\n  profileDescription.textContent = userData.about;\n  currentUserId = userData._id;\n  cards.reverse().forEach(function (cardData) {\n    var cardElement = (0,_cards_js__WEBPACK_IMPORTED_MODULE_1__.createCard)(cardData, toggleLike, openImageModal, currentUserId);\n    cardsContainer.append(cardElement);\n  });\n}).catch(function (err) {\n  return console.error(\"\\u041E\\u0448\\u0438\\u0431\\u043A\\u0430 \\u043F\\u0440\\u0438 \\u0437\\u0430\\u0433\\u0440\\u0443\\u0437\\u043A\\u0435 \\u0434\\u0430\\u043D\\u043D\\u044B\\u0445: \".concat(err));\n});\n\n// Подключение валидации\n\n(0,_validate_js__WEBPACK_IMPORTED_MODULE_3__.enableValidation)(validationConfig);\n\n// Функция лайка карточки\nfunction toggleLike(likeButton) {\n  likeButton.classList.toggle('card__like-button_is-active');\n}\n\n// Открытие попапов\n\naddCardButton.addEventListener('click', function () {\n  (0,_validate_js__WEBPACK_IMPORTED_MODULE_3__.clearValidation)(editProfileForm, validationConfig);\n  var addPopup = document.querySelector('.popup_type_new-card');\n  (0,_modal_js__WEBPACK_IMPORTED_MODULE_2__.openModal)(addPopup);\n});\n\n// Открытие попапа с изображением\nfunction openImageModal(link, name) {\n  imagePopupImg.src = link;\n  imagePopupImg.alt = name;\n  imagePopupCaption.textContent = name;\n  (0,_modal_js__WEBPACK_IMPORTED_MODULE_2__.openModal)(imagePopup);\n}\n\n// Обработчик отправки формы для редактирования профиля\n\neditProfileForm.addEventListener('submit', function (evt) {\n  evt.preventDefault();\n  var name = profileNameInput.value;\n  var about = profileDescriptionInput.value;\n  (0,_api_js__WEBPACK_IMPORTED_MODULE_4__.updateUserInfo)({\n    name: name,\n    about: about\n  }).then(function (userData) {\n    profileTitle.textContent = userData.name;\n    profileDescription.textContent = userData.about;\n    (0,_modal_js__WEBPACK_IMPORTED_MODULE_2__.closeModal)(editPopup);\n    editProfileForm.reset();\n  }).catch(function (err) {\n    return console.error(\"\\u041E\\u0448\\u0438\\u0431\\u043A\\u0430 \\u043F\\u0440\\u0438 \\u043E\\u0431\\u043D\\u043E\\u0432\\u043B\\u0435\\u043D\\u0438\\u0438 \\u043F\\u0440\\u043E\\u0444\\u0438\\u043B\\u044F: \".concat(err));\n  });\n});\n\n// Обработчик отправки формы для добавления карточки\naddCardForm.addEventListener('submit', function (evt) {\n  evt.preventDefault();\n  var cardData = {\n    name: cardNameInput.value,\n    link: cardLinkInput.value\n  };\n  var newCard = (0,_cards_js__WEBPACK_IMPORTED_MODULE_1__.createCard)(cardData, toggleLike, openImageModal);\n  cardsContainer.prepend(newCard);\n  (0,_modal_js__WEBPACK_IMPORTED_MODULE_2__.closeModal)(addCardForm.closest('.popup'));\n  addCardForm.reset();\n});\neditProfileButton.addEventListener('click', function () {\n  profileNameInput.value = profileTitle.textContent;\n  profileDescriptionInput.value = profileDescription.textContent;\n  (0,_validate_js__WEBPACK_IMPORTED_MODULE_3__.clearValidation)(editProfileForm, validationConfig);\n  var submitButton = editProfileForm.querySelector(validationConfig.submitButtonSelector);\n  submitButton.disabled = false;\n  submitButton.classList.remove(validationConfig.inactiveButtonClass);\n  (0,_modal_js__WEBPACK_IMPORTED_MODULE_2__.openModal)(editPopup);\n});\naddCardButton.addEventListener('click', function () {\n  (0,_validate_js__WEBPACK_IMPORTED_MODULE_3__.clearValidation)(addCardForm, validationConfig);\n  (0,_modal_js__WEBPACK_IMPORTED_MODULE_2__.openModal)(document.querySelector('.popup_type_new-card'));\n  addCardForm.reset();\n});\n\n// Закрытие попапов\ncloseButtons.forEach(function (btn) {\n  btn.addEventListener('click', function (evt) {\n    var popup = evt.target.closest('.popup');\n    (0,_modal_js__WEBPACK_IMPORTED_MODULE_2__.closeModal)(popup);\n  });\n});\n\n// Закрытие попапов по клику на оверлей\npopups.forEach(function (popup) {\n  popup.addEventListener('mousedown', _modal_js__WEBPACK_IMPORTED_MODULE_2__.closeModalOnOverlayClick);\n});\n\n//# sourceURL=webpack://mesto-project-ff/./src/scripts/index.js?");

/***/ }),

/***/ "./src/scripts/modal.js":
/*!******************************!*\
  !*** ./src/scripts/modal.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   closeModal: () => (/* binding */ closeModal),\n/* harmony export */   closeModalOnOverlayClick: () => (/* binding */ closeModalOnOverlayClick),\n/* harmony export */   openModal: () => (/* binding */ openModal)\n/* harmony export */ });\n// Открытие попапа\nfunction openModal(popup) {\n  popup.classList.add('popup_is-opened');\n  document.addEventListener('keydown', closeModalOnEsc);\n}\n\n// Закрытие попапа\nfunction closeModal(popup) {\n  popup.classList.remove('popup_is-opened');\n  document.removeEventListener('keydown', closeModalOnEsc);\n}\n\n// Закрытие по нажатию Esc\nfunction closeModalOnEsc(evt) {\n  if (evt.key === 'Escape') {\n    var openedPopup = document.querySelector('.popup_is-opened');\n    if (openedPopup) {\n      closeModal(openedPopup);\n    }\n  }\n}\n\n// Закрытие по клику на оверлей\nfunction closeModalOnOverlayClick(evt) {\n  if (evt.target.classList.contains('popup')) {\n    closeModal(evt.target);\n  }\n}\n\n//# sourceURL=webpack://mesto-project-ff/./src/scripts/modal.js?");

/***/ }),

/***/ "./src/scripts/validate.js":
/*!*********************************!*\
  !*** ./src/scripts/validate.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   clearValidation: () => (/* binding */ clearValidation),\n/* harmony export */   enableValidation: () => (/* binding */ enableValidation)\n/* harmony export */ });\n// Регулярные выражения для проверки полей\nvar nameRegex = /^[a-zA-Zа-яА-ЯёЁ\\s-]+$/;\nvar urlRegex = /^(https?:\\/\\/)[^\\s]+$/;\n\n// Функция показа ошибки\nvar showInputError = function showInputError(formElement, inputElement, errorMessage, settings) {\n  var errorElement = formElement.querySelector(\".\".concat(inputElement.id, \"-error\"));\n  inputElement.classList.add(settings.inputErrorClass);\n  errorElement.textContent = errorMessage;\n  errorElement.classList.add(settings.errorClass);\n};\n\n// Функция скрытия ошибки\nvar hideInputError = function hideInputError(formElement, inputElement, settings) {\n  var errorElement = formElement.querySelector(\".\".concat(inputElement.id, \"-error\"));\n  inputElement.classList.remove(settings.inputErrorClass);\n  errorElement.textContent = '';\n  errorElement.classList.remove(settings.errorClass);\n};\n\n// Проверка валидности поля с кастомными правилами\nvar checkInputValidity = function checkInputValidity(formElement, inputElement, settings) {\n  if (!inputElement.validity.valid) {\n    showInputError(formElement, inputElement, inputElement.validationMessage, settings);\n  } else if ((inputElement.name === 'name' || inputElement.name === 'place-name') && !nameRegex.test(inputElement.value)) {\n    showInputError(formElement, inputElement, inputElement.dataset.error, settings);\n  } else if (inputElement.name === 'link' && !urlRegex.test(inputElement.value)) {\n    showInputError(formElement, inputElement, 'Введите корректный URL', settings);\n  } else {\n    hideInputError(formElement, inputElement, settings);\n  }\n};\n\n// Проверка всех полей формы\nvar hasInvalidInput = function hasInvalidInput(inputList) {\n  return inputList.some(function (inputElement) {\n    if (inputElement.name === 'name' || inputElement.name === 'place-name') {\n      return !inputElement.validity.valid || !nameRegex.test(inputElement.value);\n    } else if (inputElement.name === 'link') {\n      return !inputElement.validity.valid || !urlRegex.test(inputElement.value);\n    }\n    return !inputElement.validity.valid;\n  });\n};\n\n// Переключение состояния кнопки\nvar toggleButtonState = function toggleButtonState(inputList, buttonElement, settings) {\n  if (hasInvalidInput(inputList)) {\n    buttonElement.disabled = true;\n    buttonElement.classList.add(settings.inactiveButtonClass);\n  } else {\n    buttonElement.disabled = false;\n    buttonElement.classList.remove(settings.inactiveButtonClass);\n  }\n};\n\n// Установка слушателей для всех полей формы\nvar setEventListeners = function setEventListeners(formElement, settings) {\n  var inputList = Array.from(formElement.querySelectorAll(settings.inputSelector));\n  var buttonElement = formElement.querySelector(settings.submitButtonSelector);\n  toggleButtonState(inputList, buttonElement, settings);\n  inputList.forEach(function (inputElement) {\n    inputElement.addEventListener('input', function () {\n      checkInputValidity(formElement, inputElement, settings);\n      toggleButtonState(inputList, buttonElement, settings);\n    });\n  });\n};\n\n// Включение валидации всех форм\nvar enableValidation = function enableValidation(settings) {\n  var formList = Array.from(document.querySelectorAll(settings.formSelector));\n  formList.forEach(function (formElement) {\n    setEventListeners(formElement, settings);\n  });\n};\n\n// Очистка ошибок валидации\nvar clearValidation = function clearValidation(formElement, settings) {\n  var inputList = Array.from(formElement.querySelectorAll(settings.inputSelector));\n  var buttonElement = formElement.querySelector(settings.submitButtonSelector);\n  inputList.forEach(function (inputElement) {\n    hideInputError(formElement, inputElement, settings);\n  });\n  buttonElement.disabled = true;\n  buttonElement.classList.add(settings.inactiveButtonClass);\n};\n\n//# sourceURL=webpack://mesto-project-ff/./src/scripts/validate.js?");

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