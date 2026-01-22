document.querySelector('.form-reserva').addEventListener('submit', function(e) {
    e.preventDefault(); // Evita que la página se recargue

    // 1. Capturar los datos del formulario, incluyendo el nuevo campo de precio
    const nombre = document.getElementById('nombre').value;
    const origen = document.getElementById('origen').value;
    const destino = document.getElementById('destino').value;
    const fecha = document.getElementById('fecha').value;
    const precio = document.getElementById('precio-servicio').value; // Nueva línea para el precio
    
    // 2. Tu número de teléfono real
    const telefono = "584247531915"; 

    // 3. Crear el mensaje incluyendo el nombre de la marca "Otro" y el precio
    const textoMensaje = `Hola Otro! Quisiera reservar un servicio:%0A` +
                         `*Nombre:* ${nombre}%0A` +
                         `*Origen:* ${origen}%0A` +
                         `*Destino:* ${destino}%0A` +
                         `*Fecha/Hora:* ${fecha}%0A` +
                         `*Precio Estimado:* ${precio}`; // Se añade el precio al mensaje

    // 4. Generar la URL para WhatsApp
    const url = `https://wa.me/${telefono}?text=${textoMensaje}`;

    // Abrir WhatsApp
    window.location.href = url;
});
