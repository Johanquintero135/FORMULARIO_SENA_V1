// main.js
import { showModal, hideModal } from './Javascripts';

document.getElementById("survey-form").addEventListener("submit", (event) => {
    event.preventDefault();
    showModal();
});

document.getElementById("close-modal").addEventListener("click", () => {
    hideModal();
});
