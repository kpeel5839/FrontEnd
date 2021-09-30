const openBtn = document.querySelector(".js-open-btn");
const modal = document.querySelector(".js-modal");
const modalOverlay = document.querySelector(".js-modal-overlay");
const closeBtn = document.querySelector(".js-close-btn");

const MODAL_SHOWING_CN = "show";

function closeModal() {
    modal.classList.remove(MODAL_SHOWING_CN);
}

function onBtnClick() {
    modal.classList.add(MODAL_SHOWING_CN);
}

function init() {
    openBtn.addEventListener("click", onBtnClick);
    modalOverlay.addEventListener("click", closeModal);
    closeBtn.addEventListener("click", closeModal);
}

init();
