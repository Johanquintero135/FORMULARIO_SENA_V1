// main.js
import { showModal, hideModal, validateForm } from './Javascripts.js';

// Event listener para el formulario
document.getElementById("survey-form").addEventListener("submit", (event) => {
    event.preventDefault();
    
    // Validar el formulario antes de mostrar el modal
    if (validateForm()) {
        showModal();
    }
});

// Event listener para cerrar el modal
document.getElementById("close-modal").addEventListener("click", () => {
    hideModal();
});
