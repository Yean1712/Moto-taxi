document.querySelector('.form-reserva').addEventListener('submit', function(e) {
    e.preventDefault(); // Evita que la página se recargue

    // 1. Capturar los datos del formulario
    const nombre = document.getElementById('nombre').value;
    const origen = document.getElementById('origen').value;
    const destino = document.getElementById('destino').value;
    const fecha = document.getElementById('fecha').value;
    
    // 2. Tu número de teléfono real (formato internacional sin el +)
    const telefono = "584247531915"; 

    // 3. Crear el mensaje (Usando encodeURIComponent para evitar errores de símbolos)
    const textoMensaje = `Hola MotoExpress! Quisiera reservar un servicio:%0A` +
                         `*Nombre:* ${nombre}%0A` +
                         `*Origen:* ${origen}%0A` +
                         `*Destino:* ${destino}%0A` +
                         `*Fecha/Hora:* ${fecha}`;

    // 4. USAR HTTPS://WA.ME/ (Esto arregla el error ERR_UNKNOWN_URL_SCHEME)
    const url = `https://wa.me/${telefono}?text=${textoMensaje}`;

    // Abrir en el mismo navegador para asegurar que el celular detecte WhatsApp
    window.location.href = url;
});
