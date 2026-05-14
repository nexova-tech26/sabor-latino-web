import AOS from 'aos'
import 'aos/dist/aos.css'

export default defineNuxtPlugin(() => {
  // Inicializamos AOS con configuraciones elegantes por defecto
  AOS.init({
    duration: 800,       // Duración de la animación en milisegundos (0.8 segundos es muy elegante)
    once: false,          // Si es 'true', la animación solo ocurre la primera vez que bajas. Si es 'false', se repite al subir y bajar.
    offset: 50,          // Cuántos píxeles debes hacer scroll antes de que la animación se dispare
    easing: 'ease-out-cubic', // Un tipo de aceleración suave y fluida
  })
})