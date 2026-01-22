document.addEventListener('DOMContentLoaded', () => {
    // Control del Preloader
    const preloader = document.getElementById('preloader');
    if (preloader) {
        window.addEventListener('load', () => {
            preloader.classList.add('fade-out');
            setTimeout(() => preloader.style.display = 'none', 600);
        });
    }

    // Lógica del Selector de Tarifas
    const selector = document.getElementById('tipoServicio');
    const precioInput = document.getElementById('precioMostrado');

    if (selector && precioInput) {
        selector.addEventListener('change', () => {
            const selectedOption = selector.options[selector.selectedIndex];
            const precio = selectedOption.getAttribute('data-precio');
            precioInput.value = `$${precio}`;
        });
    }

    // Manejo del Formulario de Reserva
    const reservaForm = document.getElementById('reservaForm');
    if (reservaForm) {
        reservaForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const nombre = document.getElementById('nombre').value.trim();
            const origen = document.getElementById('origen').value.trim();
            const destino = document.getElementById('destino').value.trim();
            const servicio = selector.value;
            const tarifa = precioInput.value;

            // Construcción del mensaje profesional para WhatsApp
            const textoWhatsApp = 
                `*MOTO TAXI BETANCOURT*%0A` +
                `━━━━━━━━━━━━━━━━━━%0A` +
                `👤 *Cliente:* ${nombre}%0A` +
                `📍 *Recogida:* ${origen}%0A` +
                `🏁 *Destino:* ${destino}%0A` +
                `🛵 *Servicio:* ${servicio}%0A` +
                `💰 *Tarifa Est.:* ${tarifa}%0A` +
                `━━━━━━━━━━━━━━━━━━%0A` +
                `_Enviado desde el portal web_`;

            const numeroWhatsApp = "584247531915";
            const url = `https://wa.me/${numeroWhatsApp}?text=${textoWhatsApp}`;

            window.open(url, '_blank');
        });
    }
});
