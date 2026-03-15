document.addEventListener('DOMContentLoaded', function() {
    const formulario = document.getElementById('miFormulario');
    const respuesta = document.getElementById('mensajeExito');

    if (formulario) {
        formulario.addEventListener('submit', function(event) {
            // 1. Detenemos el envío real para que no recargue la página
            event.preventDefault();

            // 2. Escribimos el texto y cambiamos la clase
            respuesta.textContent = "¡Gracias! El mensaje se ha enviado con éxito. ✅";
            
            // Limpiamos clases previas y añadimos la de visibilidad
            respuesta.classList.remove('mensaje-oculto');
            respuesta.classList.add('mensaje-visible');

            // 3. Limpiamos los campos del formulario
            formulario.reset();

            // 4. (Opcional) Hacer que desaparezca tras 5 segundos
            setTimeout(() => {
                respuesta.classList.remove('mensaje-visible');
                respuesta.classList.add('mensaje-oculto');
            }, 5000);
        });
    }
});