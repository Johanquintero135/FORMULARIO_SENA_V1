// Javascripts.js

// Lógica para máximo 3 checkboxes seleccionados
const checkboxes = document.querySelectorAll('.Inputt[type="checkbox"]');
checkboxes.forEach(cb => {
    cb.addEventListener('change', function () {
        const checked = document.querySelectorAll('.Inputt[type="checkbox"]:checked');
        if (checked.length > 3) {
            this.checked = false;
            alert('Solo puedes seleccionar hasta 3 opciones.');
        }
    });
});

// Función para mostrar el modal
function showModal() {
    const modal = document.getElementById("modal-success");
    modal.classList.remove('hidden');
}

// Función para ocultar el modal
function hideModal() {
    const modal = document.getElementById("modal-success");
    modal.classList.add('hidden');
}

// Event listeners
document.querySelector("form").addEventListener("submit", (event) => {
    event.preventDefault();
    showModal();
});

document.getElementById("close-modal").addEventListener("click", () => {
    hideModal();
});