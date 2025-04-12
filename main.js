(()=>{"use strict";var e={d:(t,n)=>{for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};function t(e,t,n,r,o){var c=h.cloneNode(!0),a=c.querySelector(".card__image"),u=c.querySelector(".card__title"),i=c.querySelector(".card__delete-button"),l=c.querySelector(".card__like-button"),s=c.querySelector(".card__like-count");return a.src=e.link,a.alt=e.name,u.textContent=e.name,s.textContent=e.likes.length,e.likes.some((function(e){return e._id===o}))&&l.classList.add("card__like-button_is-active"),l.addEventListener("click",(function(){return t(l,e._id)})),a.addEventListener("click",(function(){r(e.link,e.name)})),e.owner._id===o?i.addEventListener("click",(function(){n(c,e._id)})):i.remove(),c}function n(e){e.classList.add("popup_is-opened"),document.addEventListener("keydown",o)}function r(e){e.classList.remove("popup_is-opened"),document.removeEventListener("keydown",o)}function o(e){if("Escape"===e.key){var t=document.querySelector(".popup_is-opened");t&&r(t)}}function c(e){e.target.classList.contains("popup")&&r(e.target)}e.d({},{Tp:()=>h});var a=function(e,t,n,r){var o=e.querySelector(".".concat(t.id,"-error"));t.classList.add(r.inputErrorClass),o.textContent=n,o.classList.add(r.errorClass)},u=function(e,t,n){var r=e.querySelector(".".concat(t.id,"-error"));t.classList.remove(n.inputErrorClass),r.textContent="",r.classList.remove(n.errorClass)},i=function(e,t){e.disabled=!0,e.classList.add(t.inactiveButtonClass)},l=function(e,t,n){!function(e){return e.some((function(e){return!e.validity.valid}))}(e)?(t.disabled=!1,t.classList.remove(n.inactiveButtonClass)):i(t,n)},s=function(e,t){var n=Array.from(e.querySelectorAll(t.inputSelector)),r=e.querySelector(t.submitButtonSelector);n.forEach((function(n){u(e,n,t)})),i(r,t)},d={baseUrl:"https://nomoreparties.co/v1/wff-cohort-35",headers:{authorization:"205e9af0-dd27-4676-94b2-fc002db19adf","Content-Type":"application/json"}};function p(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}function f(e){return fetch("".concat(d.baseUrl,"/cards/likes/").concat(e),{method:"PUT",headers:d.headers}).then(p)}function _(e){return fetch("".concat(d.baseUrl,"/cards/likes/").concat(e),{method:"DELETE",headers:d.headers}).then(p)}function y(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}var m,v,h=document.querySelector("#card-template").content.querySelector(".card"),b=document.querySelector(".places__list"),S=document.querySelectorAll(".popup"),q=document.querySelectorAll(".popup__close"),k=document.querySelector(".profile__edit-avatar-button"),C=document.querySelector(".popup_type_edit-avatar"),E=C.querySelector(".popup__form"),L=E.querySelector(".popup__input_type_avatar"),g=document.querySelector(".profile__image"),x=document.querySelector(".profile__edit-button"),A=document.querySelector(".profile__title"),w=document.querySelector(".profile__description"),B=document.querySelector(".popup_type_edit"),U=B.querySelector(".popup__form"),O=U.querySelector(".popup__input_type_name"),j=U.querySelector(".popup__input_type_description"),T=document.querySelector('.popup__form[name="new-place"]'),P=document.querySelector(".profile__add-button"),D=T.querySelector("#card-title-input"),I=T.querySelector("#card-link-input"),M=document.querySelector(".popup_type_image"),N=M.querySelector(".popup__image"),J=M.querySelector(".popup__caption"),H=document.querySelector(".popup_type_confirm-delete"),z=(H.querySelector(".popup__form"),{formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"});function $(e,t){N.src=e,N.alt=t,J.textContent=t,n(M)}function F(e,t){var n=e.closest(".card").querySelector(".card__like-count"),r=e.classList.contains("card__like-button_is-active");e.disabled=!0;var o=r?"снятии":"постановке";(r?_:f)(t).then((function(t){e.classList.toggle("card__like-button_is-active"),n.textContent=t.likes.length})).catch((function(e){console.error("Ошибка при ".concat(o," лайка:"),e)})).finally((function(){e.disabled=!1}))}function G(e,t){!function(e,t){n(H);var o=H.querySelector(".popup__button_type_delete");o.onclick=null,o.onclick=function(n){n.preventDefault(),function(e){return fetch("".concat(d.baseUrl,"/cards/").concat(e),{method:"DELETE",headers:d.headers}).then(p)}(t).then((function(){e.remove(),r(H)})).catch((function(e){return console.error("Ошибка при удалении карточки:",e)}))}}(e,t)}Promise.all([fetch("".concat(d.baseUrl,"/users/me"),{headers:d.headers}).then(p),fetch("".concat(d.baseUrl,"/cards"),{headers:d.headers}).then(p)]).then((function(e){var n,r,o=(r=2,function(e){if(Array.isArray(e))return e}(n=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,c,a,u=[],i=!0,l=!1;try{if(c=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;i=!1}else for(;!(i=(r=c.call(n)).done)&&(u.push(r.value),u.length!==t);i=!0);}catch(e){l=!0,o=e}finally{try{if(!i&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(l)throw o}}return u}}(n,r)||function(e,t){if(e){if("string"==typeof e)return y(e,t);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?y(e,t):void 0}}(n,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),c=o[0],a=o[1];A.textContent=c.name,w.textContent=c.about,m=c._id,c.avatar&&(g.style.backgroundImage="url(".concat(c.avatar,")")),a.reverse().forEach((function(e){var n=t(e,F,G,$,m);b.prepend(n)}))})).catch((function(e){return console.error("Ошибка при загрузке данных: ".concat(e))})),v=z,Array.from(document.querySelectorAll(v.formSelector)).forEach((function(e){!function(e,t){var n=Array.from(e.querySelectorAll(t.inputSelector)),r=e.querySelector(t.submitButtonSelector);l(n,r,t),n.forEach((function(o){o.addEventListener("input",(function(){!function(e,t,n){t.validity.patternMismatch?a(e,t,t.dataset.errorMessage,n):t.validity.valid?u(e,t,n):a(e,t,t.validationMessage,n)}(e,o,t),l(n,r,t)}))}))}(e,v)})),P.addEventListener("click",(function(){s(U,z),n(document.querySelector(".popup_type_new-card"))})),k.addEventListener("click",(function(){E.reset(),n(C)})),E.addEventListener("submit",(function(e){e.preventDefault();var t=L.value,n=E.querySelector(z.submitButtonSelector);n.textContent="Сохранение...",n.disabled=!0,function(e){return fetch("".concat(d.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:d.headers,body:JSON.stringify({avatar:e})}).then(p)}(t).then((function(e){g.style.backgroundImage="url(".concat(e.avatar,")"),r(C)})).catch((function(e){return console.error("Ошибка при обновлении аватара:",e)})).finally((function(){n.textContent="Сохранить",n.disabled=!1}))})),U.addEventListener("submit",(function(e){e.preventDefault();var t=O.value,n=j.value,o=U.querySelector(z.submitButtonSelector);o.textContent="Сохранение...",o.disabled=!0,function(e){var t=e.name,n=e.about;return fetch("".concat(d.baseUrl,"/users/me"),{method:"PATCH",headers:d.headers,body:JSON.stringify({name:t,about:n})}).then(p)}({name:t,about:n}).then((function(e){A.textContent=e.name,w.textContent=e.about,r(B),U.reset()})).catch((function(e){return console.error("Ошибка при обновлении профиля: ".concat(e))})).finally((function(){o.textContent="Сохранить",o.disabled=!1}))})),T.addEventListener("submit",(function(e){e.preventDefault();var n=D.value,o=I.value,c=T.querySelector(z.submitButtonSelector);c.textContent="Сохранение...",c.disabled=!0,function(e){var t=e.name,n=e.link;return fetch("".concat(d.baseUrl,"/cards"),{method:"POST",headers:d.headers,body:JSON.stringify({name:t,link:n})}).then(p)}({name:n,link:o}).then((function(e){var n=t(e,F,G,$,m);b.prepend(n),r(T.closest(".popup")),T.reset()})).catch((function(e){console.error("Ошибка при добавлении карточки: ".concat(e))})).finally((function(){c.textContent="Добавить",c.disabled=!1}))})),x.addEventListener("click",(function(){O.value=A.textContent,j.value=w.textContent,s(U,z);var e=U.querySelector(z.submitButtonSelector);e.disabled=!1,e.classList.remove(z.inactiveButtonClass),n(B)})),P.addEventListener("click",(function(){s(T,z),n(document.querySelector(".popup_type_new-card")),T.reset()})),q.forEach((function(e){e.addEventListener("click",(function(e){r(e.target.closest(".popup"))}))})),S.forEach((function(e){e.addEventListener("mousedown",c)}))})();