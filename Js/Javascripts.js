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
export function showModal() {
    const modal = document.getElementById("modal-success");
    modal.classList.remove('hidden');
}

// Función para ocultar el modal
export function hideModal() {
    const modal = document.getElementById("modal-success");
    modal.classList.add('hidden');
}

// Función de validación del formulario
export function validateForm() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const age = document.getElementById('Age').value;
    const option1 = document.getElementById('option1').value;
    const favoriteBrand = document.getElementById('favoriteBrand').value;
    const futureCar = document.querySelector('input[name="futureCar"]:checked');

    if (!name) {
        alert('Por favor, ingresa tu nombre.');
        return false;
    }

    if (!email) {
        alert('Por favor, ingresa tu email.');
        return false;
    }

    if (!age || age < 1 || age > 120) {
        alert('Por favor, ingresa una edad válida (1-120).');
        return false;
    }

    if (!option1) {
        alert('Por favor, selecciona una opción.');
        return false;
    }

    if (!favoriteBrand) {
        alert('Por favor, selecciona tu marca de auto favorita.');
        return false;
    }

    if (!futureCar) {
        alert('Por favor, responde si planeas comprar un auto nuevo.');
        return false;
    }

    return true;
}