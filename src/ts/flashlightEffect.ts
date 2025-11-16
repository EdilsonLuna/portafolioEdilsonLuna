/**
 * Efecto de linterna que revela la firma de fondo al pasar el mouse
 * Crea un círculo que sigue el cursor y revela el patrón de firma oculto
 */

export function initFlashlightEffect() {
    // Solo activar el efecto en dispositivos con ancho mayor a 768px
    if (window.innerWidth < 768) {
        return;
    }

    // Crear el overlay dinámicamente
    const overlay = document.createElement('div');
    overlay.id = 'flashlight-overlay';
    overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 1;
        background: radial-gradient(circle 100px at 50% 50%, rgba(18, 18, 18, 0.4) 0%, rgba(18, 18, 18, 0.6) 40%, rgba(18, 18, 18, 0.85) 70%, #121212 100%);
    `;
    document.body.appendChild(overlay);

    // Actualizar posición del mouse
    document.addEventListener('mousemove', (e: MouseEvent) => {
        const mouseX = e.clientX;
        const mouseY = e.clientY;
        
        // Actualizar la máscara con la posición del mouse
        // El círculo tiene 100px de radio, más opaco para mantener el foco en el contenido
        const maskGradient = `radial-gradient(circle 100px at ${mouseX}px ${mouseY}px, rgba(18, 18, 18, 0.4) 0%, rgba(18, 18, 18, 0.6) 40%, rgba(18, 18, 18, 0.85) 70%, #121212 100%)`;
        overlay.style.background = maskGradient;
    });

    // Ajustar en caso de scroll
    document.addEventListener('scroll', () => {
        // El overlay es fixed, así que no necesita ajustes adicionales
    });
}
