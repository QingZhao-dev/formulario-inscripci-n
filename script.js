
const formulario = document.getElementById("formulario");
const confirmacion = document.getElementById("confirmacion");

formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();
    const entrada = document.getElementById("entrada").value;
    const privacidad = document.getElementById("privacidad").checked;

    if (nombre === "" || email === "" || entrada === "" || !privacidad) {
        alert("Completa todos los campos obligatorios.");
        return;
    }

    confirmacion.innerHTML = `
    <div class="check">✓</div>
    <h2>¡Todo listo!</h2>
    <p>Tu inscripción se ha completado correctamente.</p>

    <div class="resumen">
        <p><strong>Nombre</strong><br>${nombre}</p>
        <p><strong>Correo electrónico</strong><br>${email}</p>
        <p><strong>Tipo de entrada</strong><br>${entrada.toUpperCase()}</p>
    </div>

    <button type="button" id="volver">Hacer otra inscripción</button>
    `;

    confirmacion.hidden = false;
    formulario.hidden = true;

    const volver = document.getElementById("volver");

    volver.addEventListener("click", function() {
        formulario.reset();
        formulario.hidden = false;
        confirmacion.hidden = true;
    });
});
