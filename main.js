document.addEventListener('DOMContentLoaded', () => {
    // 1. LISTA DE COMPAÑEROS (Configura aquí los números de tu equipo)
    const conductores = [
        { nombre: "Yean", telefono: "584247531915" }, // Número original
        { nombre: "Karla", telefono: "584149124120" },
    ];

    // Selección aleatoria del conductor (Tipo Didi/Uber)
    const conductorAsignado = conductores[Math.floor(Math.random() * conductores.length)];

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

    // Lógica de Geolocalización
    const btnGeo = document.getElementById('btnGeolocalizar');
    const origenInput = document.getElementById('origen');

    if (btnGeo && origenInput) {
        btnGeo.addEventListener('click', () => {
            if (!navigator.geolocation) {
                alert("Tu navegador no soporta geolocalización.");
                return;
            }
            btnGeo.innerText = "📍 OBTENIENDO POSICIÓN...";
            navigator.geolocation.getCurrentPosition(
                (posicion) => {
                    const lat = posicion.coords.latitude;
                    const lon = posicion.coords.longitude;
                    const googleMapsLink = `https://www.google.com/maps?q=${lat},${lon}`;
                    origenInput.value = googleMapsLink;
                    btnGeo.innerText = "✅ UBICACIÓN CARGADA";
                    btnGeo.style.borderColor = "#00ff00";
                    btnGeo.style.color = "#00ff00";
                },
                (error) => {
                    alert("No se pudo obtener la ubicación automáticamente.");
                    btnGeo.innerText = "❌ ERROR AL OBTENER";
                },
                { enableHighAccuracy: true }
            );
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

            // Construcción del mensaje para WhatsApp
            const textoWhatsApp = 
                `*MOTO TAXI BETANCOURT*%0A` +
                `━━━━━━━━━━━━━━━━━━%0A` +
                `👤 *Cliente:* ${nombre}%0A` +
                `📍 *Recogida:* ${origen}%0A` +
                `🏁 *Destino:* ${destino}%0A` +
                `🛵 *Servicio:* ${servicio}%0A` +
                `💰 *Tarifa Est.:* ${tarifa}%0A` +
                `🪪 *Atendido por:* ${conductorAsignado.nombre}%0A` +
                `━━━━━━━━━━━━━━━━━━%0A` +
                `_Pedido desde la Web_`;

            // Envía el mensaje al conductor seleccionado al azar
            const url = `https://wa.me/${conductorAsignado.telefono}?text=${textoWhatsApp}`;
            window.open(url, '_blank');
        });
    }
});
